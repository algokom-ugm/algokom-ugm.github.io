// types.ts

export type JabatanLab = "head of lab" | "member lab";
export type JabatanAkademik =
  | "guru besar"
  | "lektor kepala"
  | "lektor"
  | "asisten ahli"
  | "tenaga pengajar";
export type TipePublikasi =
  | "makalah jurnal"
  | "konferensi internasional"
  | "disertasi doktoral"
  | "tesis magister";

export interface Peneliti {
  id: number;
  nama: string;
  slug: string;
  jabatan_lab: JabatanLab;
  jabatan_akademik: JabatanAkademik;
  image: string;
}

export interface BidangPenelitian {
  id: number;
  id_peneliti: number[];
  nama: string;
}

export interface Publikasi {
  id: number;
  id_bidang_penelitian: number;
  id_peneliti: number[];
  judul: string;
  deskripsi: string;
  abstrak: string;
  image: string;
  tahun: number;
  bulan: number;
  hari: number;
  tipe: TipePublikasi;
  arxiv: boolean;
  url: string;
}

export const penelitiData: Peneliti[] = [
  {
    id: 1,
    nama: "Dr. Muhammad Alfian Amrizal, B.Eng., M.I.S., Ph.D.",
    slug: "muhammad-alfian-amrizal",
    jabatan_lab: "head of lab",
    jabatan_akademik: "tenaga pengajar",
    image: "/alfian_amrizal.jpg",
  },
  {
    id: 2,
    nama: "Prof. Dr.-Ing. MHD Reza M.I. Pulungan, S.Si., M.Sc.",
    slug: "reza-pulungan",
    jabatan_lab: "member lab",
    jabatan_akademik: "guru besar",
    image: "/reza_pulungan.jpg",
  },
  {
    id: 3,
    nama: "Dr. Anny Kartika Sari, S.Si., M.Sc., Ph.D.",
    slug: "anny-kartika-sari",
    jabatan_lab: "member lab",
    jabatan_akademik: "lektor kepala",
    image: "/anny_kartika_sari.jpg",
  },
  {
    id: 4,
    nama: "Dr. Nur Rokhman, S.Si., M.Kom.",
    slug: "nur-rokhman",
    jabatan_lab: "member lab",
    jabatan_akademik: "lektor kepala",
    image: "/nur_rokhman.jpg",
  },
  {
    id: 5,
    nama: "Dr. Suprapto, Drs., M.I.Kom.",
    slug: "suprapto",
    jabatan_lab: "member lab",
    jabatan_akademik: "lektor kepala",
    image: "/suprapto.jpg",
  },
  {
    id: 6,
    nama: "Dr. Wahyono, S.Kom., Ph.D.",
    slug: "wahyono",
    jabatan_lab: "member lab",
    jabatan_akademik: "lektor kepala",
    image: "/wahyono.jpg",
  },
  {
    id: 7,
    nama: "Dr. Agus Sihabuddin, S.Si., M.Kom.",
    slug: "agus-sihabuddin",
    jabatan_lab: "member lab",
    jabatan_akademik: "lektor",
    image: "/agus_sihabuddin.jpg",
  },
  {
    id: 8,
    nama: "Dr. Janoe Hendarto, Drs., M.I.Kom.",
    slug: "janoe-hendarto",
    jabatan_lab: "member lab",
    jabatan_akademik: "lektor",
    image: "/janoe_hendarto.jpg",
  },
  {
    id: 9,
    nama: "Dr. Moh. Edi Wibowo, S.Kom., M.Kom., Ph.D.",
    slug: "edi-wibowo",
    jabatan_lab: "member lab",
    jabatan_akademik: "lektor",
    image: "/edi_wibowo.jpg",
  },
  {
    id: 10,
    nama: "Erwin Eko Wahyudi, S.Kom., M.Cs.",
    slug: "erwin-eko-wahyudi",
    jabatan_lab: "member lab",
    jabatan_akademik: "asisten ahli",
    image: "/eko_wahyudi.jpg",
  },
  {
    id: 11,
    nama: "Dr. Faizal Makhrus, S.Kom., M.Sc., Ph.D.",
    slug: "faizal-makhrus",
    jabatan_lab: "member lab",
    jabatan_akademik: "tenaga pengajar",
    image: "/faizal_makhrus.jpg",
  },
];

