"use client";

import dynamic from "next/dynamic";

// Do the ssr:false here (client-land), not in a Server Component
const PdfViewerImpl = dynamic(() => import("./PdfViewerImpl"), { ssr: false });

export default function PdfEmbed(props: { fileUrl?: string; height?: string }) {
  return <PdfViewerImpl {...props} />;
}
