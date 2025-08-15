// src/app/news-and-events/[slug]/page.tsx
import { notFound } from "next/navigation";
import { newsevents } from "@/data/newsEvents";
import Image from "next/image";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return newsevents.map((item) => ({ slug: item.slug }));
}

// In Next 15, params is a Promise
export default async function NewsEventDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = newsevents.find((n) => n.slug === slug);
  if (!item) return notFound();

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      <p className="text-sm text-gray-400">
        {item.date} — {item.type}
      </p>
      <h1 className="text-3xl font-bold">{item.title}</h1>
      <p className="text-lg text-gray-600">{item.desc}</p>
      <hr className="my-4" />
      <div className="prose prose-lg max-w-none">{item.content}</div>
      <Image
        src={item.img}
        alt={item.title}
        width={500}
        height={500}
        className="shadow-lg object-cover w-full h-auto aspect-video"
        priority
      />
    </div>
  );
}