export const bidangPenelitianData: BidangPenelitian[] = [
  { id: 1, id_peneliti: [1], nama: "High Performance Computing" },
  { id: 2, id_peneliti: [1], nama: "Performance Modeling" },
  { id: 3, id_peneliti: [1], nama: "Wireless Sensor Network" },
  { id: 4, id_peneliti: [2], nama: "Formal Method" },
  { id: 5, id_peneliti: [2], nama: "Stochastic Analysis" },
  { id: 6, id_peneliti: [2], nama: "Software Verification and Validation" },
  { id: 7, id_peneliti: [3], nama: "Cryptography" },
  { id: 8, id_peneliti: [3], nama: "Ontology" },
  { id: 9, id_peneliti: [3], nama: "Knowledge Representation" },
  { id: 10, id_peneliti: [3], nama: "Information Retrieval" },
  { id: 11, id_peneliti: [4, 11], nama: "Numerical Method" },
  { id: 12, id_peneliti: [4], nama: "Parallel Processing" },
  { id: 13, id_peneliti: [5], nama: "Algorithm and Computation" },
  { id: 14, id_peneliti: [5], nama: "Computational Logic" },
  { id: 15, id_peneliti: [5], nama: "Algorithm Analysis and Design" },
  { id: 16, id_peneliti: [6, 9], nama: "Image Processing" },
  { id: 17, id_peneliti: [6, 8], nama: "Graphics Computing" },
  { id: 18, id_peneliti: [7], nama: "Forecasting" },
  { id: 19, id_peneliti: [7], nama: "Database Management System" },
  { id: 20, id_peneliti: [9], nama: "Multimedia Analysis" },
  { id: 21, id_peneliti: [10], nama: "Machine Learning" },
  { id: 22, id_peneliti: [10], nama: "Data Science" },
  { id: 23, id_peneliti: [11], nama: "Simulation" },
  { id: 24, id_peneliti: [11], nama: "Parallel Systems" },
];

