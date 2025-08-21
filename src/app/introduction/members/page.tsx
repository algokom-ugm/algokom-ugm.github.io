"use client";
import Image from "next/image";
import { penelitiData } from "@/data/ndata";
import { useRouter } from "next/navigation";
import { setNavigationState } from "@/utils/navigation-state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Members() {
  const router = useRouter();
  const headOfLab = penelitiData.find((p) => p.jabatan_lab == "head of lab");
  if (!headOfLab) return null;
  const members = penelitiData.filter((p) => p.jabatan_lab == "member lab");

  const goToPublications = (id: number) => {
    setNavigationState({ selectedResearchers: [id] });
    router.push("/publications");
  };

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
            <div
              className="group relative flex flex-col items-center p-6 rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2"
              key={headOfLab.id}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative mb-5 z-10">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-300" />
                <Image
                  src={headOfLab.image}
                  alt={headOfLab.nama}
                  width={128}
                  height={128}
                  className="relative z-10 rounded-full border-4 border-white object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="text-center space-y-3 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {headOfLab.nama}
                  <span className="block mt-1 text-sm font-medium text-blue-500">
                    {headOfLab.jabatan_akademik}
                  </span>
                </h3>

                <div className="flex items-center justify-center space-x-2">
                  <p className="text-sm text-gray-600 font-medium">
                    {headOfLab.bidang_minat}
                  </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-auto pt-2 flex gap-4 justify-center items-center">
                  <div
                    className="flex items-center justify-center aspect-square w-8"
                    onClick={() => goToPublications(headOfLab.id)}
                  >
                    <FontAwesomeIcon
                      className="text-blue-600 hover:text-yellow-600 text-[32px] object-contain cursor-pointer transition-all duration-300"
                      icon={faBook}
                    />
                  </div>

                  <a
                    className="flex items-center justify-center aspect-square w-8"
                    href={headOfLab.url_scholar}
                  >
                    <FontAwesomeIcon
                      className="text-blue-600 hover:text-yellow-600 text-[32px] object-contain cursor-pointer transition-all duration-300"
                      icon={faGraduationCap}
                    />
                  </a>

                  <a
                    className="flex items-center justify-center aspect-square w-8 rounded bg-blue-600 hover:bg-yellow-600 cursor-pointer transition-all duration-300 text-white font-bold"
                    href={headOfLab.url_scopus}
                    title="Scopus"
                  >
                    SC
                  </a>
                </div>
              </div>
            </div>
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
              <div
                className="group relative flex flex-col items-center p-6 rounded-3xl bg-gradient-to-br from-white to-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2"
                key={member.id}
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative mb-5 z-10 w-32 h-32 overflow-hidden rounded-full">
                  <div className="absolute inset-0 bg-blue-100 rounded-full transform rotate-45 scale-95 group-hover:scale-105 transition-transform duration-300" />

                  <Image
                    src={member.image}
                    alt={member.nama}
                    fill
                    className="object-cover object-top rounded-full border-4 border-white transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="text-center space-y-3 relative z-10 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {member.nama}
                    <span className="block mt-1 text-sm font-medium text-blue-500">
                      {member.jabatan_akademik}
                    </span>
                  </h3>

                  <div className="flex items-center justify-center space-x-2">
                    <p className="text-sm text-gray-600 font-medium">
                      {member.bidang_minat}
                    </p>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 mt-auto pt-2 flex gap-4 justify-center items-center">
                    <div
                      className="flex items-center justify-center aspect-square w-8"
                      onClick={() => goToPublications(member.id)}
                    >
                      <FontAwesomeIcon
                        className="text-blue-600 hover:text-yellow-600 text-[32px] object-contain cursor-pointer transition-all duration-300"
                        icon={faBook}
                      />
                    </div>

                    <a
                      className="flex items-center justify-center aspect-square w-8"
                      href={member.url_scholar}
                    >
                      <FontAwesomeIcon
                        className="text-blue-600 hover:text-yellow-600 text-[32px] object-contain cursor-pointer transition-all duration-300"
                        icon={faGraduationCap}
                      />
                    </a>

                    <a
                      className="flex items-center justify-center aspect-square w-8 rounded bg-blue-600 hover:bg-yellow-600 cursor-pointer transition-all duration-300 text-white font-bold"
                      href={member.url_scopus}
                      title="Scopus"
                    >
                      SC
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
