export interface LabMember {
  name: string;
  title?: string;         // ← add this (use `title: string` if all members have it)
  rank: string;
  field: string;
  image: string;
  researcherSlug: string;
}

export interface HeadOfLab extends LabMember {
  title: string;
}

export const headOfLab: HeadOfLab = {
  name: "Dr. Muhammad Alfian Amrizal, B.Eng., M.I.S., Ph.D.",
  title: "Kepala Lab",
  rank: "Tenaga Pengajar",
  field:
    "High Performance Computing, Performance Modeling, Wireless Sensor Network",
  image: "/alfian_amrizal.jpg",
  researcherSlug: "muhammad-alfian-amrizal",
};

export const members: LabMember[] = [
  {
    name: "Dr. Muhammad Alfian Amrizal, B.Eng., M.I.S., Ph.D.",
    title: "Kepala Lab",
    rank: "Tenaga Pengajar",
    field:
      "High Performance Computing, Performance Modeling, Wireless Sensor Network",
    image: "/alfian_amrizal.jpg",
    researcherSlug: "muhammad-alfian-amrizal",
  },
  {
    name: "Prof. Dr.-Ing. MHD Reza M.I. Pulungan, S.Si., M.Sc.",
    rank: "Guru Besar",
    field:
      "Formal Method, Stochastic Analysis, Software Verification and Validation",
    image: "/reza_pulungan.jpg",
    researcherSlug: "reza-pulungan",
  },
  {
    name: "Dr. Anny Kartika Sari, S.Si., M.Sc., Ph.D.",
    rank: "Lektor Kepala",
    field:
      "Kriptografi, Ontologi, Knowledge Representation, Information Retrieval",
    image: "/anny_kartika_sari.jpg",
    researcherSlug: "anny-kartika-sari",
  },
  {
    name: "Dr. Nur Rokhman, S.Si., M.Kom.",
    rank: "Lektor Kepala",
    field: "Metode Numerik, Parallel Processing",
    image: "/nur_rokhman.jpg",
    researcherSlug: "nur-rokhman",
  },
  {
    name: "Dr. Suprapto, Drs., M.I.Kom.",
    rank: "Lektor Kepala",
    field:
      "Algoritma dan Komputasi, Computational Logic, Algorithm Analysis and Design",
    image: "/suprapto.jpg",
    researcherSlug: "suprapto",
  },
  {
    name: "Dr. Wahyono, S.Kom., Ph.D.",
    rank: "Lektor Kepala",
    field: "Image Processing, Graphics Computing",
    image: "/wahyono.jpg",
    researcherSlug: "wahyono",
  },
  {
    name: "Dr. Agus Sihabuddin, S.Si., M.Kom.",
    rank: "Lektor",
    field: "Forecasting, Data Base Management System",
    image: "/agus_sihabuddin.jpg",
    researcherSlug: "agus-sihabuddin",
  },
  {
    name: "Dr. Janoe Hendarto, Drs., M.I.Kom.",
    rank: "Lektor",
    field: "Graphical Computation",
    image: "/janoe_hendarto.jpg",
    researcherSlug: "janoe-hendarto",
  },
  {
    name: "Dr. Moh. Edi Wibowo, S.Kom., M.Kom., Ph.D.",
    rank: "Lektor",
    field: "Multimedia Analysis, Image Processing",
    image: "/edi_wibowo.jpg",
    researcherSlug: "edi-wibowo",
  },
  {
    name: "Erwin Eko Wahyudi, S.Kom., M.Cs.",
    rank: "Asisten Ahli",
    field: "Machine Learning, Data Science",
    image: "/eko_wahyudi.jpg",
    researcherSlug: "erwin-eko-wahyudi",
  },
  {
    name: "Dr. Faizal Makhrus, S.Kom., M.Sc., Ph.D.",
    rank: "Tenaga Pengajar",
    field: "Simulation, Numerical Method, Parallel Systems",
    image: "/faizal_makhrus.jpg",
    researcherSlug: "faizal-makhrus",
  },
];
