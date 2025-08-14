export interface ResearchItem {
  slug: string;
  title: string;
  desc: string;
  abstract: string;
  img: string;
  arxivHtmlUrl: string;
  researcherSlug: string;
}

export const research: ResearchItem[] = [
  {
    slug: "improving-the-efficiency-of-a-deep-reinforcement-learning-based-powermanagement-system-for-hpc-clusters-using-curriculum-learning",
    researcherSlug: "muhammad-alfian-amrizal",
    title:
      "Improving the Efficiency of a Deep Reinforcement Learning-Based PowerManagement System for HPC Clusters Using Curriculum Learning",
    desc: `Penelitian ini menyempurnakan deep reinforcement learning (DRL) untuk
          mengelola daya dalam klaster HPC dengan menerapkan curriculum
          learning, yang melatih agen secara bertahap dari tugas yang mudah ke
          tugas yang sulit. Metode yang diusulkan mengurangi energi yang
          terbuang dan waktu tunggu pekerjaan sambil mempertahankan pemanfaatan
          sumber daya yang tinggi. Diuji pada simulator Batsim-py, metode ini
          mengungguli DRL dasar dan strategi batas waktu tradisional. Pendekatan
          ini juga beradaptasi dengan baik pada pengaturan sistem yang berbeda
          tanpa pelatihan ulang, menunjukkan ketahanan dan fleksibilitas yang
          kuat.`,
    abstract: `Konsumsi energi yang tinggi tetap menjadi tantangan utama dalam sistem komputasi kinerja tinggi (HPC), yang sering kali menampilkan ratusan atau ribuan node yang menarik daya substansial bahkan dalam mode siaga atau siaga. Meskipun mematikan node yang tidak digunakan dapat meningkatkan efisiensi energi, memilih waktu yang salah untuk melakukannya dapat menurunkan kualitas layanan dengan menunda eksekusi pekerjaan. Pembelajaran mesin, khususnya pembelajaran penguatan (RL), telah menunjukkan janji dalam menentukan waktu optimal untuk menghidupkan atau mematikan node. Dalam studi ini, kami meningkatkan kinerja agen pembelajaran penguatan mendalam (DRL) untuk manajemen daya HPC dengan mengintegrasikan pembelajaran kurikulum (CL), pendekatan pelatihan yang memperkenalkan tugas-tugas dengan kesulitan yang meningkat secara bertahap. Dengan menggunakan kerangka simulasi Batsim-py, kami membandingkan agen berbasis CL yang diusulkan dengan metode DRL dasar (tanpa CL) dan strategi batas waktu tetap konvensional. Hasil eksperimen mengonfirmasi bahwa kurikulum yang mudah-ke-sulit mengungguli perintah pelatihan lainnya dalam hal mengurangi penggunaan energi yang terbuang. Agen terbaik mencapai pengurangan energi sebesar 3,73% dibandingkan metode DRL dasar dan peningkatan sebesar 4,66% dibandingkan dengan konfigurasi batas waktu terbaik (mati setiap 15 menit waktu idle). Selain itu, ia mengurangi waktu tunggu pekerjaan rata-rata sebesar 9,24% dan mempertahankan tingkat pengisian pekerjaan yang lebih tinggi, yang menunjukkan pemanfaatan sumber daya yang lebih efektif. Uji sensitivitas di berbagai durasi penyalaan, level daya, dan ukuran kluster selanjutnya mengungkap kemampuan adaptasi agen terhadap perubahan parameter sistem tanpa pelatihan ulang. Temuan ini menunjukkan bahwa pembelajaran kurikulum dapat secara signifikan meningkatkan manajemen daya berbasis DRL di HPC, menyeimbangkan penghematan energi, kualitas layanan, dan ketahanan terhadap berbagai konfigurasi.`,
    img: "/hpc_research.jpg",
    arxivHtmlUrl: "https://arxiv.org/html/2502.20348v2",
  },
  {
    slug: "investigating-the-impact-of-optimal-data-transfer-intervals-on-failure-prone-wireless-sensor-networks",
    researcherSlug: "muhammad-alfian-amrizal",
    title: ` Investigating the Impact of Optimal Data Transfer Intervals on
          Failure-Prone Wireless Sensor Networks`,
    desc: `Penelitian ini mengusulkan metode untuk mengoptimalkan interval
          transfer data dalam jaringan sensor nirkabel (WSN) menggunakan model
          Markov. Pendekatan ini meningkatkan keandalan data dengan mengurangi
          risiko kehilangan data, bahkan dalam berbagai pola kegagalan node.
          Simulasi menunjukkan deviasi kurang dari 7,3% dari interval optimal
          yang sebenarnya, yang membuktikan kekokohannya. Metode ini juga
          terintegrasi dengan baik dengan protokol TDMA, sehingga meningkatkan
          waktu pengumpulan data dan efisiensi energi.`,
    abstract: `Jaringan sensor nirkabel (WSN) biasanya terdiri dari simpul sensor yang rentan terhadap kegagalan dan simpul penerima yang lebih andal. Untuk mencegah kehilangan data, simpul sensor harus secara teratur mentransfer datanya ke simpul penerima. Oleh karena itu, pengaturan interval transfer data yang tepat di antara keduanya sangat penting. Surat ini menyajikan metode untuk mengoptimalkan interval transfer data menggunakan model Markov. Meskipun model Markov secara langsung menyiratkan asumsi waktu antarkedatangan kegagalan yang didistribusikan secara eksponensial, dengan menggunakan simulasi yang ekstensif, kami menunjukkan bahwa interval transfer data optimal yang diperoleh oleh model ini masih berkinerja sangat baik di bawah distribusi kegagalan lainnya dengan perbedaan kurang dari 7,3% dalam hal periode kehilangan data dibandingkan dengan interval transfer data optimal yang sebenarnya. Kami juga membahas cara mengintegrasikan metode yang diusulkan ke dalam protokol komunikasi yang banyak digunakan di WSN, TDMA, dan menunjukkan bahwa hal itu dapat meningkatkan waktu pengumpulan data dan efisiensi energi.`,
    img: "/wsn_research.jpg",
    arxivHtmlUrl: "https://arxiv.org/html/2502.20348v2",
  },
  {
    slug: "combining-multiple-text-representations-for-improved-automatic-evaluation-of-indonesian-essay-answers",
    researcherSlug: "muhammad-alfian-amrizal",
    title:
      "Combining Multiple Text Representations for Improved Automatic Evaluation of Indonesian Essay Answers",
    desc: `Penelitian ini mengusulkan kombinasi berbagai representasi teks untuk meningkatkan akurasi evaluasi otomatis jawaban esai berbahasa Indonesia. Dengan membandingkan metode embedding seperti FastText, Word2Vec, GloVe, dan RoBERTa, serta pendekatan encoding seperti LSTM dan transformer, hasil eksperimen menunjukkan bahwa kombinasi encoder (LSTM, transformer, dan TF-IDF) memberikan performa terbaik dalam mengklasifikasi kualitas jawaban, dengan skor F1 mencapai 77.22%.`,
    abstract: `pilihan ganda, terkait dengan prestasi belajar siswa. Namun, ketika jumlah siswa dalam satu kelas sangat banyak, ujian dengan menggunakan soal esai menjadi sulit dilakukan dan memerlukan waktu evaluasi yang lama. Oleh karena itu, evaluasi esai otomatis menjadi pendekatan yang potensial dalam situasi ini. Berbagai metode telah diajukan, namun solusi optimal untuk evaluasi tersebut dalam bahasa Indonesia kurang dikenal. Lebih jauh, dengan pesatnya perkembangan pendekatan pembelajaran mesin, khususnya pendekatan pembelajaran mendalam, penyelidikan solusi optimal tersebut menjadi lebih diperlukan.`,
    img: "/lstm_research.jpg",
    arxivHtmlUrl: "https://arxiv.org/html/2502.20348v2",
  },
];

export interface Researcher {
  slug: string;
  name: string;
}

export const researchers: Researcher[] = [
  {
    slug: "muhammad-alfian-amrizal",
    name: "Dr. Muhammad Alfian Amrizal, B.Eng., M.I.S., Ph.D.",
  },
  { slug: "jane-smith", name: "Prof. Jane Smith" },
];
