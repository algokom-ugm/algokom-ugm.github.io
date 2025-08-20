export default function contact() {
  return (
    // <div className="p-6 max-w-4xl mx-auto space-y-8">
    //   <h1 className="text-3xl font-bold text-center">Hubungi Kami</h1>

    //   <p className="text-center text-gray-600 max-w-xl mx-auto">
    //     Kami ingin mendengar dari Anda. Baik itu pertanyaan, ide kolaborasi,
    //     atau sekadar ingin menyapa — jangan ragu untuk menghubungi kami melalui
    //     email atau mengunjungi lab kami.
    //   </p>

    //   <div className="text-center text-lg">
    //     Hubungi kami di:{" "}
    //     <a
    //       href="mailto:algoritma.lab@xyz.ac.id"
    //       className="text-blue-600 underline hover:text-blue-800"
    //     >
    //       algoritma.lab@xyz.ac.id
    //     </a>
    //   </div>

    //   {/* Peta Tersemat */}
    //   <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
    //     <iframe
    //       src="https://www.google.com/maps/embed?pb=!1m18!..." // Ganti dengan embed yang sebenarnya
    //       width="100%"
    //       height="100%"
    //       style={{ border: 0 }}
    //       allowFullScreen
    //       loading="lazy"
    //       referrerPolicy="no-referrer-when-downgrade"
    //     ></iframe>
    //   </div>
    // </div>
    <div className="p-6 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center">Laboratorium Algoritma dan Komputasi</h1>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Kepala Laboratorium</h2>
        <p>
          <span className="font-medium">Muhammad Alfian Amrizal, B.Eng., M.I.S., Ph.D.</span><br />
          Ketua Laboratorium Algoritma dan Komputasi<br />
          Departemen Ilmu Komputer dan Elektronika<br />
          Fakultas Matematika dan Ilmu Pengetahuan Alam<br />
          Universitas Gadjah Mada
        </p>
        <p>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:muhammad.alfian.amrizal@ugm.ac.id"
            className="text-blue-600 underline hover:text-blue-800"
          >
            muhammad.alfian.amrizal@ugm.ac.id
          </a><br />
          <span className="font-medium">Bidang Keahlian:</span> High Performance Computing & Parallel Computing
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Alamat Laboratorium</h2>
        <p>
          Laboratorium Algoritma dan Komputasi<br />
          Departemen Ilmu Komputer dan Elektronika<br />
          Fakultas Matematika dan Ilmu Pengetahuan Alam<br />
          Universitas Gadjah Mada<br />
          Sekip Utara, Yogyakarta 55281<br />
          Indonesia
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Informasi Umum</h2>
        <p>
          Untuk pertanyaan seputar kegiatan laboratorium, peluang kolaborasi, atau kemitraan riset, 
          silakan hubungi langsung Kepala Laboratorium atau melalui laman resmi Laboratorium Algoritma dan Komputasi.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Kolaborasi Penelitian</h2>
        <p>
          Kami terbuka untuk menjalin kolaborasi dengan berbagai pihak, termasuk:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Institusi riset internasional</li>
          <li>Industri</li>
          <li>Lembaga pemerintah</li>
          <li>Organisasi nirlaba</li>
        </ul>
        {/* <p>
          Saat ini SENADA telah bekerja sama dengan sejumlah mitra global, seperti 
          <span className="font-medium"> Deakin University Australia</span>, 
          serta terlibat dalam berbagai program penelitian yang didukung oleh hibah internasional.
        </p> */}
      </div>
    </div>

  );
}
