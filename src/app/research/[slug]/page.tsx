import { notFound } from "next/navigation";
import { publikasiData, penelitiData, BidangPenelitian } from "@/data/ndata";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return publikasiData.map((item) => ({
    slug: item.judul
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  }));
}

const getBidangPenelitian = (id: number): BidangPenelitian | undefined => {
  // Implementasi sesuai data bidang penelitian Anda
  return {
    id: 1,
    id_peneliti: [1],
    nama: "High Performance Computing",
  };
};

export default function ResearchDetail({
  params,
}: {
  params: { slug: string };
}) {
  const item = publikasiData.find(
    (n) =>
      n.judul
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") === params.slug
  );

  if (!item) return notFound();

  // Format tanggal
  const publicationDate = new Date(
    item.tahun,
    item.bulan - 1,
    item.hari
  ).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{item.judul}</h1>
        <div className="text-sm text-gray-600 space-y-1">
          <p>Jenis Publikasi: {item.tipe}</p>
          <p>Tanggal Publikasi: {publicationDate}</p>
          <p>
            Bidang Penelitian:{" "}
            {getBidangPenelitian(item.id_bidang_penelitian)?.nama}
          </p>
        </div>
      </div>

      {/* Main Image */}
      <div className="mb-8">
        <img
          src="/hpc_research.jpg"
          alt={item.judul}
          className="rounded-md shadow-lg object-cover h-[300px]"
        />
      </div>

      {/* Author List */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Peneliti Terkait</h2>
        <div className="flex flex-wrap gap-4">
          {item.id_peneliti.map((id) => {
            const peneliti = penelitiData.find((p) => p.id === id);
            return (
              <div
                key={id}
                className="flex items-center gap-3 bg-gray-100 rounded-lg p-3"
              >
                <Image
                  src={peneliti?.image || "/default-avatar.jpg"}
                  alt={peneliti?.nama || ""}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>{peneliti?.nama}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Description and Abstract */}
      <div className="mb-12">
        <section>
          <h2 className="text-xl font-semibold mb-4">Abstrak</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {item.abstrak}
          </p>
        </section>
      </div>

      {/* Paper Access */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Akses Publikasi</h2>
        {item.arxiv ? (
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-gray-100 p-4 border-b">
              <h3 className="font-medium">arXiv Version</h3>
            </div>
            <iframe
              src={item.url}
              className="w-full h-[800px] border-0"
              title="arXiv Paper Viewer"
            />
          </div>
        ) : (
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Link Eksternal</h3>
            <a
              href={item.url}
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buka di Situs Publisher
            </a>
          </div>
        )}
      </section>

      {/* BibTeX Section (Static) */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Kutip</h2>
        <pre className="text-sm whitespace-pre-wrap bg-white p-4 rounded-md">
          {`@article{${item.id},
  title = {${item.judul}},
  author = {${item.id_peneliti
    .map((id) => penelitiData.find((p) => p.id === id)?.nama)
    .join(" and ")}},
  year = {${item.tahun}},
  journal = {${item.tipe}},
  url = {${item.url}}`}
        </pre>
      </section>
    </div>
  );
}
