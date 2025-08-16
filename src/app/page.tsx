"use client";

import Image from "next/image";
import { publikasiData } from "@/data/ndata";
import { newsevents } from "@/data/newsEvents";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faChartLine,
  faSatelliteDish,
  faCheckCircle,
  faLock,
  faProjectDiagram,
  faBrain,
  faSearch,
  faCogs,
  faLaptopCode,
  faShapes,
  faSitemap,
  faCodeBranch,
  faStream,
  faAtom,
  faCamera,
  faPalette,
  faChartBar,
  faDatabase,
  faPlayCircle,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const topics = [
  { icon: faMicrochip, label: "HPC" },
  { icon: faChartLine, label: "Performance Modeling" },
  { icon: faSatelliteDish, label: "Wireless Network" },
  { icon: faCheckCircle, label: "Formal Method" },
  { icon: faChartLine, label: "Stochastic Analysis" },
  { icon: faCheckCircle, label: "Software QA" },
  { icon: faLock, label: "Kriptografi" },
  { icon: faProjectDiagram, label: "Ontology" },
  { icon: faBrain, label: "Knowledge Graph" },
  { icon: faSearch, label: "Info Retrieval" },
  { icon: faCogs, label: "Numerical Method" },
  { icon: faLaptopCode, label: "Parallel Computing" },
  { icon: faShapes, label: "Algo & Computation" },
  { icon: faSitemap, label: "Logic Computing" },
  { icon: faCodeBranch, label: "Algorithm Design" },
  { icon: faCamera, label: "Image Processing" },
  { icon: faPalette, label: "Graphics Computing" },
  { icon: faChartBar, label: "Forecasting" },
  { icon: faDatabase, label: "DBMS" },
  { icon: faStream, label: "Graph Computing" },
  { icon: faPlayCircle, label: "Media Analysis" },
  { icon: faRobot, label: "Machine Learning" },
  { icon: faDatabase, label: "Data Science" },
  { icon: faAtom, label: "Simulation" },
  { icon: faCogs, label: "Parallel Systems" },
];

