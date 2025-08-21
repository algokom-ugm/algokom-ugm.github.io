"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faCaretRight,
  faLayerGroup,
  faUniversity,
  faUsers,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const navbarRef = useRef<HTMLDivElement>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="absolute shadow-md px-6 py-2 bg-transparent w-full z-50 h-20 flex items-center justify-between"
      >
        <div className="max-w-7xl flex items-center justify-between relative w-full">
          {/* Logo + Text */}
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="/logo_ugm.jpg"
                alt="Home"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-tight text-[var(--text-1)] font-bold text-sm md:text-lg">
              <span>Lab Algoritma dan Komputasi</span>
              <span>Universitas Gadjah Mada</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 text-[var(--text-1)] font-medium">
            <li>
              <Link href="/" className="hover:text-[var(--text-1-hover)]">
                Beranda
              </Link>
            </li>

            {/* Tentang Kami Dropdown */}
            {/* <li className="relative group cursor-pointer">
              <span className="flex items-center gap-2">
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
            </li> */}

            <li>
              <Link
                href="/introduction"
                className="hover:text-[var(--text-1-hover)]"
              >
                Profil Lab
              </Link>
            </li>

            <li>
              <Link
                href="/introduction/members"
                className="hover:text-[var(--text-1-hover)]"
              >
                Anggota Lab
              </Link>
            </li>

            {/* Penelitian Dropdown */}
            {/* <li className="relative group cursor-pointer">
              <span className="flex items-center gap-2">
                Penelitian
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="transform transition-transform duration-300 group-hover:rotate-90"
                />
              </span>
              <ul className="absolute left-0 top-full hidden group-hover:block pt-2 space-y-2 bg-white shadow-lg rounded-lg w-56 text-black z-10">
                <li>
                  <Link
                    href="/research/recent-research?researcher=alfian-amrizal"
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
            </li> */}

            <li>
              <Link
                href="/research/recent-research?researcher=alfian-amrizal"
                className="hover:text-[var(--text-1-hover)]"
              >
                Proyek Lab
              </Link>
            </li>
            <li>
              <Link
                href="/publications"
                className="hover:text-[var(--text-1-hover)]"
              >
                Publikasi
              </Link>
            </li>
            {/* <li>
              <Link
                href="/news-and-events"
                className="hover:text-[var(--text-1-hover)]"
              >
                Berita & Kegiatan
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--text-1-hover)]"
              >
                Kontak
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[var(--text-1)]"
            onClick={() => setMenuOpen(!menuOpen)}
            title="Menu sidebar"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full lg:hidden bg-white text-gray-800 shadow-xl rounded-b-xl border-t border-gray-200 z-40">
          <nav className="flex flex-col p-4 space-y-4 divide-y divide-gray-200">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Beranda
            </Link>

            <div>
              <p className="px-3 py-2 font-semibold text-gray-700">
                Tentang Kami
              </p>
              <div className="pl-6 space-y-2">
                <Link
                  href="/introduction"
                  className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Profil Lab
                </Link>
                <Link
                  href="/introduction/members"
                  className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Anggota
                </Link>
              </div>
            </div>

            {/* <div>
              <p className="px-3 py-2 font-semibold text-gray-700">
                Penelitian
              </p>
              <div className="pl-6 space-y-2">
                <Link
                  href="/research/recent-research?researcher=alfian-amrizal"
                  className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Penelitian Terkini
                </Link>
                <Link
                  href="/research/research-field"
                  className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  Bidang Penelitian
                </Link>
              </div>
            </div> */}

            <Link
              href="/research/recent-research?researcher=alfian-amrizal"
              className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Penelitian Terkini
            </Link>
            <Link
              href="/publications"
              className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Publikasi
            </Link>

            <Link
              href="/news-and-events"
              className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Berita & Kegiatan
            </Link>

            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition"
            >
              Kontak
            </Link>
          </nav>
        </div>
      )}

      {/* Page Content */}
      <div style={{ paddingTop: navbarHeight }}>{children}</div>

      {/* Footer */}
      <footer className="bg-[var(--background-2)] text-[var(--text-1)] mt-16 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo & About */}
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0">
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

            {/* Academic Affiliations*/}
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Afiliasi Akademis</h3>
              <div className="grid gap-y-2">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="https://dcse.fmipa.ugm.ac.id/"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
                    >
                      Department of Computer Science and Electronics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://mipa.ugm.ac.id/"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
                    >
                      Faculty of Mathematics and Natural Sciences
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ugm.ac.id/"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
                    >
                      Universitas Gadjah Mada
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Quick Links */}
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <div className="grid gap-y-2">
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/home"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/introduction"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
                    >
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/research/publications"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
                    >
                      Publikasi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/members"
                      className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
                    >
                      Anggota
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4">Kontak Kami</h3>
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
                    className="text-sm hover:text-[var(--text-1-hover)] transition-colors"
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
