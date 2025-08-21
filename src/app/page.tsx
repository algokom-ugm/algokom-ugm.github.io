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
  // { icon: faCheckCircle, label: "Software QA" },
  { icon: faLock, label: "Kriptografi" },
  { icon: faProjectDiagram, label: "Ontology" },
  // { icon: faBrain, label: "Knowledge Graph" },
  // { icon: faSearch, label: "Info Retrieval" },
  { icon: faCogs, label: "Numerical Method" },
  { icon: faLaptopCode, label: "Parallel Computing" },
  { icon: faShapes, label: "Algo & Computation" },
  { icon: faSitemap, label: "Logic Computing" },
  { icon: faCodeBranch, label: "Algorithm Design" },
  { icon: faCamera, label: "Image Processing" },
  { icon: faPalette, label: "Graphics Computing" },
  { icon: faChartBar, label: "Forecasting" },
  // { icon: faDatabase, label: "DBMS" },
  { icon: faStream, label: "Graph Computing" },
  // { icon: faPlayCircle, label: "Media Analysis" },
  // { icon: faRobot, label: "Machine Learning" },
  // { icon: faDatabase, label: "Data Science" },
  { icon: faAtom, label: "Simulation" },
  { icon: faCogs, label: "Parallel Systems" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/fak-mipa.jpg"
            alt="Home"
            fill={true}
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-white relative"
          >
            <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 md:space-y-6">
              <div className="absolute hidden lg:-left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full" />

              <h1 className="text-4xl  md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                Lab Algoritma & Komputasi
              </h1>

              <div className="flex flex-col items-center lg:items-start space-y-3 md:space-y-4">
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-400 rounded-full mb-3 md:mb-4" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed">
                  Universitas Gadjah Mada
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-blue-200 font-medium">
                  Dari Teori ke Komputasi, Dari Algoritma ke Solusi.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Default (2 rows horizontal) */}
          <div className="flex justify-center h-96 overflow-hidden relative lg:hidden flex-col">
            {[
              topics.slice(0, Math.ceil(topics.length / 2)),
              topics.slice(Math.ceil(topics.length / 2)),
            ].map((topicChunk, i) => {
              const direction =
                i % 2 === 0
                  ? "animate-[slide-right_20s_linear_infinite]"
                  : "animate-[slide-left_20s_linear_infinite]";

              return (
                <div key={i} className="w-full h-32 overflow-hidden relative">
                  <div className={`flex absolute gap-4 ${direction}`}>
                    {[...topicChunk, ...topicChunk].map((topic, index) => (
                      <div
                        key={index}
                        className="h-24 w-24 flex-shrink-0 mx-auto"
                      >
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

          {/* Large screens (3 columns vertical) */}
          <div className="hidden lg:flex justify-center gap-8 h-96 overflow-hidden relative">
            {[
              topics.slice(0, Math.ceil(topics.length / 3)),
              topics.slice(
                Math.ceil(topics.length / 3),
                Math.ceil((2 * topics.length) / 3)
              ),
              topics.slice(Math.ceil((2 * topics.length) / 3)),
            ].map((topicChunk, i) => {
              const direction =
                i % 2 === 0
                  ? "animate-[scroll-down_20s_linear_infinite]"
                  : "animate-[scroll-up_20s_linear_infinite]";

              return (
                <div key={i} className="w-32 h-full overflow-hidden relative">
                  <div className={`absolute top-0 space-y-4 ${direction}`}>
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

      {/* About Section */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
          <div className="flex-1 space-y-3 md:space-y-4 text-[var(--text-1)] order-2 md:order-1 items-center lg:items-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
              Tentang Kami
            </h2>
            <p className="text-base sm:text-lg text-justify lg:text-left">
              Selamat datang di <b>Laboratorium Algoritma dan Komputasi</b>{" "}
              Universitas Gadjah Mada. Laboratorium ini merupakan pusat riset
              yang aktif di Departemen Ilmu Komputer dan Elektronika, Fakultas
              Matematika dan Ilmu Pengetahuan Alam, dengan fokus pada
              pengembangan penelitian di bidang algoritma serta komputasi.
            </p>
            <p className="text-base sm:text-lg text-justify lg:text-left">
              Di bawah arahan{" "}
              <b>Muhammad Alfian Amrizal, B.Eng., M.I.S., Ph.D.</b>,
              Laboratorium Algoritma dan Komputasi menjadi wadah kolaborasi
              antara dosen dan mahasiswa yang memiliki antusiasme untuk
              merancang berbagai solusi inovatif yang ditujukan untuk menjawab
              permasalahan nyata di bidang kesehatan, pendidikan, maupun
              masyarakat secara luas.
            </p>
            {/* <button className="mt-3 sm:mt-4 px-4 sm:px-5 py-2 text-sm sm:text-base bg-[var(--background-3)] text-[var(--text-alt-1)] rounded-lg hover:bg-[var(--background-3-hover)] transition">
              Jelajahi
            </button> */}
            <div className="w-full flex justify-center items-center lg:items-left lg:justify-start">
              <Link href="/introduction">
                <button
                  className="cursor-pointer mt-3 sm:mt-4 px-4 sm:px-5 py-2 text-sm sm:text-base 
                          bg-[var(--background-3)] text-[var(--text-alt-1)] rounded-lg 
                          hover:bg-[var(--background-3-hover)] transition"
                >
                  Jelajahi
                </button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
            <div className="w-full max-w-md lg:max-w-lg">
              <Image
                src="/hpc-dike.jpg"
                alt="Home"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-[var(--background-2)]">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-6 md:mb-8 lg:mb-10">
            Penelitian Terkini
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full">
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
              .slice(0, 3)
              .map((item, index) => (
                <div
                  key={index}
                  className="bg-[var(--background-2)] border border-[var(--border-1)] rounded-xl md:rounded-2xl shadow-sm hover:shadow-md md:hover:shadow-xl transition overflow-hidden flex flex-col"
                >
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                    {/* judul + deskripsi bebas panjang */}
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl text-[var(--text-1)] mb-2">
                        {item.judul}
                      </h3>
                      <p className="text-[var(--text-1-shade)] text-xs sm:text-sm">
                        {item.deskripsi.substring(0, 100)}...
                      </p>
                    </div>

                    {/* spacer + gambar fix posisi */}
                    <div className="mt-auto">
                      <Image
                        src={item.image}
                        alt={item.judul}
                        width={240}
                        height={160}
                        className="rounded-lg object-cover w-full h-40 mt-4 bg-gray-200"
                      />
                      <div className="mt-4 sm:mt-5">
                        <Link
                          href={`/research/${item.judul
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[^\w-]+/g, "")}`}
                          className="inline-block px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-[var(--text-alt-1)] bg-[var(--background-3)] rounded hover:bg-[var(--background-3-hover)] transition"
                        >
                          Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      {/* <section className="py-8 sm:py-10 md:py-12 bg-[var(--background-1)]">
        <div className="flex flex-col items-center justify-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-1)] mb-6 md:mb-8 lg:mb-10">
            Berita & Kegiatan
          </h2>

          <div className="space-y-5 sm:space-y-6 md:space-y-8 w-full">
            {newsevents.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-start gap-4 sm:gap-5 md:gap-6 border-l-4 border-[var(--border-2)] bg-[var(--background-2)] p-4 sm:p-5 md:p-6 rounded-lg md:rounded-xl shadow hover:shadow-md md:hover:shadow-lg transition"
              >
                <div className="w-full hidden md:block md:w-48 lg:w-56 flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={240}
                    height={160}
                    className="rounded-lg object-cover w-full h-40"
                  />
                </div>
                <div className="flex-1 mt-3 md:mt-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-1)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-1-shade)] text-xs sm:text-sm mb-2">
                    {item.desc.substring(0, 120)}...
                  </p>
                  <div className="w-full md:hidden flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={240}
                      height={160}
                      className="rounded-lg object-cover w-full h-40"
                    />
                  </div>
                  <Link href={`/news-and-events/${item.slug}`}>
                    Button untuk mobile (default)
                    <button className="block md:hidden px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs sm:text-sm mt-4">
                      Selengkapnya
                    </button>

                    Text biasa untuk md ke atas
                    <span className="hidden md:inline text-blue-700 hover:underline font-medium text-xs sm:text-sm">
                      Baca Selengkapnya →
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10">
            <Link
              href="/news-and-events"
              className="px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-[var(--background-3)] text-[var(--text-alt-1)] rounded-lg hover:bg-[var(--background-3-hover)] transition"
            >
              Lihat Semua
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
