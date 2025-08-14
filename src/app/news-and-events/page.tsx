import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { newsevents } from "@/data/newsEvents";

// Definisikan tipe valid untuk item.type
type NewsEventType = "event" | "news";

const typeStyles: Record<NewsEventType, string> = {
  event: "bg-green-100 text-green-700",
  news: "bg-blue-100 text-blue-700",
};

export default function NewsAndEvents() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">News & Events</h1>
      <ul className="divide-y divide-gray-200">
        {newsevents.map((item, index) => (
          <Link
            key={index}
            href={`/news-and-events/${item.slug}`}
            className="block group"
          >
            <li className="flex items-center justify-between py-4 transition-all hover:bg-[var(--background-1-shade-1)] px-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      typeStyles[item.type as NewsEventType] // ⬅️ casting aman
                    }`}
                  >
                    {item.type}
                  </span>
                  <span className="text-xs text-[var(--text-1-shade-2)]">
                    {item.date}
                  </span>
                </div>
                <p className="font-semibold text-[var(--text-1)]">
                  {item.title}
                </p>
                <p className="text-sm text-[var(--text-1-shade)]">
                  {item.desc}
                </p>
              </div>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[var(--icon-muted)] group-hover:text-[var(--icon-primary)] transition-transform duration-200 group-hover:translate-x-1"
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