export const publikasiData: Publikasi[] = [
  {
    id: 1,
    id_bidang_penelitian: 1,
    id_peneliti: [1],
    judul:
      "Improving the Efficiency of a Deep Reinforcement Learning-Based PowerManagement System for HPC Clusters Using Curriculum Learning",
    deskripsi:
      "Penelitian ini menyempurnakan deep reinforcement learning (DRL) untuk mengelola daya dalam klaster HPC dengan menerapkan curriculum learning, yang melatih agen secara bertahap dari tugas yang mudah ke tugas yang sulit. Metode yang diusulkan mengurangi energi yang terbuang dan waktu tunggu pekerjaan sambil mempertahankan pemanfaatan sumber daya yang tinggi. Diuji pada simulator Batsim-py, metode ini mengungguli DRL dasar dan strategi batas waktu tradisional. Pendekatan ini juga beradaptasi dengan baik pada pengaturan sistem yang berbeda tanpa pelatihan ulang, menunjukkan ketahanan dan fleksibilitas yang kuat.",
    abstrak:
      "Konsumsi energi yang tinggi tetap menjadi tantangan utama dalam sistem komputasi kinerja tinggi (HPC), yang sering kali menampilkan ratusan atau ribuan node yang menarik daya substansial bahkan dalam mode siaga atau siaga. Meskipun mematikan node yang tidak digunakan dapat meningkatkan efisiensi energi, memilih waktu yang salah untuk melakukannya dapat menurunkan kualitas layanan dengan menunda eksekusi pekerjaan.Pembelajaran mesin, khususnya pembelajaran penguatan(RL), telah menunjukkan janji dalam menentukan waktu optimal untuk menghidupkan atau mematikan node.Dalam studi ini, kami meningkatkan kinerja agen pembelajaran penguatan mendalam(DRL) untuk manajemen daya HPC dengan mengintegrasikan pembelajaran kurikulum(CL), pendekatan pelatihan yang memperkenalkan tugas- tugas dengan kesulitan yang meningkat secara bertahap.Dengan menggunakan kerangka simulasi Batsim - py, kami membandingkan agen berbasis CL yang diusulkan dengan metode DRL dasar(tanpa CL) dan strategi batas waktu tetap konvensional.Hasil eksperimen mengonfirmasi bahwa kurikulum yang mudah - ke - sulit mengungguli perintah pelatihan lainnya dalam hal mengurangi penggunaan energi yang terbuang.Agen terbaik mencapai pengurangan energi sebesar 3, 73 % dibandingkan metode DRL dasar dan peningkatan sebesar 4, 66 % dibandingkan dengan konfigurasi batas waktu terbaik(mati setiap 15 menit waktu idle).Selain itu, ia mengurangi waktu tunggu pekerjaan rata - rata sebesar 9, 24 % dan mempertahankan tingkat pengisian pekerjaan yang lebih tinggi, yang menunjukkan pemanfaatan sumber daya yang lebih efektif. Uji sensitivitas di berbagai durasi penyalaan, level daya, dan ukuran kluster selanjutnya mengungkap kemampuan adaptasi agen terhadap perubahan parameter sistem tanpa pelatihan ulang.Temuan ini menunjukkan bahwa pembelajaran kurikulum dapat secara signifikan meningkatkan manajemen daya berbasis DRL di HPC, menyeimbangkan penghematan energi, kualitas layanan, dan ketahanan terhadap berbagai konfigurasi.",
    image: "/hpc1.jpg",
    tahun: 2025,
    bulan: 9,
    hari: 13,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 2,
    id_bidang_penelitian: 3,
    id_peneliti: [1],
    judul:
      "Investigating the Impact of Optimal Data Transfer Intervals on Failure-Prone Wireless Sensor Networks",
    deskripsi:
      "Penelitian ini mengusulkan metode untuk mengoptimalkan interval transfer data dalam jaringan sensor nirkabel (WSN) menggunakan model Markov. Pendekatan ini meningkatkan keandalan data dengan mengurangi risiko kehilangan data, bahkan dalam berbagai pola kegagalan node. Simulasi menunjukkan deviasi kurang dari 7,3% dari interval optimal yang sebenarnya, yang membuktikan kekokohannya. Metode ini juga terintegrasi dengan baik dengan protokol TDMA, sehingga meningkatkan waktu pengumpulan data dan efisiensi energi.",
    abstrak:
      "Jaringan sensor nirkabel (WSN) biasanya terdiri dari simpul sensor yang rentan terhadap kegagalan dan simpul penerima yang lebih andal. Untuk mencegah kehilangan data, simpul sensor harus secara teratur mentransfer datanya ke simpul penerima. Oleh karena itu, pengaturan interval transfer data yang tepat di antara keduanya sangat penting. Surat ini menyajikan metode untuk mengoptimalkan interval transfer data menggunakan model Markov. Meskipun model Markov secara langsung menyiratkan asumsi waktu antarkedatangan kegagalan yang didistribusikan secara eksponensial, dengan menggunakan simulasi yang ekstensif, kami menunjukkan bahwa interval transfer data optimal yang diperoleh oleh model ini masih berkinerja sangat baik di bawah distribusi kegagalan lainnya dengan perbedaan kurang dari 7,3% dalam hal periode kehilangan data dibandingkan dengan interval transfer data optimal yang sebenarnya. Kami juga membahas cara mengintegrasikan metode yang diusulkan ke dalam protokol komunikasi yang banyak digunakan di WSN, TDMA, dan menunjukkan bahwa hal itu dapat meningkatkan waktu pengumpulan data dan efisiensi energi.",
    image: "/hpc2.jpg",
    tahun: 2025,
    bulan: 6,
    hari: 5,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 3,
    id_bidang_penelitian: 22,
    id_peneliti: [1],
    judul:
      "Combining Multiple Text Representations for Improved Automatic Evaluation of Indonesian Essay Answers",
    deskripsi:
      "Penelitian ini mengusulkan kombinasi berbagai representasi teks untuk meningkatkan akurasi evaluasi otomatis jawaban esai berbahasa Indonesia. Dengan membandingkan metode embedding seperti FastText, Word2Vec, GloVe, dan RoBERTa, serta pendekatan encoding seperti LSTM dan transformer, hasil eksperimen menunjukkan bahwa kombinasi encoder (LSTM, transformer, dan TF-IDF) memberikan performa terbaik dalam mengklasifikasi kualitas jawaban, dengan skor F1 mencapai 77.22%.",
    abstrak:
      "pilihan ganda, terkait dengan prestasi belajar siswa. Namun, ketika jumlah siswa dalam satu kelas sangat banyak, ujian dengan menggunakan soal esai menjadi sulit dilakukan dan memerlukan waktu evaluasi yang lama. Oleh karena itu, evaluasi esai otomatis menjadi pendekatan yang potensial dalam situasi ini. Berbagai metode telah diajukan, namun solusi optimal untuk evaluasi tersebut dalam bahasa Indonesia kurang dikenal. Lebih jauh, dengan pesatnya perkembangan pendekatan pembelajaran mesin, khususnya pendekatan pembelajaran mendalam, penyelidikan solusi optimal tersebut menjadi lebih diperlukan.",
    image: "/hpc3.jpg",
    tahun: 2025,
    bulan: 1,
    hari: 4,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Performance Modeling
  {
    id: 4,
    id_bidang_penelitian: 2,
    id_peneliti: [1],
    judul: "Performance Modeling for Cloud Systems",
    deskripsi: "Performance modeling techniques for cloud computing systems.",
    abstrak:
      "This paper focuses on performance modeling for cloud systems to optimize resource allocation.",
    image: "/pm1.jpg",
    tahun: 2022,
    bulan: 3,
    hari: 6,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 5,
    id_bidang_penelitian: 2,
    id_peneliti: [1],
    judul: "Analyzing the Performance of Distributed Systems",
    deskripsi: "A deep dive into performance analysis in distributed systems.",
    abstrak:
      "The study presents methods to measure and improve the performance of distributed systems.",
    image: "/pm2.jpg",
    tahun: 2021,
    bulan: 4,
    hari: 3,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 6,
    id_bidang_penelitian: 2,
    id_peneliti: [1],
    judul: "Energy Efficiency in Performance Modeling",
    deskripsi:
      "Modeling the energy efficiency of performance in distributed environments.",
    abstrak:
      "This work focuses on modeling and improving energy efficiency in performance for distributed systems.",
    image: "/pm3.jpg",
    tahun: 2023,
    bulan: 7,
    hari: 12,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Wireless Sensor Network
  {
    id: 7,
    id_bidang_penelitian: 3,
    id_peneliti: [1],
    judul: "Wireless Sensor Networks for Environmental Monitoring",
    deskripsi:
      "Designing wireless sensor networks for environmental monitoring applications.",
    abstrak:
      "The paper explores the design and deployment of sensor networks for environmental monitoring.",
    image: "/wsn1.jpg",
    tahun: 2021,
    bulan: 2,
    hari: 12,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 8,
    id_bidang_penelitian: 3,
    id_peneliti: [1],
    judul: "Energy-Aware Wireless Sensor Networks",
    deskripsi:
      "Techniques to optimize energy consumption in wireless sensor networks.",
    abstrak:
      "This research focuses on energy-efficient protocols for sensor networks.",
    image: "/wsn2.jpg",
    tahun: 2022,
    bulan: 3,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 9,
    id_bidang_penelitian: 3,
    id_peneliti: [1],
    judul: "Data Fusion in Wireless Sensor Networks",
    deskripsi:
      "Techniques for improving data fusion in wireless sensor networks.",
    abstrak:
      "The paper discusses different data fusion techniques to improve sensor network performance.",
    image: "/wsn3.jpg",
    tahun: 2023,
    bulan: 2,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Formal Method
  {
    id: 10,
    id_bidang_penelitian: 4,
    id_peneliti: [2],
    judul: "Formal Methods in Software Engineering",
    deskripsi:
      "The role of formal methods in improving software engineering practices.",
    abstrak:
      "This paper reviews the application of formal methods in software engineering to enhance software quality.",
    image: "/fm1.jpg",
    tahun: 2021,
    bulan: 12,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 11,
    id_bidang_penelitian: 4,
    id_peneliti: [2],
    judul: "Formal Verification of Software Systems",
    deskripsi: "Exploring formal verification techniques in software systems.",
    abstrak:
      "The paper outlines methods for formally verifying the correctness of software systems.",
    image: "/fm2.jpg",
    tahun: 2022,
    bulan: 12,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 12,
    id_bidang_penelitian: 4,
    id_peneliti: [2],
    judul: "Automated Formal Methods for Software",
    deskripsi: "Automating formal methods in software verification.",
    abstrak:
      "This paper presents a framework for automating formal verification of software systems.",
    image: "/fm3.jpg",
    tahun: 2023,
    bulan: 6,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Stochastic Analysis
  {
    id: 13,
    id_bidang_penelitian: 5,
    id_peneliti: [2],
    judul: "Stochastic Models in Computational Biology",
    deskripsi:
      "Application of stochastic models to analyze biological systems.",
    abstrak:
      "The study applies stochastic processes to model biological systems and their behaviors.",
    image: "/sa1.jpg",
    tahun: 2021,
    bulan: 8,
    hari: 5,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 14,
    id_bidang_penelitian: 5,
    id_peneliti: [2],
    judul: "Stochastic Processes in Network Traffic Analysis",
    deskripsi:
      "Using stochastic processes to analyze network traffic patterns.",
    abstrak:
      "This research investigates the application of stochastic processes to model network traffic and optimize performance.",
    image: "/sa2.jpg",
    tahun: 2022,
    bulan: 11,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 15,
    id_bidang_penelitian: 5,
    id_peneliti: [2],
    judul: "Stochastic Simulation for Risk Assessment",
    deskripsi: "Using stochastic simulations to model and assess risk.",
    abstrak:
      "This paper explores the use of stochastic simulations for modeling and assessing various types of risks.",
    image: "/sa3.jpg",
    tahun: 2023,
    bulan: 10,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Software Verification and Validation
  {
    id: 16,
    id_bidang_penelitian: 6,
    id_peneliti: [2],
    judul: "Automated Software Verification and Validation",
    deskripsi:
      "Techniques for automating software verification and validation.",
    abstrak:
      "The paper discusses automation in software verification and validation processes.",
    image: "/svv1.jpg",
    tahun: 2022,
    bulan: 10,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 17,
    id_bidang_penelitian: 6,
    id_peneliti: [2],
    judul: "Formal Methods in Software Verification",
    deskripsi: "Using formal methods for more reliable software verification.",
    abstrak:
      "This paper applies formal methods for improving software verification reliability.",
    image: "/svv2.jpg",
    tahun: 2021,
    bulan: 6,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 18,
    id_bidang_penelitian: 6,
    id_peneliti: [2],
    judul: "Verification Techniques in Software Development",
    deskripsi:
      "Reviewing verification techniques used in modern software development.",
    abstrak:
      "The paper discusses several techniques to ensure the correctness of software during its development.",
    image: "/svv3.jpg",
    tahun: 2023,
    bulan: 1,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Cryptography
  {
    id: 19,
    id_bidang_penelitian: 7,
    id_peneliti: [3],
    judul: "Modern Cryptographic Algorithms",
    deskripsi: "Examining new trends in cryptographic algorithms.",
    abstrak:
      "This paper examines new cryptographic algorithms and their applications in cybersecurity.",
    image: "/crypto1.jpg",
    tahun: 2021,
    bulan: 12,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 20,
    id_bidang_penelitian: 7,
    id_peneliti: [3],
    judul: "Quantum Cryptography: A New Frontier",
    deskripsi: "A study of quantum cryptography and its future potential.",
    abstrak:
      "The paper explores the evolving field of quantum cryptography and its potential impact on security.",
    image: "/crypto2.jpg",
    tahun: 2022,
    bulan: 12,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 21,
    id_bidang_penelitian: 7,
    id_peneliti: [3],
    judul: "Cryptographic Protocols for IoT",
    deskripsi: "Designing cryptographic protocols for IoT devices.",
    abstrak:
      "This research proposes secure cryptographic protocols for IoT networks to prevent unauthorized access.",
    image: "/crypto3.jpg",
    tahun: 2023,
    bulan: 7,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Ontology
  {
    id: 22,
    id_bidang_penelitian: 8,
    id_peneliti: [3],
    judul: "Ontology in Data Management",
    deskripsi: "Using ontologies to manage data and knowledge.",
    abstrak:
      "The paper explores how ontologies can improve data management and knowledge sharing.",
    image: "/ontology1.jpg",
    tahun: 2021,
    bulan: 12,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 23,
    id_bidang_penelitian: 8,
    id_peneliti: [3],
    judul: "Semantic Web and Ontology",
    deskripsi: "Connecting the semantic web with ontological models.",
    abstrak:
      "This study connects semantic web technologies with ontological models to enhance information retrieval.",
    image: "/ontology2.jpg",
    tahun: 2022,
    bulan: 12,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 24,
    id_bidang_penelitian: 8,
    id_peneliti: [3],
    judul: "Ontology-Based Knowledge Representation",
    deskripsi: "Using ontologies for representing knowledge.",
    abstrak:
      "The paper outlines methods for creating ontologies to represent complex knowledge.",
    image: "/ontology3.jpg",
    tahun: 2023,
    bulan: 11,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  // Knowledge Representation
  {
    id: 25,
    id_bidang_penelitian: 9,
    id_peneliti: [3],
    judul: "Modeling Knowledge Representation for AI Systems",
    deskripsi:
      "Investigating various models of knowledge representation in artificial intelligence.",
    abstrak:
      "This paper explores different methods for representing knowledge in AI systems and their impact on performance.",
    image: "/kr1.jpg",
    tahun: 2022,
    bulan: 2,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 26,
    id_bidang_penelitian: 9,
    id_peneliti: [3],
    judul: "Semantic Web and Knowledge Representation",
    deskripsi:
      "Exploring the role of semantic web technologies in knowledge representation.",
    abstrak:
      "The paper discusses the intersection of semantic web technologies and formal knowledge representation methods.",
    image: "/kr2.jpg",
    tahun: 2023,
    bulan: 5,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 27,
    id_bidang_penelitian: 9,
    id_peneliti: [3],
    judul: "Ontologies in Knowledge Representation",
    deskripsi:
      "The role of ontologies in enhancing knowledge representation systems.",
    abstrak:
      "This research investigates the use of ontologies for structuring and enhancing knowledge representation.",
    image: "/kr3.jpg",
    tahun: 2021,
    bulan: 9,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Information Retrieval
  {
    id: 28,
    id_bidang_penelitian: 10,
    id_peneliti: [3],
    judul: "Improving Search Engines with Information Retrieval Techniques",
    deskripsi:
      "Optimizing search engines using advanced information retrieval strategies.",
    abstrak:
      "This paper examines how advanced information retrieval techniques can enhance search engine accuracy and relevance.",
    image: "/ir1.jpg",
    tahun: 2022,
    bulan: 10,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 29,
    id_bidang_penelitian: 10,
    id_peneliti: [3],
    judul: "Information Retrieval in Big Data",
    deskripsi:
      "Techniques for improving information retrieval from big data systems.",
    abstrak:
      "This study discusses how information retrieval systems are being adapted to handle large-scale data sets.",
    image: "/ir2.jpg",
    tahun: 2023,
    bulan: 6,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 30,
    id_bidang_penelitian: 10,
    id_peneliti: [3],
    judul: "Natural Language Processing for Information Retrieval",
    deskripsi:
      "Using NLP techniques to improve information retrieval in search engines.",
    abstrak:
      "The paper explores how natural language processing can refine information retrieval systems to handle complex queries.",
    image: "/ir3.jpg",
    tahun: 2021,
    bulan: 5,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Numerical Method
  {
    id: 31,
    id_bidang_penelitian: 11,
    id_peneliti: [4, 12],
    judul: "Numerical Methods for Solving Differential Equations",
    deskripsi:
      "Applying numerical methods to solve complex differential equations.",
    abstrak:
      "This research presents methods for solving differential equations using numerical techniques.",
    image: "/nm1.jpg",
    tahun: 2022,
    bulan: 2,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 32,
    id_bidang_penelitian: 11,
    id_peneliti: [4],
    judul: "High-Performance Numerical Methods",
    deskripsi:
      "Exploring high-performance computing techniques for numerical methods.",
    abstrak:
      "The paper presents high-performance computing solutions for improving the efficiency of numerical methods.",
    image: "/nm2.jpg",
    tahun: 2023,
    bulan: 2,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 33,
    id_bidang_penelitian: 11,
    id_peneliti: [12],
    judul: "Optimization of Numerical Algorithms",
    deskripsi:
      "Optimizing numerical algorithms for better accuracy and performance.",
    abstrak:
      "This paper discusses various techniques to improve the accuracy and performance of numerical algorithms.",
    image: "/nm3.jpg",
    tahun: 2021,
    bulan: 12,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Parallel Processing
  {
    id: 34,
    id_bidang_penelitian: 12,
    id_peneliti: [4],
    judul: "Efficient Parallel Algorithms for Large-Scale Systems",
    deskripsi:
      "Designing parallel algorithms for large-scale system optimization.",
    abstrak:
      "This paper discusses efficient parallel algorithms for large-scale systems and their performance improvements.",
    image: "/pp1.jpg",
    tahun: 2022,
    bulan: 2,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 35,
    id_bidang_penelitian: 12,
    id_peneliti: [4],
    judul: "Parallel Computing in Cloud Infrastructure",
    deskripsi:
      "Leveraging parallel computing in cloud infrastructure for better resource management.",
    abstrak:
      "This paper focuses on utilizing parallel computing to optimize cloud computing infrastructure.",
    image: "/pp2.jpg",
    tahun: 2023,
    bulan: 9,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 36,
    id_bidang_penelitian: 12,
    id_peneliti: [4],
    judul: "Parallel Processing in Real-Time Systems",
    deskripsi: "Applying parallel processing techniques to real-time systems.",
    abstrak:
      "The research explores how parallel processing techniques are used to meet the stringent timing requirements of real-time systems.",
    image: "/pp3.jpg",
    tahun: 2021,
    bulan: 12,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Algorithm and Computation
  {
    id: 37,
    id_bidang_penelitian: 13,
    id_peneliti: [5],
    judul: "Computational Algorithms for Data Analysis",
    deskripsi:
      "Designing computational algorithms for large-scale data analysis.",
    abstrak:
      "This paper focuses on developing efficient computational algorithms to handle large-scale data analysis tasks.",
    image: "/ac1.jpg",
    tahun: 2022,
    bulan: 3,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 38,
    id_bidang_penelitian: 13,
    id_peneliti: [5],
    judul: "Algorithmic Complexity in Computational Systems",
    deskripsi: "Analyzing the computational complexity of various algorithms.",
    abstrak:
      "This research examines the computational complexity of algorithms and their optimization in practical applications.",
    image: "/ac2.jpg",
    tahun: 2023,
    bulan: 12,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 39,
    id_bidang_penelitian: 13,
    id_peneliti: [5],
    judul: "Algorithm Design and Optimization Techniques",
    deskripsi: "Advanced techniques for designing and optimizing algorithms.",
    abstrak:
      "The paper presents advanced methods for algorithm design and how they contribute to optimization in computation.",
    image: "/ac3.jpg",
    tahun: 2021,
    bulan: 10,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Computational Logic
  {
    id: 40,
    id_bidang_penelitian: 14,
    id_peneliti: [5],
    judul: "Computational Models of Logic",
    deskripsi: "Exploring computational models for formal logic.",
    abstrak:
      "This paper focuses on computational approaches for representing formal logic and reasoning.",
    image: "/cl1.jpg",
    tahun: 2022,
    bulan: 4,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 41,
    id_bidang_penelitian: 14,
    id_peneliti: [5],
    judul: "Logic Programming for Computational Systems",
    deskripsi:
      "Applying logic programming to solve complex computational problems.",
    abstrak:
      "The research examines how logic programming techniques are utilized in solving computationally complex problems.",
    image: "/cl2.jpg",
    tahun: 2023,
    bulan: 6,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 42,
    id_bidang_penelitian: 14,
    id_peneliti: [5],
    judul: "Automated Reasoning and Computational Logic",
    deskripsi: "Automating reasoning in computational logic systems.",
    abstrak:
      "This paper discusses the automation of reasoning processes in computational logic systems.",
    image: "/cl3.jpg",
    tahun: 2021,
    bulan: 8,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Algorithm Analysis and Design
  {
    id: 43,
    id_bidang_penelitian: 15,
    id_peneliti: [5],
    judul: "Design and Analysis of Efficient Algorithms",
    deskripsi: "Focusing on the design and analysis of efficient algorithms.",
    abstrak:
      "This paper explores methods to design and analyze algorithms for efficiency in computation.",
    image: "/aad1.jpg",
    tahun: 2022,
    bulan: 7,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 44,
    id_bidang_penelitian: 15,
    id_peneliti: [5],
    judul: "Greedy Algorithms for Optimization Problems",
    deskripsi: "Applying greedy algorithms to solve optimization problems.",
    abstrak:
      "This paper discusses the use of greedy algorithms for solving various optimization problems in computation.",
    image: "/aad2.jpg",
    tahun: 2023,
    bulan: 2,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 45,
    id_bidang_penelitian: 15,
    id_peneliti: [5],
    judul: "Algorithm Design for Parallel Computing",
    deskripsi:
      "Designing algorithms suited for parallel computing architectures.",
    abstrak:
      "This research investigates algorithmic techniques designed for effective parallel computing environments.",
    image: "/aad3.jpg",
    tahun: 2021,
    bulan: 3,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  // Image Processing
  {
    id: 46,
    id_bidang_penelitian: 16,
    id_peneliti: [6, 10],
    judul: "Deep Learning Techniques in Image Processing",
    deskripsi:
      "Utilizing deep learning for enhancing image processing techniques.",
    abstrak:
      "This paper explores the application of deep learning methods for improving image processing tasks like image segmentation and enhancement.",
    image: "/ip1.jpg",
    tahun: 2022,
    bulan: 9,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 47,
    id_bidang_penelitian: 16,
    id_peneliti: [6],
    judul: "Image Processing for Medical Imaging",
    deskripsi: "Improving medical image processing with advanced techniques.",
    abstrak:
      "This research investigates advanced image processing techniques to enhance medical imaging applications, particularly in radiology.",
    image: "/ip2.jpg",
    tahun: 2023,
    bulan: 10,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 48,
    id_bidang_penelitian: 16,
    id_peneliti: [10],
    judul: "Computer Vision for Image Processing",
    deskripsi:
      "Integrating computer vision techniques with image processing for better results.",
    abstrak:
      "This paper examines the synergy between computer vision and image processing in various industrial applications.",
    image: "/ip3.jpg",
    tahun: 2021,
    bulan: 5,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Graphics Computing
  {
    id: 49,
    id_bidang_penelitian: 17,
    id_peneliti: [6, 9],
    judul: "Real-Time Rendering in Graphics Computing",
    deskripsi:
      "Enhancing real-time rendering techniques for improved visual effects.",
    abstrak:
      "This paper focuses on techniques to improve real-time rendering for interactive graphics applications such as gaming and simulations.",
    image: "/gc1.jpg",
    tahun: 2022,
    bulan: 6,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 50,
    id_bidang_penelitian: 17,
    id_peneliti: [6],
    judul: "Graphics Computing for Virtual Reality",
    deskripsi:
      "Leveraging graphics computing techniques for immersive virtual reality experiences.",
    abstrak:
      "This research investigates how graphics computing techniques contribute to creating more immersive and realistic virtual reality environments.",
    image: "/gc2.jpg",
    tahun: 2023,
    bulan: 10,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 51,
    id_bidang_penelitian: 17,
    id_peneliti: [9],
    judul: "High-Performance Computing for Graphics Rendering",
    deskripsi:
      "Using high-performance computing in graphics rendering for complex simulations.",
    abstrak:
      "This paper discusses the role of high-performance computing in enhancing graphics rendering for large-scale simulations.",
    image: "/gc3.jpg",
    tahun: 2021,
    bulan: 9,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Forecasting
  {
    id: 52,
    id_bidang_penelitian: 18,
    id_peneliti: [7],
    judul: "Time Series Forecasting with Machine Learning",
    deskripsi:
      "Utilizing machine learning techniques for accurate time series forecasting.",
    abstrak:
      "This paper explores the application of machine learning algorithms to improve the accuracy of time series forecasting.",
    image: "/f1.jpg",
    tahun: 2022,
    bulan: 12,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 53,
    id_bidang_penelitian: 18,
    id_peneliti: [7],
    judul: "Forecasting in Financial Markets",
    deskripsi:
      "Predicting financial market trends using advanced forecasting methods.",
    abstrak:
      "The paper discusses forecasting models and techniques applied to financial market analysis and prediction.",
    image: "/f2.jpg",
    tahun: 2023,
    bulan: 4,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 54,
    id_bidang_penelitian: 18,
    id_peneliti: [7],
    judul: "Weather Forecasting with Neural Networks",
    deskripsi: "Enhancing weather forecasting using neural network models.",
    abstrak:
      "This research investigates the use of neural networks for more accurate weather forecasting.",
    image: "/f3.jpg",
    tahun: 2021,
    bulan: 11,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Database Management System
  {
    id: 55,
    id_bidang_penelitian: 19,
    id_peneliti: [8],
    judul: "Optimizing Database Management Systems for Big Data",
    deskripsi: "Improving DBMS performance for handling large-scale data.",
    abstrak:
      "This paper explores optimization techniques for database management systems designed to manage big data efficiently.",
    image: "/dbms1.jpg",
    tahun: 2022,
    bulan: 6,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 56,
    id_bidang_penelitian: 19,
    id_peneliti: [8],
    judul: "Distributed Database Systems for Real-Time Applications",
    deskripsi:
      "Designing distributed DBMS for real-time data access and processing.",
    abstrak:
      "The research focuses on the design of distributed database systems tailored for real-time applications in fields like IoT and finance.",
    image: "/dbms2.jpg",
    tahun: 2023,
    bulan: 5,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 57,
    id_bidang_penelitian: 19,
    id_peneliti: [8],
    judul: "Database Query Optimization",
    deskripsi: "Enhancing query optimization techniques in modern DBMS.",
    abstrak:
      "This paper discusses the latest advancements in query optimization for improving database management system performance.",
    image: "/dbms3.jpg",
    tahun: 2021,
    bulan: 6,
    hari: 1,
    tipe: "tesis magister",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Multimedia Analysis
  {
    id: 58,
    id_bidang_penelitian: 20,
    id_peneliti: [9],
    judul: "Multimedia Data Analysis Using Machine Learning",
    deskripsi:
      "Leveraging machine learning techniques to analyze multimedia data.",
    abstrak:
      "This paper discusses how machine learning models can be applied to analyze and extract valuable insights from multimedia data.",
    image: "/ma1.jpg",
    tahun: 2022,
    bulan: 2,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 59,
    id_bidang_penelitian: 20,
    id_peneliti: [9],
    judul: "Video Content Analysis for Multimedia Systems",
    deskripsi: "Techniques for analyzing video content in multimedia systems.",
    abstrak:
      "The paper explores the application of content analysis techniques to extract relevant information from multimedia videos.",
    image: "/ma2.jpg",
    tahun: 2023,
    bulan: 10,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 60,
    id_bidang_penelitian: 20,
    id_peneliti: [9],
    judul: "Audio and Video Synchronization in Multimedia Analysis",
    deskripsi:
      "Synchronizing audio and video streams in multimedia applications.",
    abstrak:
      "This research presents methods to synchronize audio and video for seamless multimedia experiences.",
    image: "/ma3.jpg",
    tahun: 2021,
    bulan: 10,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Machine Learning
  {
    id: 61,
    id_bidang_penelitian: 21,
    id_peneliti: [10],
    judul: "Supervised Learning Techniques in Machine Learning",
    deskripsi:
      "Applying supervised learning algorithms to various applications.",
    abstrak:
      "This paper reviews supervised learning techniques in machine learning and their applications in different domains.",
    image: "/ml1.jpg",
    tahun: 2022,
    bulan: 11,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 62,
    id_bidang_penelitian: 21,
    id_peneliti: [10],
    judul: "Deep Reinforcement Learning for Decision Making",
    deskripsi:
      "Using deep reinforcement learning to enhance decision-making processes.",
    abstrak:
      "This paper discusses how deep reinforcement learning techniques can be applied to improve decision-making models.",
    image: "/ml2.jpg",
    tahun: 2023,
    bulan: 8,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 63,
    id_bidang_penelitian: 21,
    id_peneliti: [10],
    judul: "Unsupervised Learning for Data Clustering",
    deskripsi:
      "Using unsupervised learning techniques for clustering large datasets.",
    abstrak:
      "The paper investigates unsupervised learning models for clustering and grouping data in large datasets.",
    image: "/ml3.jpg",
    tahun: 2021,
    bulan: 3,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Data Science
  {
    id: 64,
    id_bidang_penelitian: 22,
    id_peneliti: [11],
    judul: "Data Science Techniques for Predictive Analytics",
    deskripsi:
      "Applying data science techniques to predictive analytics models.",
    abstrak:
      "This paper explores the use of data science methods in creating predictive analytics models for various industries.",
    image: "/ds1.jpg",
    tahun: 2022,
    bulan: 1,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 65,
    id_bidang_penelitian: 22,
    id_peneliti: [11],
    judul: "Big Data Analytics for Data Science",
    deskripsi:
      "Techniques for handling and analyzing big data in data science.",
    abstrak:
      "This research investigates advanced methods for analyzing and processing big data in data science applications.",
    image: "/ds2.jpg",
    tahun: 2023,
    bulan: 12,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 66,
    id_bidang_penelitian: 22,
    id_peneliti: [11],
    judul: "Machine Learning Models for Data Science Applications",
    deskripsi:
      "Using machine learning models to solve complex data science problems.",
    abstrak:
      "The paper discusses the application of machine learning models in solving various data science challenges.",
    image: "/ds3.jpg",
    tahun: 2021,
    bulan: 5,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Simulation
  {
    id: 67,
    id_bidang_penelitian: 23,
    id_peneliti: [12],
    judul: "Simulation Techniques for Complex Systems",
    deskripsi: "Exploring simulation models for simulating complex systems.",
    abstrak:
      "This paper explores different techniques used in simulating complex systems in areas such as physics, economics, and engineering.",
    image: "/sim1.jpg",
    tahun: 2022,
    bulan: 4,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 68,
    id_bidang_penelitian: 23,
    id_peneliti: [12],
    judul: "Monte Carlo Simulation in System Modeling",
    deskripsi: "Applying Monte Carlo simulation to model uncertain systems.",
    abstrak:
      "This research investigates the use of Monte Carlo simulations for modeling and analyzing systems with uncertainty.",
    image: "/sim2.jpg",
    tahun: 2023,
    bulan: 7,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 69,
    id_bidang_penelitian: 23,
    id_peneliti: [12],
    judul: "Agent-Based Simulation in Complex Systems",
    deskripsi: "Using agent-based modeling to simulate complex systems.",
    abstrak:
      "This paper presents agent-based simulation models used for simulating complex interactions within systems.",
    image: "/sim3.jpg",
    tahun: 2021,
    bulan: 9,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },

  // Parallel Systems
  {
    id: 70,
    id_bidang_penelitian: 24,
    id_peneliti: [12],
    judul: "Parallel System Architectures for High-Performance Computing",
    deskripsi:
      "Designing parallel architectures for high-performance computing applications.",
    abstrak:
      "This paper discusses the design and implementation of parallel system architectures for high-performance computing.",
    image: "/ps1.jpg",
    tahun: 2022,
    bulan: 4,
    hari: 1,
    tipe: "makalah jurnal",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 71,
    id_bidang_penelitian: 24,
    id_peneliti: [12],
    judul: "Parallel Computing for Scientific Simulations",
    deskripsi:
      "Leveraging parallel computing in scientific simulations for faster results.",
    abstrak:
      "This paper investigates how parallel computing techniques can be applied to speed up scientific simulations.",
    image: "/ps2.jpg",
    tahun: 2023,
    bulan: 4,
    hari: 1,
    tipe: "konferensi internasional",
    arxiv: true,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
  {
    id: 72,
    id_bidang_penelitian: 24,
    id_peneliti: [12],
    judul: "Fault-Tolerant Parallel Systems",
    deskripsi:
      "Developing fault-tolerant parallel systems for improved reliability.",
    abstrak:
      "This paper explores methods for designing fault-tolerant parallel systems to ensure continued operation in case of hardware failures.",
    image: "/ps3.jpg",
    tahun: 2021,
    bulan: 11,
    hari: 1,
    tipe: "disertasi doktoral",
    arxiv: false,
    url: "https://arxiv.org/html/2502.20348v2#S2",
  },
];