export default function Home() {
  return (
    <div>
      <section className="min-h-[80vh] flex items-center justify-center px-8 overflow-hidden relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/fak-mipa.jpg"
              alt="Home"
              fill={true}
              className="rounded-xl shadow-lg object-cover max-w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white relative"
          >
            <div className="relative space-y-6">
              <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full" />

              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                Selamat Datang
              </h1>

              <div className="space-y-4">
                <div className="w-24 h-1 bg-blue-400 rounded-full mb-4" />
                <h2 className="text-2xl md:text-4xl font-semibold leading-relaxed">
                  Lab Algoritma & Komputasi
                </h2>
                <p className="text-lg md:text-xl text-blue-200 font-medium">
                  Universitas Gadjah Mada
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-8 h-96 overflow-hidden relative">
            {[
              topics.slice(0, Math.ceil(topics.length / 3)),
              topics.slice(
                Math.ceil(topics.length / 3),
                Math.ceil((2 * topics.length) / 3)
              ),
              topics.slice(Math.ceil((2 * topics.length) / 3)),
            ].map((topicChunk, i) => {
              // Define direction: even = scroll down, odd = scroll up
              const direction = i % 2 === 0 ? "scroll-down" : "scroll-up";

              // Define animation class using Tailwind arbitrary syntax
              const animationClass =
                direction === "scroll-down"
                  ? "animate-[scroll-down_20s_linear_infinite]"
                  : "animate-[scroll-up_20s_linear_infinite]";

              return (
                <div key={i} className="w-32 h-full overflow-hidden relative">
                  <div className={`absolute top-0 space-y-4 ${animationClass}`}>
                    {[...topicChunk, ...topicChunk].map((topic, index) => (
                      <div key={index} className="h-24 w-24 mx-auto">
                        <div className="h-full w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl flex flex-col items-center justify-center p-4 space-y-2 border border-white/20">
                          <FontAwesomeIcon
                            icon={topic.icon}
                            className="text-3xl text-white drop-shadow-sm"
                          />
                          <p className="text-xs text-white text-center font-medium leading-snug">
                            {topic.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12 max-w-7xl mx-auto">
          <div className="flex-1 space-y-4 text-[var(--text-1)]">
            <h2 className="text-3xl font-bold">Tentang Kami</h2>
            <p className="text-lg">
              Laboratorium ini berfokus pada pengembangan riset dan inovasi di
              bidang ilmu komputer dengan berbagai pendekatan, termasuk
              algoritma dan komputasi. Kami terus berupaya untuk memberikan
              kontribusi dalam pengembangan teknologi dan sistem canggih yang
              mendukung kemajuan berbagai sektor.
            </p>
            <p className="text-lg">
              Dengan fasilitas yang mendukung riset dan pengembangan,
              laboratorium ini menyediakan tempat bagi kolaborasi
              interdisipliner dan eksperimen dalam berbagai topik, seperti
              pengolahan data, optimasi sistem, dan teknologi komputasi modern.
            </p>
            <button className="mt-4 px-6 py-2 bg-[var(--background-3)] text-[var(--text-alt-1)] rounded-lg hover:bg-[var(--background-3-hover)] transition">
              Jelajahi
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <Image
              src="/data_center.jpg"
              alt="Home"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover max-w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 bg-[var(--background-2)]">
        <h2 className="text-4xl font-bold text-[var(--text-1)] mb-10">
          Penelitian Terkini
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl w-full">
          {publikasiData
            .sort((a, b) => {
            // Helper to normalize nulls -> put them at the bottom
            const safeNum = (val: number | null | undefined) =>
              val == null ? -Infinity : val;

            if (safeNum(b.tahun) !== safeNum(a.tahun)) {
              return safeNum(b.tahun) - safeNum(a.tahun);
            }
            if (safeNum(b.bulan) !== safeNum(a.bulan)) {
              return safeNum(b.bulan) - safeNum(a.bulan);
            }
            return safeNum(b.hari) - safeNum(a.hari);
          })
            .slice(0, 3) // Take the top 3 most recent
            .map((item, index) => (
              <div
                key={index}
                className="bg-[var(--background-2)] border border-[var(--border-1)] rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl text-[var(--text-1)] mb-2">
                      {item.judul}
                    </h3>
                    <p className="text-[var(--text-1-shade)] text-sm">
                      {item.deskripsi}
                    </p>
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/research/${item.judul
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "")}`}
                      className="inline-block px-4 py-2 text-sm font-medium text-[var(--text-alt-1)] bg-[var(--background-3)] rounded-lg hover:bg-[var(--background-3-hover)] transition"
                    >
                      Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center min-h-[80vh] px-6 py-12 bg-[var(--background-1)]">
        <h2 className="text-4xl font-bold text-[var(--text-1)] mb-10">
          Berita & Kegiatan
        </h2>

        <div className="space-y-8 max-w-5xl w-full">
          {newsevents.slice(0, 3).map((item, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-start gap-6 border-l-4 border-[var(--border-2)] bg-[var(--background-2)] p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={140}
                className="rounded-lg object-cover w-full md:w-60 h-40"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[var(--text-1)] mb-1">
                  {item.title}
                </h3>
                <p className="text-[var(--text-1-shade)] text-sm mb-2">
                  {item.desc}
                </p>
                <Link
                  href={`/news-and-events/${item.slug}`}
                  className="text-blue-700 hover:underline font-medium text-sm"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/news-and-events"
            className="px-6 py-3 bg-[var(--background-3)] text-[var(--text-alt-1)] rounded-lg hover:bg-[var(--background-3-hover)] transition"
          >
            Lihat Semua
          </Link>
        </div>
      </section>
    </div>
  );
}
