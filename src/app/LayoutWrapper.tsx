"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faFileAlt,
  faCaretRight,
  faLayerGroup,
  faUniversity,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  return (
    <div>
      <nav
        ref={navbarRef}
        className="absolute shadow-md px-6 py-2 bg-transparent w-full z-50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <Image
                src="/logo_ugm.jpg"
                alt="Home"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="flex flex-col leading-tight text-[var(--text-1)] font-bold text-lg">
              <span>Lab Algoritma dan Komputasi</span>
              <span>Universitas Gadjah Mada</span>
            </div>
          </div>

          <ul className="flex space-x-6 text-[var(--text-1)] font-medium">
            <li>
              <Link href="/" className="hover:text-[var(--text-1-hover)]">
                Beranda
              </Link>
            </li>
            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-2 text-[var(--text-1)]">
                Tentang Kami
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="transform transition-transform duration-300 group-hover:rotate-90"
                />
              </span>
              <ul className="absolute left-0 top-full hidden group-hover:block pt-2 space-y-2 bg-white shadow-lg rounded-lg w-56 text-black z-10">
                <li>
                  <Link
                    href="/introduction"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100"
                  >
                    <FontAwesomeIcon icon={faUniversity} />
                    Profil Lab
                  </Link>
                </li>
                <li>
                  <Link
                    href="/introduction/members"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100"
                  >
                    <FontAwesomeIcon icon={faUsers} />
                    Anggota
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <span className="flex items-center gap-2 text-[var(--text-1)]">
                Penelitian
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="transform transition-transform duration-300 group-hover:rotate-90"
                />
              </span>
              <ul className="absolute left-0 top-full hidden group-hover:block pt-2 space-y-2 bg-white shadow-lg rounded-lg w-56 text-black z-10">
                <li>
                  <Link
                    href="/research/recent-research/alfian-amrizal"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100"
                  >
                    <FontAwesomeIcon icon={faFlask} />
                    Penelitian Terkini
                  </Link>
                </li>
                <li>
                  <Link
                    href="/research/research-field"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-blue-100"
                  >
                    <FontAwesomeIcon icon={faLayerGroup} />
                    Bidang Penelitian
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/publications"
                className="hover:text-[var(--text-1-hover)]"
              >
                Publikasi
              </Link>
            </li>
            <li>
              <Link
                href="/news-and-events"
                className="hover:text-[var(--text-1-hover)]"
              >
                Berita & Kegiatan
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--text-1-hover)]"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div style={{ paddingTop: navbarHeight }}>{children}</div>

      <footer className="bg-[var(--background-2)] text-[var(--text-1)] mt-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/logo_ugm.jpg"
                    alt="UGM Logo"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold leading-tight">
                    Lab Algoritma dan Komputasi
                  </p>
                  <p className="text-sm opacity-80 leading-tight">
                    Universitas Gadjah Mada
                  </p>
                </div>
              </div>
              <p className="text-sm opacity-80 leading-relaxed">
                Laboratorium penelitian dan pengembangan ilmu komputer berbasis
                algoritma.
              </p>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-2">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/home"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/introduction"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Penelitian
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research/publications"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Publikasi
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/research/thesis-and-dissertation"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Tesis & Disertasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news-and-events"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Berita & Kegiatan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/members"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Anggota
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                    >
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 ">Kontak Kami</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="mt-1 text-[var(--icon-muted)] w-4"
                  />
                  <span className="text-sm opacity-90 leading-relaxed">
                    Jl. Teknika Utara, Sekip Utara, Yogyakarta 55281
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-[var(--icon-muted)] w-4"
                  />
                  <span className="text-sm opacity-90">+62 274 1234567</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[var(--icon-muted)] w-4"
                  />
                  <a
                    href="mailto:algoritma@ugm.ac.id"
                    className="text-sm hover:text-[var(--text-1-hover)] transition-colors duration-200"
                  >
                    algoritma@ugm.ac.id
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[var(--footer-border)] pt-6 text-center text-sm opacity-80">
            © {new Date().getFullYear()} Lab Algoritma dan Komputasi UGM.
            <br />
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
