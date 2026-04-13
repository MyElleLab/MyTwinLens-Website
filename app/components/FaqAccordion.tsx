"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do both iPhones need TwinLens installed?",
    answer:
      "Yes. Open TwinLens on both devices — one becomes the Lens (camera), the other becomes the Mirror (viewfinder + shutter). They connect directly over Wi-Fi and Bluetooth.",
  },
  {
    question: "Do I need internet or Wi-Fi?",
    answer:
      "No. TwinLens uses a direct peer-to-peer connection between the two iPhones. No internet, no router, no hotspot required. Works anywhere — hiking trails, beaches, remote locations.",
  },
  {
    question: "How far apart can the two phones be?",
    answer:
      "The range depends on your environment. In open spaces, you can typically shoot from 100-200+ feet. Walls and obstacles reduce range. The Pro upgrade extends the connection range further.",
  },
  {
    question: "Are the photos full quality?",
    answer:
      "Yes. The live stream is compressed H.264 for real-time viewing, but the actual photo captured is full sensor resolution HEIF — exactly what your iPhone camera hardware delivers.",
  },
  {
    question: "Where are my photos saved?",
    answer:
      "You choose: Lens only, Mirror only, or both devices. Photos are saved directly to the Camera Roll on whichever device(s) you select.",
  },
  {
    question: "Does TwinLens collect any data?",
    answer:
      "Zero. No analytics, no tracking, no accounts, no server communication. Everything stays on your devices over the local network.",
    link: { text: "Privacy Policy", href: "/privacy" },
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border border-tl-border bg-tl-surface overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left group"
            aria-expanded={open === i}
          >
            <span className="font-medium text-tl-text group-hover:text-tl-amber transition-colors">
              {faq.question}
            </span>
            <span
              className="text-tl-muted ml-4 flex-shrink-0 transition-transform duration-200"
              style={{
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          {open === i && (
            <div className="px-6 pb-5 text-sm text-tl-muted leading-relaxed border-t border-tl-border pt-4">
              <p>{faq.answer}</p>
              {faq.link && (
                <a
                  href={faq.link.href}
                  className="mt-2 inline-block text-tl-amber hover:underline"
                >
                  {faq.link.text} →
                </a>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
