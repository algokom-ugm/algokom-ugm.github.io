export default function Introduction() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <h2 className="text-3xl font-bold">Tentang Laboratorium Kami</h2>

      {/* Afiliasi */}
      {/* <section className="space-y-2">
        <h3 className="text-2xl font-semibold">Afiliasi</h3>
        <p>Departemen Ilmu Komputer dan Elektronika, Universitas Gadjah Mada</p>
      </section> */}

      {/* Kehidupan di Laboratorium */}
      {/* <section className="space-y-2">
        <h3 className="text-2xl font-semibold">Kehidupan di Laboratorium</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Komunikasi utama dilakukan melalui Slack dan email, baik untuk
            urusan santai maupun diskusi riset. Pertemuan langsung diadakan jika
            diperlukan.
          </li>
          <li>
            Tidak ada jam kerja inti, anggota lab bebas bekerja sesuai jadwal
            masing-masing. Namun, semua wajib hadir dalam dua jenis seminar:
            global dan lokal.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Disarankan datang langsung ke lab agar bisa membedakan waktu
                kerja dan waktu pribadi, serta melatih kepemimpinan.
              </li>
              <li>
                Lab kami terletak di gedung utama Cyberscience Center dekat
                Stasiun Subway Aobayama. Fasilitas seperti vending machine,
                kafetaria, dan convenience store tersedia di sekitar.
              </li>
            </ul>
          </li>
          <li>
            Mahasiswa S2 dan S1 tahun ke-4 wajib ikut seminar global mingguan.
            S1 melaporkan progres tiap dua bulan, sedangkan S2 tiap bulan.
          </li>
          <li>
            Seminar lokal dipimpin mahasiswa senior dan bersifat lebih santai,
            bisa jadi tempat bertukar ide dan update progres riset.
          </li>
        </ul>
      </section> */}

      {/* Riset */}
      {/* <section className="space-y-2">
        <h3 className="text-2xl font-semibold">Riset</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Riset berarti mencoba memecahkan masalah yang belum ada jawabannya.
            Dosen adalah partner riset, bukan bos atau guru.
          </li>
          <li>
            Nilai dari riset hanya terlihat jika dijelaskan dengan baik. Maka,
            kemampuan berpikir logis dan menulis teknis sangat ditekankan.
          </li>
          <li>
            Mahasiswa S1 memilih topik riset dari dosen dan ditargetkan bisa
            presentasi poster atau lisan di workshop eksternal.
          </li>
          <li>
            Mahasiswa S2 bisa melanjutkan atau memulai topik baru dan
            ditargetkan publikasi di konferensi bereview.
          </li>
          <li>
            Mahasiswa S3 ditargetkan jadi peneliti mandiri dan publikasi minimal
            tiga paper bereview (termasuk satu jurnal).
          </li>
        </ul>
      </section> */}

      {/* Fasilitas dan Biaya */}
      {/* <section className="space-y-2">
        <h3 className="text-2xl font-semibold">Fasilitas dan Biaya</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Meja kerja tersedia untuk mahasiswa S2 dan S1 tahun ke-4.</li>
          <li>Monitor disediakan, dan laptop lab bisa dipinjam jika perlu.</li>
          <li>
            Sumber daya komputasi tersedia termasuk server GPU/FPGA dan
            Superkomputer AOBA.
          </li>
          <li>
            Biaya konferensi dan publikasi ditanggung penuh oleh laboratorium.
          </li>
        </ul>
      </section> */}

      {/* Pelatihan */}
      {/* <section className="space-y-2">
        <h3 className="text-2xl font-semibold">Program Pelatihan</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Mahasiswa S1 bergabung di tahun ke-3 dan mendapat materi pengenalan
            seputar tools dan komputer.
          </li>
          <li>
            Sesi belajar bersama mahasiswa senior diadakan segera setelah
            bergabung.
          </li>
          <li>
            Seminar “Hennessy and Paterson” untuk memahami arsitektur komputer,
            bekerja sama dengan Lab Arsitektur Komputer.
          </li>
          <li>
            Skill Map lab membimbing mahasiswa dari pemula hingga mahir secara
            mandiri, dengan bantuan dari senior.
          </li>
          <li>
            Mahasiswa S2 juga bisa mengikuti pelatihan tergantung kebutuhan awal
            mereka.
          </li>
        </ul>
      </section> */}

      {/* Deskripsi Singkat */}
      <section className="space-y-2">
        {/* <h3 className="text-2xl font-semibold">Deskripsi Singkat</h3> */}
        <p className="text-gray-700">
          Laboratorium keilmuan Algoritma dan Komputasi merupakan laboratorium yang menyediakan, mengembangkan kompetensi, serta melaksanakan penelitian dalam aspek teoritis dan komputasional Ilmu Komputer.
        </p>
        <p className="text-gray-700">
          Aspek teoritis ilmu komputer mencakup kajian mendalam mengenai teori dasar ilmu komputer, mesin-mesin komputasi, bahasa dan grammar formal, batasan-batasan komputasi, teori kompleksitas, konsep dasar algoritma, serta teknik-teknik pengembangan dan analisis algoritma. Sementara itu, aspek komputasional menitikberatkan pada metode numerik, sistem pendukung komputasi untuk berbagai disiplin ilmu seperti matematika, fisika, kimia, biologi, ekonomi finansial, dan bahasa alami, serta pengembangan pendekatan pemodelan dan simulasi hingga riset operasi.
        </p>
      </section>

      {/* Bidang Penelitian Utama + Tambahan */}
      <section className="space-y-4">
        <h3 className="text-2xl font-semibold">Bidang Penelitian</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Metode Formal</span> — verifikasi, model checking,
            proving, dan teori bahasa pemrograman.
          </li>
          {/* <li>
            <span className="font-semibold">Algoritma</span> — pengembangan, desain, dan analisis
            kompleksitas algoritmik.
          </li> */}
          {/* <li>
            <span className="font-semibold">Optimasi</span> — teori dan aplikasi optimasi untuk
            persoalan komputasi dan dunia nyata.
          </li> */}
          {/* <li>
            <span className="font-semibold">Model-model Komputasi</span> — grid, cloud, parallel
            computing, dan model fraktal.
          </li> */}
          <li>
            <span className="font-semibold">Sains Komputasional</span> — penerapan komputasi pada
            sains (fisika, kimia, biologi), matematika, dan metode numerik.
          </li>
          {/* <li>
            <span className="font-semibold">Pemodelan, Analisis, &amp; Correctness Sistem Reaktif</span> — metode/algoritma untuk menjamin kesahihan sistem reaktif.
          </li> */}
          {/* <li>
            <span className="font-semibold">Keamanan Data</span> — kriptografi, kriptosistem, dan
            kriptanalisis.
          </li> */}

          {/* Tambahan dari daftar yang belum tercantum */}
          <li>
            <span className="font-semibold">Grafika Komputer</span> — visualisasi, rendering,
            pemodelan grafis, dan interaksi berbasis grafis.
          </li>
          <li>
            <span className="font-semibold">Pengenalan Pola</span> — deteksi, klasifikasi, dan
            identifikasi pola pada citra, sinyal, maupun teks.
          </li>
          <li>
            <span className="font-semibold">Algoritma Terdistribusi</span> — sinkronisasi,
            komunikasi antar-node, dan toleransi kesalahan pada sistem terdistribusi.
          </li>
          <li>
            <span className="font-semibold">Metode Numerik</span> — algoritme numerik yang efisien
            dan stabil untuk persoalan matematis kompleks.
          </li>
          <li>
            <span className="font-semibold">Komputasi Runtun Waktu</span> — pemodelan, analisis,
            dan prediksi data time-series untuk sains, ekonomi, dan sistem cerdas.
          </li>
          <li>
            <span className="font-semibold">Sistem Surveilans Cerdas &amp; Analisis Video</span> —
            computer vision, deteksi objek, dan pemantauan otomatis berbasis AI.
          </li>
          <li>
            <span className="font-semibold">Neurosains Komputasional</span> — pemodelan jaringan
            saraf biologis dan algoritme terinspirasi biologi.
          </li>
        </ol>
      </section>

      {/* Bidang Terkait (dari daftar kedua 1–4) */}
      {/* <section className="space-y-3">
        <h3 className="text-2xl font-semibold">Bidang Terkait</h3>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Mobile Software Analysis &amp; Design</span> — desain,
            analisis, dan evaluasi perangkat lunak bergerak.
          </li>
          <li>
            <span className="font-semibold">Information Retrieval (IR)</span> — model IR,
            efisiensi, dan keakuratan temu kembali informasi.
          </li>
          <li>
            <span className="font-semibold">Data Mining</span> — penemuan pola, prediksi, dan
            pengambilan keputusan berbasis data.
          </li>
          <li>
            <span className="font-semibold">Integrasi Data</span> — metode integrasi dan
            sinkronisasi data dari berbagai sumber heterogen.
          </li>
        </ol>
      </section> */}
    </div>
  );
}
