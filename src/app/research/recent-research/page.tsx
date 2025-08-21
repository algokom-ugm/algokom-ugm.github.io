"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import { publikasiData, penelitiData } from "@/data/ndata";
import { useSearchParams, useRouter } from "next/navigation";

function RecentResearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Read researcher from query (?researcher=slug)
  const researcherSlugParam = searchParams.get("researcher");
  const selectedResearcher =
    penelitiData.find((r) => r.slug === researcherSlugParam) || penelitiData[0];
  console.log(selectedResearcher);
  // Prepare publications for the selected researcher
  const filteredResearch = publikasiData
    .filter((pub) => pub.id_peneliti.includes(selectedResearcher.id))
    .sort((a, b) => {
      const dateA = a.tahun
        ? new Date(
            a.tahun,
            (a.bulan ?? 1) - 1, // default to January if bulan is null
            a.hari ?? 1 // default to 1st if hari is null
          ).getTime()
        : Number.NEGATIVE_INFINITY; // put null tahun at the end

      const dateB = b.tahun
        ? new Date(b.tahun, (b.bulan ?? 1) - 1, b.hari ?? 1).getTime()
        : Number.NEGATIVE_INFINITY;

      return dateB - dateA;
    })
    .slice(0, 3)
    .map((pub) => ({
      id: pub.id,
      title: pub.judul,
      desc: pub.deskripsi,
      img: pub.image,
      slug: pub.judul
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, ""),
      researcherSlug: selectedResearcher.slug,
      url: pub.url,
    }));

  // Reset state on researcher change
  useEffect(() => {
    setActiveSection(0);
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, [selectedResearcher.slug]);

  // Track scroll to highlight left nav
  useEffect(() => {
    const handleScroll = () => {
      const sectionHeight = window.innerHeight;
      const newSection = Math.round(window.scrollY / sectionHeight);
      setActiveSection(newSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 relative">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[var(--text-1)]">
          Proyek Lab
        </h2>
      </div>
      {/* MOBILE/TABLET researcher selector (hidden on lg) */}
      <div className="block lg:hidden my-6 px-6">
        <select
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white shadow-md text-gray-700 focus:ring-2 focus:ring-blue-400"
          value={selectedResearcher.slug}
          onChange={(e) =>
            router.push(`/research/recent-research/${e.target.value}`)
          }
          title="Pilih Peneliti"
        >
          {penelitiData.map((researcher) => (
            <option key={researcher.slug} value={researcher.slug}>
              {researcher.nama}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full flex flex-row">
        {/* (DESKTOP) Left rail: Section dots + researcher selector */}
        <div className="sticky top-30 lg:block z-50 w-1/4 hidden h-fit">
          <div className="flex flex-col gap-3">
            {filteredResearch.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col gap-2 transition-colors duration-300 ${
                  index === activeSection
                    ? "text-[var(--text-1-hover)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                <div className="flex flex-row items-center justify-start gap-2">
                  <div
                    className="w-2 h-2 rounded-full border-2 transition-all"
                    style={{
                      borderColor:
                        index === activeSection
                          ? "var(--background-3)"
                          : "var(--border-1)",
                      backgroundColor:
                        index === activeSection
                          ? "var(--background-3)"
                          : "transparent",
                    }}
                  />
                  <h5>0{index + 1}</h5>
                </div>
                {/* Smooth-scroll to section anchors */}
                <a
                  href={`#research-${index + 1}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.getElementById(
                      `research-${index + 1}`
                    );
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(
                        null,
                        "",
                        `#research-${index + 1}`
                      );
                    }
                  }}
                  className="line-clamp-3"
                >
                  {item.title}
                </a>
              </div>
            ))}
          </div>

          {/* Researcher selector (query param) */}
          <div className="relative w-full max-w-md mt-8">
            <select
              className="absolute inset-0 opacity-0 cursor-pointer"
              value={selectedResearcher.slug}
              onChange={(e) =>
                router.push(
                  `/research/recent-research?researcher=${encodeURIComponent(
                    e.target.value
                  )}`
                )
              }
              aria-label="Pilih Peneliti"
            >
              {penelitiData.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.nama}
                </option>
              ))}
            </select>

            <div
              className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg border border-white/30 backdrop-blur-xl transition-all duration-300 ${
                isOpen ? "ring-2 ring-blue-300" : ""
              }`}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 text-left flex items-center justify-between group"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
              >
                <span className="text-gray-800 font-semibold truncate pr-2">
                  {selectedResearcher.nama}
                </span>
                <div
                  className={`transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-blue-500 group-hover:text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[18rem] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-white/20 mx-4"></div>

                <ul
                  className="px-4 py-2 h-[9rem] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent divide-y divide-gray-200"
                  role="listbox"
                >
                  {penelitiData.map((r) => (
                    <li
                      key={r.slug}
                      onClick={() => {
                        setIsOpen(false);
                        router.push(
                          `/research/recent-research?researcher=${encodeURIComponent(
                            r.slug
                          )}`
                        );
                      }}
                      className={`truncate px-3 rounded-lg cursor-pointer transition-all flex items-center justify-between py-2
              ${
                selectedResearcher.slug === r.slug
                  ? "bg-blue-500/10 text-blue-600 font-semibold"
                  : "hover:bg-gray-100/70 text-gray-600 hover:text-blue-500"
              }`}
                      role="option"
                      aria-selected={selectedResearcher.slug === r.slug}
                    >
                      <span>{r.nama}</span>
                      {selectedResearcher.slug === r.slug && (
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="w-3/4">
          {filteredResearch.map((item, index) => (
            <section
              key={item.id}
              id={`research-${index + 1}`}
              className="flex relative items-center border-gray-200"
              // style={{
              //   backgroundColor:
              //     index % 2 === 0
              //       ? "var(--background-1)"
              //       : "var(--background-2)",
              // }}
            >
              {/* <div
                className="absolute inset-0 -z-10 w-screen"
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? "var(--background-1)"
                      : "var(--background-2)",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              /> */}
              <div className="w-full px-6 py-8 lg:py-20">
                <div className="max-w-4xl">
                  <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-[var(--text-1)]">
                      {item.title}
                      <div className="w-16 h-1 bg-[var(--background-3)] mt-2 rounded-full" />
                    </h2>

                    <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-6">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 text-sm font-medium text-[var(--text-alt-1)] bg-[var(--background-3)] rounded-lg hover:bg-[var(--background-3-hover)] transition"
                      >
                        Selengkapnya
                      </a>
                    </div>

                    <div className="group relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={1200}
                        height={800}
                        className="object-cover w-full h-96"
                        priority={index < 3}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-alt-2)]/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

// 👇 The page wraps the client content with Suspense (required by Next 15)
export default function RecentResearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 bg-gray-200 rounded" />
            <div className="h-4 w-80 bg-gray-200 rounded" />
            <div className="h-4 w-72 bg-gray-200 rounded" />
            <div className="h-64 w-full bg-gray-200 rounded" />
          </div>
        </div>
      }
    >
      <RecentResearchContent />
    </Suspense>
  );
}
