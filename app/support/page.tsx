import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — TwinLens",
  description: "Get help with TwinLens. FAQ, troubleshooting, and contact.",
};

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-tl-muted hover:text-tl-amber transition-colors mb-10"
          >
            ← Back to Home
          </Link>

          <header className="mb-12 space-y-2">
            <h1 className="text-4xl font-bold text-tl-text">Support</h1>
            <p className="text-tl-muted">
              Answers to common questions. If you can&apos;t find what you need,
              email us.
            </p>
          </header>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold text-tl-text mb-6">
              Frequently asked questions
            </h2>
            <FaqAccordion />
          </section>

          {/* Contact */}
          <section className="p-6 rounded-xl border border-tl-border bg-tl-surface space-y-4">
            <h2 className="text-xl font-semibold text-tl-text">
              Still need help?
            </h2>
            <p className="text-tl-muted leading-relaxed">
              Have a question, found a bug, or want to share feedback? We read
              every email.
            </p>
            <a
              href="mailto:leo_frht@icloud.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-tl-amber text-tl-bg font-semibold text-sm hover:bg-[#D97706] transition-colors"
            >
              Email leo_frht@icloud.com
            </a>

            <div className="pt-2 border-t border-tl-border">
              <p className="text-xs text-tl-muted">
                You can also{" "}
                <a
                  href="https://apps.apple.com/app/twinlens-remote-lens-mirror/id6743597614"
                  className="text-tl-amber hover:underline"
                >
                  leave a review on the App Store
                </a>{" "}
                — it helps more than you know.
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
