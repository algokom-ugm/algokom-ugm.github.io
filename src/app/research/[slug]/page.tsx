// app/research/[slug]/page.tsx
import { notFound } from "next/navigation";
import { publikasiData, penelitiData, BidangPenelitian } from "@/data/ndata";
import Image from "next/image";

export async function generateStaticParams() {
  return publikasiData.map((item) => ({
    slug: item.judul
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, ""),
  }));
}

const getBidangPenelitian = (_id: number): BidangPenelitian | undefined => ({
  id: 1,
  id_peneliti: [1],
  nama: "High Performance Computing",
});

// 👉 params is a Promise in Next 15
export default async function ResearchDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = publikasiData.find(
    (n) =>
      n.judul
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "") === slug
  );

  if (!item) return notFound();

  const publicationDate = new Date(
    item.tahun,
    item.bulan - 1,
    item.hari
  ).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* ...rest of your JSX unchanged... */}
    </div>
  );
}
