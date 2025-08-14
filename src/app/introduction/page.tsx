export default function Introduction() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-10">
      <h2 className="text-3xl font-bold">Tentang Laboratorium Kami</h2>

      {/* Afiliasi */}
      <section className="space-y-2">
        <h3 className="text-2xl font-semibold">Afiliasi</h3>
        <p>Departemen Ilmu Komputer dan Elektronika, Universitas Gadjah Mada</p>
      </section>

      {/* Kehidupan di Laboratorium */}
      <section className="space-y-2">
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
      </section>

      {/* Riset */}
      <section className="space-y-2">
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
      </section>

      {/* Fasilitas dan Biaya */}
      <section className="space-y-2">
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
      </section>

      {/* Pelatihan */}
      <section className="space-y-2">
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
      </section>
    </div>
  );
}
