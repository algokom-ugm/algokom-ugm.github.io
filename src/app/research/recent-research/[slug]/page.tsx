"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { publikasiData, penelitiData } from "@/data/ndata";
import Link from "next/link";
import { useSearchParams, useRouter, useParams } from "next/navigation";

export default function ResearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Get selected researcher
  const researcherSlugParam = searchParams.get("researcher");
  const selectedResearcher =
    penelitiData.find((r) => r.slug === researcherSlugParam) || penelitiData[0];

  // Process publications data
  const filteredResearch = publikasiData
    .filter((pub) => pub.id_peneliti.includes(selectedResearcher.id))
    .sort((a, b) => {
      const dateA = new Date(a.tahun, a.bulan - 1, a.hari);
      const dateB = new Date(b.tahun, b.bulan - 1, b.hari);
      return dateB.getTime() - dateA.getTime();
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
    }));

  useEffect(() => {
    setActiveSection(0);
    window.scrollTo(0, 0);
  }, [selectedResearcher.slug]);

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
    <div className="max-w-7xl mx-auto px-4 py-12 relative">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[var(--text-1)]">
          Penelitian Terkini
        </h2>
      </div>

      <div className="fixed md:block z-50 max-w-[15%] ">
        <div className="flex flex-col gap-3">
          {filteredResearch.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 transition-colors duration-300"
              style={{
                color:
                  index === activeSection
                    ? "var(--text-1-hover)"
                    : "var(--text-muted)",
              }}
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
              <Link
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
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="relative w-full max-w-md mt-8">
          <select
            className="absolute inset-0 opacity-0 cursor-pointer"
            value={selectedResearcher.slug}
            onChange={(e) =>
              router.push(`/research/recent-research/${e.target.value}`)
            }
          >
            {penelitiData.map((researcher) => (
              <option key={researcher.slug} value={researcher.slug}>
                {researcher.nama}
              </option>
            ))}
          </select>

          <div
            className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg border border-white/20 backdrop-blur-lg transition-all duration-300 ${
              isOpen ? "ring-2 ring-blue-200" : ""
            }`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-6 py-4 text-left flex items-center justify-between group"
            >
              <span className="text-gray-700 font-medium truncate pr-2">
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
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="border-t border-white/20 mx-4"></div>
              <ul className="px-4 h-[9rem] overflow-y-scroll">
                {penelitiData.map((researcher) => (
                  <li
                    key={researcher.slug}
                    onClick={() => {
                      router.push(
                        `/research/recent-research/${researcher.slug}`
                      );
                    }}
                    className={`h-[3rem] rounded-lg cursor-pointer transition-all flex items-center justify-between
                  ${
                    selectedResearcher.slug === researcher.slug
                      ? "bg-blue-500/10 text-blue-600 font-medium"
                      : "hover:bg-gray-100/50 text-gray-600 hover:text-gray-900"
                  }`}
                    role="option"
                    aria-selected={selectedResearcher.slug === researcher.slug}
                  >
                    <span>{researcher.nama}</span>
                    {selectedResearcher.slug === researcher.slug && (
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
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

      {filteredResearch.map((item, index) => (
        <section
          key={index}
          id={`research-${index + 1}`}
          className="flex relative items-center"
          style={{
            backgroundColor:
              index % 2 === 0 ? "var(--background-1)" : "var(--background-2)",
          }}
        >
          <div
            className="absolute inset-0 -z-10 w-screen"
            style={{
              backgroundColor:
                index % 2 === 0 ? "var(--background-1)" : "var(--background-2)",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />

          <div className="w-full px-6 py-20 ml-[25%]">
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
                    href={`/research/${item.slug}`}
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
  );
}
