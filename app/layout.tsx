import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mytwinlens.myellelab.com"),
  title: "MyTwinLens — Two iPhones. One camera.",
  description:
    "Place one iPhone as the camera, hold the other as a live viewfinder. Frame, zoom, expose and shoot from across the room — private, peer-to-peer, no cloud.",
  keywords: [
    "remote lens",
    "viewfinder",
    "two iphone camera",
    "solo travel photo",
    "mirror camera",
    "remote shutter",
    "iOS",
  ],
  openGraph: {
    title: "MyTwinLens — Two iPhones. One camera.",
    description:
      "A remote lens and a live mirror. Shoot from where the camera can't be. Peer-to-peer, encrypted, no servers.",
    url: "https://mytwinlens.myellelab.com",
    siteName: "MyTwinLens",
    type: "website",
    images: [
      {
        url: "/app-icon.jpeg",
        width: 1024,
        height: 1024,
        alt: "MyTwinLens app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyTwinLens — Two iPhones. One camera.",
    description:
      "A remote lens and a live mirror. Shoot from where the camera can't be.",
  },
  icons: {
    icon: [
      { url: "/app-icon.jpeg", sizes: "1024x1024", type: "image/jpeg" },
    ],
    apple: "/app-icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/app-icon.jpeg" type="image/jpeg" />
      </head>
      <body className="bg-tl-bg text-tl-text antialiased">
        {children}
      </body>
    </html>
  );
}
