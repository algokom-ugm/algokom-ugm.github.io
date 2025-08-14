export default function contact() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Hubungi Kami</h1>

      <p className="text-center text-gray-600 max-w-xl mx-auto">
        Kami ingin mendengar dari Anda. Baik itu pertanyaan, ide kolaborasi,
        atau sekadar ingin menyapa — jangan ragu untuk menghubungi kami melalui
        email atau mengunjungi lab kami.
      </p>

      <div className="text-center text-lg">
        Hubungi kami di:{" "}
        <a
          href="mailto:algoritma.lab@xyz.ac.id"
          className="text-blue-600 underline hover:text-blue-800"
        >
          algoritma.lab@xyz.ac.id
        </a>
      </div>

      {/* Peta Tersemat */}
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..." // Ganti dengan embed yang sebenarnya
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
