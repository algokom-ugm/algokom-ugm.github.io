"use client";
import { publikasiData, penelitiData } from "@/data/ndata";
import {
  faBook,
  faGlobe,
  faFilePdf,
  faArrowRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { getNavigationState } from "@/utils/navigation-state";

type ProcessedPublication = {
  journalPapers: Array<{
    title: string;
    id_peneliti: number[];
    authors: string;
    year: number | null;
    month: number | null;
    day: number | null;
    doi?: string;
    pdf?: string;
    slug: string;
  }>;
  internationalConferences: Array<{
    title: string;
    id_peneliti: number[];
    authors: string;
    year: number | null;
    month: number | null;
    day: number | null;
    pdf?: string;
    slug: string;
  }>;
};

type Publications = {
  [year: string]: ProcessedPublication;
};

type PublicationType =
  | "journalPapers"
  | "internationalConferences"
  | "doctoralDissertations"
  | "masterTheses";

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const formatDate = (
  day?: number | null,
  month?: number | null,
  year?: number | null
): string => {
  const parts: string[] = [];

  if (day != null) {
    parts.push(day.toString());
  }

  if (month != null && month >= 1 && month <= 12) {
    parts.push(monthNames[month - 1]);
  }

  if (year != null) {
    parts.push(year.toString());
  }

  // If nothing available, return placeholder
  return parts.length > 0 ? parts.join(" ") : "Unknown date";
};

export default function Publications() {
  const [expandedYears, setExpandedYears] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<{
    [year: string]: Set<PublicationType>;
  }>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<Set<PublicationType>>(
    new Set()
  );
  const [selectedResearchers, setSelectedResearchers] = useState<Set<number>>(
    new Set()
  );

  const toggleResearcher = (id: number) => {
    setSelectedResearchers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const processedData = useMemo(() => {
    return publikasiData.reduce((acc, pub) => {
      // const year = pub.tahun.toString();
      const year = pub.tahun ? pub.tahun.toString() : "Unknown Year";
      const researchersMap = new Map(penelitiData.map((p) => [p.id, p.nama]));

      if (!acc[year]) {
        acc[year] = {
          journalPapers: [],
          internationalConferences: [],
        };
      }

      const baseEntry = {
        title: pub.judul,
        id_peneliti: pub.id_peneliti,
        authors: pub.id_peneliti
          .map((id) => researchersMap.get(id) || "Unknown")
          .join(", "),
        year: pub.tahun,
        month: pub.bulan,
        day: pub.hari,
        slug: pub.judul
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, ""),
        pdf: pub.arxiv ? pub.url : undefined,
      };

      switch (pub.tipe) {
        case "makalah jurnal":
          acc[year].journalPapers.push({ ...baseEntry, doi: pub.url });
          break;
        case "konferensi internasional":
          acc[year].internationalConferences.push(baseEntry);
          break;
      }

      return acc;
    }, {} as Publications);
  }, []);

  const filteredData = useMemo(() => {
    const searchLower = searchQuery.toLowerCase();

    return Object.entries(processedData)
      .filter(([_year, data]) => {
        return Object.entries(data).some(([type, items]) => {
          const typeSelected =
            selectedTypes.size === 0 ||
            selectedTypes.has(type as PublicationType);
          const hasMatches = items.some((item) => {
            const matchesSearch =
              item.title.toLowerCase().includes(searchLower) ||
              item.authors.toLowerCase().includes(searchLower);
            const matchesResearcher =
              selectedResearchers.size === 0 ||
              item.id_peneliti.some((id) => selectedResearchers.has(id));

            return matchesSearch && matchesResearcher;
          });
          return typeSelected && hasMatches;
        });
      })
      .map(([year, data]) => {
        const filteredCategories = {
          journalPapers: data.journalPapers.filter((item) => {
            const matchesType =
              selectedTypes.size === 0 || selectedTypes.has("journalPapers");
            const matchesSearch =
              item.title.toLowerCase().includes(searchLower) ||
              item.authors.toLowerCase().includes(searchLower);
            const matchesResearcher =
              selectedResearchers.size === 0 ||
              item.id_peneliti.some((id) => selectedResearchers.has(id));

            return matchesType && matchesSearch && matchesResearcher;
          }),
          internationalConferences: data.internationalConferences.filter(
            (item) => {
              const matchesType =
                selectedTypes.size === 0 ||
                selectedTypes.has("internationalConferences");
              const matchesSearch =
                item.title.toLowerCase().includes(searchLower) ||
                item.authors.toLowerCase().includes(searchLower);
              const matchesResearcher =
                selectedResearchers.size === 0 ||
                item.id_peneliti.some((id) => selectedResearchers.has(id));

              return matchesType && matchesSearch && matchesResearcher;
            }
          ),
        };

        return [year, filteredCategories] as [string, ProcessedPublication];
      })
      .filter(([_year, data]) =>
        Object.values(data).some((category) => category.length > 0)
      )
      .sort(([a], [b]) => Number(b) - Number(a));
  }, [processedData, searchQuery, selectedTypes, selectedResearchers]);

  const toggleYear = (year: string) => {
    setExpandedYears(
      (prev) =>
        new Set(
          prev.has(year)
            ? new Set([...prev].filter((y) => y !== year))
            : new Set([...prev, year])
        )
    );
  };

  const toggleCategory = (year: string, type: PublicationType) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [year]: new Set(
        prev[year]?.has(type)
          ? new Set([...prev[year]].filter((t) => t !== type))
          : new Set([...(prev[year] || []), type])
      ),
    }));
  };

  const toggleType = (type: PublicationType) => {
    setSelectedTypes(
      (prev) =>
        new Set(
          prev.has(type)
            ? new Set([...prev].filter((t) => t !== type))
            : new Set([...prev, type])
        )
    );
  };

  useEffect(() => {
    const state = getNavigationState();

    if (state?.selectedResearchers) {
      setSelectedResearchers((prev) => {
        const newSet = new Set(prev);
        state.selectedResearchers.forEach((id) => {
          if (newSet.has(id)) {
            newSet.delete(id);
          } else {
            newSet.add(id);
          }
        });
        return newSet;
      });
    }
  }, []);

  useEffect(() => {
    const anyFilterActive =
      searchQuery.trim() !== "" ||
      selectedTypes.size > 0 ||
      selectedResearchers.size > 0;

    if (anyFilterActive) {
      // expand all years
      setExpandedYears(new Set(Object.keys(processedData)));

      // expand all categories for all years
      const newCategories: { [year: string]: Set<PublicationType> } = {};
      Object.keys(processedData).forEach((year) => {
        newCategories[year] = new Set([
          "journalPapers",
          "internationalConferences",
        ]);
      });
      setExpandedCategories(newCategories);
    } else {
      // collapse everything if no filter
      setExpandedYears(new Set());
      setExpandedCategories({});
    }
  }, [searchQuery, selectedTypes, selectedResearchers, processedData]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Katalog Publikasi
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Koleksi lengkap hasil penelitian dalam berbagai jenis publikasi ilmiah
        </p>
      </header>

      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Cari judul atau penulis..."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="flex flex-wrap gap-4 items-center">
          <span className="text-gray-600">Filter Jenis:</span>
          {[
            ["journalPapers", "Makalah Jurnal"],
            ["internationalConferences", "Konferensi Internasional"],
          ].map(([type, label]) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTypes.has(type as PublicationType)}
                onChange={() => toggleType(type as PublicationType)}
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="text-gray-700">{label}</span>
            </label>
          ))}
        </div>
        <details className="relative w-84 text-gray-700">
          <summary className="flex justify-between items-center p-3 bg-white border border-gray-300 rounded-lg shadow-sm cursor-pointer hover:ring-1 hover:ring-indigo-500 transition-all">
            <span className="font-medium">
              {selectedResearchers.size > 0
                ? `${selectedResearchers.size} peneliti dipilih`
                : "Filter Peneliti"}
            </span>
            <span className="ml-2 text-gray-400 transition-transform duration-200 [&_details[open]>summary>&]:rotate-180">
              &#9662;
            </span>
          </summary>
          <div className="absolute left-0 mt-1 w-full max-h-64 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-lg z-50 p-2">
            {penelitiData.map((peneliti) => (
              <label
                key={peneliti.id}
                className="flex items-center space-x-2 p-2 rounded hover:bg-indigo-50 cursor-pointer transition"
              >
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-indigo-600"
                  checked={selectedResearchers.has(peneliti.id)}
                  onChange={() => toggleResearcher(peneliti.id)}
                />
                <span className="text-gray-700">{peneliti.nama}</span>
              </label>
            ))}
          </div>
        </details>
      </div>

      <div className="space-y-4">
        {filteredData.map(([year, yearData]) => {
          const totalPublications = Object.values(yearData).reduce(
            (acc, cur) => acc + cur.length,
            0
          );

          return (
            <section
              key={year}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleYear(year)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-semibold text-indigo-600">
                    {year}
                  </span>
                  <span className="text-gray-500 text-sm">
                    ({totalPublications} publikasi)
                  </span>
                </div>
                <FontAwesomeIcon
                  icon={expandedYears.has(year) ? faChevronUp : faChevronDown}
                  className="text-gray-400 text-lg"
                />
              </button>

              {expandedYears.has(year) && (
                <div className="px-6 pb-6 space-y-8">
                  {yearData.journalPapers.length > 0 && (
                    <CategorySection
                      icon={<FontAwesomeIcon icon={faBook} />}
                      title="Makalah Jurnal"
                      items={yearData.journalPapers}
                      colorClass="text-green-600 bg-green-50"
                      isExpanded={expandedCategories[year]?.has(
                        "journalPapers"
                      )}
                      onToggle={() => toggleCategory(year, "journalPapers")}
                    />
                  )}

                  {yearData.internationalConferences.length > 0 && (
                    <CategorySection
                      icon={<FontAwesomeIcon icon={faGlobe} />}
                      title="Konferensi Internasional"
                      items={yearData.internationalConferences}
                      colorClass="text-blue-600 bg-blue-50"
                      isExpanded={expandedCategories[year]?.has(
                        "internationalConferences"
                      )}
                      onToggle={() =>
                        toggleCategory(year, "internationalConferences")
                      }
                    />
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

const CategorySection = ({
  icon,
  title,
  items,
  colorClass,
  isExpanded,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  items: Array<{
    title: string;
    authors: string;
    year: number | null;
    month: number | null;
    day: number | null;
    doi?: string;
    pdf?: string;
    slug: string;
  }>;
  colorClass: string;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  if (items.length === 0) return null;

  return (
    <div className="group">
      <button
        onClick={onToggle}
        className={`flex items-center mb-4 p-3 rounded-lg ${colorClass} w-fit hover:opacity-80`}
      >
        <span className="mr-2">{icon}</span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <FontAwesomeIcon
          icon={isExpanded ? faChevronUp : faChevronDown}
          className="ml-2"
        />
      </button>

      {isExpanded && (
        <ul className="space-y-4 pl-2">
          {items.map((paper) => (
            <li
              key={paper.slug}
              className="flex items-start before:content-['•'] before:text-gray-400 before:mr-3 hover:bg-gray-50 p-3 rounded-lg"
            >
              <div className="flex-1">
                <div className="text-gray-900 font-medium hover:text-indigo-600">
                  <Link href={`/research/${paper.slug}`}>{paper.title}</Link>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {paper.authors} •{" "}
                  {formatDate(paper.day, paper.month, paper.year)}
                </div>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {paper.doi && (
                    <a
                      href={paper.doi}
                      className="text-sm text-indigo-600 hover:underline flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="mr-2 w-4 h-4"
                      />
                      DOI
                    </a>
                  )}
                  {paper.pdf && (
                    <a
                      href={paper.pdf}
                      className="text-sm text-gray-600 hover:text-indigo-600 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className="mr-2 w-4 h-4"
                      />
                      PDF
                    </a>
                  )}
                  <Link
                    href={`/research/${paper.slug}`}
                    className="text-sm text-gray-600 hover:text-indigo-600 flex items-center"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="mr-2 w-4 h-4"
                    />
                    Detail
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
