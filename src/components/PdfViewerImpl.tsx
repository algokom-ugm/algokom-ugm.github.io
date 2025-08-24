"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function PdfViewerImpl({
  fileUrl = "/lab-guide.pdf",
  height = "80vh",
}: { fileUrl?: string; height?: string }) {
  const layout = defaultLayoutPlugin();
  return (
    <div style={{ height }} className="rounded-xl border overflow-hidden">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={fileUrl} plugins={[layout]} />
      </Worker>
    </div>
  );
}
