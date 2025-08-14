import Image from "next/image";
import { headOfLab, members } from "@/data/members";

export default function Members() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <section className="mb-16">
        <div>
          <div className="mb-8 pb-4">
            <h2 className="text-3xl font-bold text-gray-900 inline-block">
              Kepala Lab
            </h2>

            <span className="block w-24 h-1.5 bg-blue-400 mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
            <a
              href={`/research/recent-research/${headOfLab.researcherSlug}`}
              className="group relative flex flex-col items-center p-6 rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2"
              key={headOfLab.researcherSlug}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative mb-5 z-10">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-300" />
                <Image
                  src={headOfLab.image}
                  alt={headOfLab.name}
                  width={128}
                  height={128}
                  className="relative z-10 rounded-full border-4 border-white object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="text-center space-y-3 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {headOfLab.name}
                  <span className="block mt-1 text-sm font-medium text-blue-500">
                    {headOfLab.rank}
                  </span>
                </h3>

                <div className="flex items-center justify-center space-x-2">
                  <p className="text-sm text-gray-600 font-medium">
                    {headOfLab.field}
                  </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                    View Recent Research
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="mb-8 pb-4">
            <h2 className="text-3xl font-bold">Anggota Lab</h2>

            <span className="block w-24 h-1.5 bg-blue-400 mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
            {members.map((member) => (
              <a
                href={`/research/recent-research/${member.researcherSlug}`}
                className="group relative flex flex-col items-center p-6 rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2"
                key={member.researcherSlug}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative mb-5 z-10">
                  <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-300" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="relative z-10 rounded-full border-4 border-white object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center space-y-3 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                    <span className="block mt-1 text-sm font-medium text-blue-500">
                      {member.rank}
                    </span>
                  </h3>

                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-sm text-gray-600 font-medium">
                      {member.field}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center text-blue-600 text-sm font-medium">
                      View Recent Research
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
