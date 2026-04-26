import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TwinLens — Remote Lens & Mirror for iOS",
  description:
    "Your second iPhone becomes a live viewfinder and remote shutter. No internet needed to shoot — your iPhones connect directly over Wi-Fi and Bluetooth.",
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
    title: "TwinLens — Remote Lens & Mirror for iOS",
    description:
      "You. In the shot. Finally. Live viewfinder + remote shutter from your second iPhone.",
    url: "https://github.com/leofrht-jpg/TwinLens-App",
    siteName: "TwinLens",
    type: "website",
    images: [
      {
        url: "/app-icon.jpeg",
        width: 1024,
        height: 1024,
        alt: "TwinLens app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TwinLens — Remote Lens & Mirror for iOS",
    description:
      "You. In the shot. Finally. Live viewfinder + remote shutter from your second iPhone.",
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
