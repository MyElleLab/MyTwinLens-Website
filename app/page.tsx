import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import type { Metadata } from "next";
import "./home.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// The landing page ships as hand-authored markup (app/home.html) with its own
// stylesheet (app/home.css) and behaviour (public/site.js). It is read at build
// time so the static export contains the markup inline, exactly as authored.
const markup = fs.readFileSync(path.join(process.cwd(), "app", "home.html"), "utf8");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MyTwinLens",
  operatingSystem: "iOS",
  applicationCategory: "PhotographyApplication",
  softwareVersion: "1.1.0",
  url: "https://mytwinlens.myellelab.com",
  description:
    "Pair two iPhones over an encrypted peer-to-peer link: one becomes a remote camera (Lens), the other a live viewfinder with full manual control (Mirror).",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      <Script src="/site.js" strategy="afterInteractive" />
    </>
  );
}
