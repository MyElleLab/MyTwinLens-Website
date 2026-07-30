import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
  title: "Terms of Use — MyTwinLens",
  description: "Terms of Use for the MyTwinLens iOS app.",
};

export default function TermsPage() {
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

          <article className="space-y-8">
            <header className="space-y-2">
              <h1 className="text-4xl font-bold text-tl-text">Terms of Use</h1>
              <p className="text-sm text-tl-muted">Last updated: July 2026</p>
            </header>

            <p className="text-tl-muted leading-relaxed">
              MyTwinLens is operated by Leonardo Ferhati, trading as MyElleLab
              (&quot;we&quot;, &quot;us&quot;). You can contact us at{" "}
              <a
                href="mailto:support@myellelab.com"
                className="text-tl-amber hover:underline"
              >
                support@myellelab.com
              </a>
              . By downloading, installing, or using MyTwinLens (&quot;the App&quot;),
              you agree to be bound by these Terms of Use.
            </p>

            <Section title="Acceptance of Terms">
              <p className="text-tl-muted leading-relaxed">
                By accessing or using MyTwinLens, you agree to be bound by these Terms
                of Use and our{" "}
                <Link href="/privacy" className="text-tl-amber hover:underline">
                  Privacy Policy
                </Link>
                . If you do not agree to these terms, do not use the App.
              </p>
            </Section>

            <Section title="Description of Service">
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens is a remote camera application for iOS that connects two
                iPhones over a local network &mdash; one as a camera (Lens) and one as
                a live viewfinder with remote shutter (Mirror). All communication
                occurs over local Wi-Fi and Bluetooth using Apple&apos;s Multipeer
                Connectivity framework. No internet connection is required.
              </p>
            </Section>

            <Section title="Subscriptions and Payments">
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens is sold as an auto-renewing subscription, billed through your
                Apple ID at 4.99 USD per month or 39.99 USD per year. Local prices are
                set by Apple for your region and shown at checkout. By subscribing, you
                agree to the following:
              </p>
              <ul className="mt-3 space-y-2 text-tl-muted">
                <ListItem>
                  Payment is charged to your Apple ID account at confirmation of purchase
                </ListItem>
                <ListItem>
                  Subscriptions automatically renew unless cancelled at least 24 hours
                  before the end of the current billing period
                </ListItem>
                <ListItem>
                  Your Apple ID will be charged for renewal within 24 hours prior to the
                  end of the current period at the same price
                </ListItem>
                <ListItem>
                  You can manage or cancel subscriptions in{" "}
                  <strong className="text-tl-text">
                    iPhone Settings &rarr; Apple ID &rarr; Subscriptions
                  </strong>
                </ListItem>
                <ListItem>
                  Prices may vary by region and are displayed in the App before purchase
                </ListItem>
              </ul>
              <p className="mt-3 text-tl-muted leading-relaxed">
                All payments are processed by Apple and are subject to Apple&apos;s{" "}
                <a
                  href="https://www.apple.com/legal/internet-services/itunes/"
                  className="text-tl-amber hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
                . Refunds are handled by Apple per their refund policy.
              </p>
            </Section>

            <Section title="Device Compatibility">
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens requires two iOS devices with camera and local network
                capability. Connection quality depends on local network conditions,
                distance between devices, and potential obstacles. We do not guarantee
                uninterrupted or error-free connections.
              </p>
            </Section>

            <Section title="User Responsibilities">
              <p className="text-tl-muted leading-relaxed">
                When using MyTwinLens, you agree to:
              </p>
              <ul className="mt-3 space-y-2 text-tl-muted">
                <ListItem>Use the App only for lawful purposes</ListItem>
                <ListItem>
                  Not use the App for surveillance or any activity that violates the
                  privacy or rights of others
                </ListItem>
                <ListItem>
                  Take responsibility for the physical safety of devices placed at a distance
                </ListItem>
                <ListItem>
                  Not attempt to reverse-engineer, decompile, disassemble, or tamper
                  with the App
                </ListItem>
                <ListItem>
                  Not redistribute, sublicense, or create derivative works based on the App
                </ListItem>
              </ul>
            </Section>

            <Section title="Intellectual Property">
              <p className="text-tl-muted leading-relaxed">
                All content, design, code, and visual assets of MyTwinLens are the
                intellectual property of MyElleLab. You are granted a limited,
                non-exclusive, non-transferable, revocable license to use the App for
                personal, non-commercial purposes in accordance with these Terms.
              </p>
            </Section>

            <Section title="Data and Privacy">
              <p className="text-tl-muted leading-relaxed">
                MyElleLab does not collect personal data through MyTwinLens. All data stays on your
                devices. Photos are saved to your Camera Roll, not to any cloud
                service. For full details, see our{" "}
                <Link href="/privacy" className="text-tl-amber hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </Section>

            <Section title="Disclaimer of Warranties">
              <p className="text-tl-muted leading-relaxed">
                The App is provided &quot;as is&quot; and &quot;as available&quot; without
                warranties of any kind, whether express or implied, including but not
                limited to implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement. We do not warrant that the
                App will be error-free, uninterrupted, secure, or free of harmful
                components.
              </p>
            </Section>

            <Section title="Limitation of Liability">
              <p className="text-tl-muted leading-relaxed">
                To the maximum extent permitted by applicable law, MyElleLab shall not
                be liable for any indirect, incidental, special, consequential, or
                punitive damages arising from or related to your use of or inability to
                use the App, including but not limited to device damage, photo loss, or
                missed photo opportunities, regardless of the cause of action or the
                theory of liability.
              </p>
            </Section>

            <Section title="Termination">
              <p className="text-tl-muted leading-relaxed">
                We reserve the right to terminate or suspend your access to the App at
                any time, without prior notice, for conduct that we believe violates
                these Terms or is harmful to other users, us, or third parties.
              </p>
            </Section>

            <Section title="Governing Law">
              <p className="text-tl-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with the
                laws of Denmark, without regard to conflict of law principles. Any
                disputes arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of Denmark.
              </p>
              <p className="mt-3 text-tl-muted leading-relaxed">
                If you are a consumer resident in the European Union or the European
                Economic Area, nothing in this section deprives you of the protection
                of the mandatory consumer law of the country in which you live, and you
                keep the right to bring proceedings in the courts of that country.
              </p>
            </Section>

            <Section title="Changes to These Terms">
              <p className="text-tl-muted leading-relaxed">
                We reserve the right to update these Terms at any time. Changes will be
                posted on this page with an updated date. Continued use of the App
                after changes constitutes acceptance of the revised Terms.
              </p>
            </Section>

            <Section title="Contact">
              <p className="text-tl-muted leading-relaxed">
                For questions about these Terms:{" "}
                <a
                  href="mailto:support@myellelab.com"
                  className="text-tl-amber hover:underline"
                >
                  support@myellelab.com
                </a>
              </p>
            </Section>
          </article>

          <div className="mt-12 pt-6 border-t border-tl-border text-sm text-tl-muted">
            See also:{" "}
            <Link href="/privacy" className="text-tl-amber hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-tl-text border-b border-tl-border pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-tl-amber flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}
