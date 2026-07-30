import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/support" },
  title: "Support — MyTwinLens",
  description:
    "Get help with MyTwinLens. Email support and read answers to common questions about connecting your iPhones, shooting offline, and managing your subscription.",
};

const faqs = [
  {
    question: "How do I connect my two iPhones?",
    answer:
      "Open MyTwinLens on both phones. Choose Lens on the one you'll place at a distance and Mirror on the one you'll hold. On the Mirror, scan the QR code shown on the Lens or enter its 4 character code. Keep both phones nearby and unlocked; the connection can take a few seconds.",
  },
  {
    question: "Do I need internet or WiFi to shoot?",
    answer:
      "No. The two iPhones connect directly over WiFi and Bluetooth, with no router, server, or account required. Your photos never leave your devices.",
  },
  {
    question: "My phones won't connect. What should I check?",
    answer:
      "Make sure both phones have Bluetooth on and have granted MyTwinLens the Local Network and Camera permissions in Settings. Keep the phones close together and unlocked, then try again; the first connection can take up to about 10 seconds.",
  },
  {
    question: "How do I manage or cancel my subscription?",
    answer:
      "Subscriptions are handled by Apple. On your iPhone, open Settings, tap your name at the top, then Subscriptions, and select MyTwinLens. You can also use Restore Purchases inside the app if a previous subscription isn't showing.",
  },
  {
    question: "Which devices are supported?",
    answer:
      "MyTwinLens runs on iPhone. You need two iPhones, one as the Lens and one as the Mirror.",
  },
];

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
            &larr; Back to Home
          </Link>

          <article className="space-y-10">
            <header className="space-y-3">
              <h1 className="mono-heading text-4xl font-bold text-tl-text">
                Support
              </h1>
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens is operated by Leonardo Ferhati, trading as MyElleLab
                (&quot;we&quot;, &quot;us&quot;). You can contact us at{" "}
                <a
                  href="mailto:support@myellelab.com"
                  className="text-tl-amber hover:underline"
                >
                  support@myellelab.com
                </a>
                .
              </p>
            </header>

            {/* Contact block */}
            <div className="p-6 rounded-xl bg-tl-surface border border-tl-border space-y-4">
              <a
                href="mailto:support@myellelab.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-tl-amber text-tl-bg font-semibold text-sm hover:bg-[#D97706] transition-colors"
              >
                support@myellelab.com
              </a>
              <p className="text-sm text-tl-muted">
                We typically respond within 1 to 2 business days.
              </p>
            </div>

            {/* FAQ */}
            <section className="space-y-4">
              <h2 className="mono-heading text-sm text-tl-muted tracking-widest">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-tl-surface border border-tl-border"
                  >
                    <h3 className="font-semibold text-tl-text mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-tl-muted leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <div className="mt-12 pt-6 border-t border-tl-border text-sm text-tl-muted">
            See also:{" "}
            <Link href="/privacy" className="text-tl-amber hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-tl-amber hover:underline">
              Terms of Use
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
