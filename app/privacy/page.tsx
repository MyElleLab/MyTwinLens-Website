import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy — MyTwinLens",
  description:
    "MyTwinLens collects zero data. Everything stays on your devices. Read our full privacy policy.",
};

export default function PrivacyPage() {
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
              <h1 className="text-4xl font-bold text-tl-text">Privacy Policy</h1>
              <p className="text-sm text-tl-muted">Last updated: July 2026</p>
            </header>

            <p className="text-tl-muted leading-relaxed">
              MyTwinLens is operated by Leonardo Ferhati, trading as MyElleLab
              (&quot;we&quot;, &quot;us&quot;), the data controller for the App. You can
              contact us at{" "}
              <a
                href="mailto:support@myellelab.com"
                className="text-tl-amber hover:underline"
              >
                support@myellelab.com
              </a>
              . This Privacy Policy explains how we handle your information when you use
              MyTwinLens (&quot;the App&quot;).
            </p>

            <Section title="The Short Version">
              <div className="p-4 rounded-xl border border-tl-amber-dim bg-tl-amber-glow">
                <p className="font-semibold text-tl-amber">
                  MyElleLab, the developer of MyTwinLens, does not collect, store, or
                  transmit any personal data. Everything stays on your devices.
                </p>
              </div>
              <p className="text-tl-muted leading-relaxed">
                Our App Store privacy label is{" "}
                <strong className="text-tl-text">&quot;Data Not Collected&quot;</strong>.
              </p>
            </Section>

            <Section title="No Data Collection">
              <p className="text-tl-muted leading-relaxed">
                MyElleLab does not collect any personal data through MyTwinLens.
                Specifically:
              </p>
              <ul className="mt-3 space-y-2 text-tl-muted">
                <ListItem>No analytics or usage tracking</ListItem>
                <ListItem>No advertising identifiers or tracking pixels</ListItem>
                <ListItem>No cookies</ListItem>
                <ListItem>No accounts, sign-ups, or email collection</ListItem>
                <ListItem>No crash reporting that transmits data externally</ListItem>
                <ListItem>No data is shared with third parties for advertising or marketing</ListItem>
              </ul>
            </Section>

            <Section title="No Internet Required">
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens does not require an internet connection to function. All
                communication between devices happens over local Wi-Fi and Bluetooth
                using Apple&apos;s Multipeer Connectivity framework. No data leaves your
                local network.
              </p>
            </Section>

            <Section title="Photos">
              <p className="text-tl-muted leading-relaxed">
                Photos captured with MyTwinLens are saved directly to your device&apos;s
                local photo library. They are never uploaded, transmitted to any server,
                or stored by the App outside of your Camera Roll.
              </p>
            </Section>

            <Section title="Device Permissions">
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens requests the following permissions, each used solely for its
                stated purpose:
              </p>
              <ul className="mt-3 space-y-2 text-tl-muted">
                <ListItem>
                  <strong className="text-tl-text">Camera</strong> &mdash; used to capture
                  photos and stream the live viewfinder between paired devices
                </ListItem>
                <ListItem>
                  <strong className="text-tl-text">Local Network</strong> &mdash; used to
                  connect two devices via Multipeer Connectivity
                </ListItem>
                <ListItem>
                  <strong className="text-tl-text">Photo Library</strong> &mdash; used to
                  save captured photos to your Camera Roll
                </ListItem>
              </ul>
            </Section>

            <Section title="RevenueCat (Subscription Management)">
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens uses RevenueCat to manage subscriptions.
                RevenueCat processes subscription purchase data provided by Apple to
                validate and manage your subscription status. This is the only
                third-party SDK integrated in the App.
              </p>
              <p className="mt-3 text-tl-muted leading-relaxed">
                RevenueCat does not receive any personal data beyond what Apple provides
                for subscription management (e.g., anonymous transaction identifiers).
                No names, emails, or device identifiers are shared.
              </p>
              <p className="mt-3 text-tl-muted leading-relaxed">
                For details on how RevenueCat handles data, see their{" "}
                <a
                  href="https://www.revenuecat.com/privacy"
                  className="text-tl-amber hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="Network Communication">
              <p className="text-tl-muted leading-relaxed">
                MyTwinLens connects two iPhones directly over Wi-Fi and Bluetooth
                using Apple&apos;s Multipeer Connectivity framework. The live video
                stream and photo data travel directly between your two devices.
                No data passes through any external server.
              </p>
            </Section>

            <Section title="Your Rights (GDPR)">
              <p className="text-tl-muted leading-relaxed mb-4">
                Under the General Data Protection Regulation, you have the right to:
              </p>
              <ul className="space-y-3 text-tl-muted">
                <ListItem>
                  <strong className="text-tl-text">Access</strong> your data &mdash;
                  all preferences are visible in the app settings
                </ListItem>
                <ListItem>
                  <strong className="text-tl-text">Delete</strong> your data &mdash;
                  uninstalling the app removes all stored preferences
                </ListItem>
              </ul>
              <p className="mt-4 text-tl-muted leading-relaxed">
                Since all data is stored exclusively on your devices, exercising
                these rights requires no request to us &mdash; you have full control.
              </p>
            </Section>

            <Section title="Children's Privacy">
              <p className="text-tl-muted leading-relaxed">
                MyElleLab does not knowingly collect data from children under 16
                through MyTwinLens.
                Since no personal information is collected from any user, the
                App is compliant with COPPA and GDPR age requirements.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p className="text-tl-muted leading-relaxed">
                If we update this Privacy Policy, we will post the revised version on
                this page with an updated date.
              </p>
            </Section>

            <Section title="Contact">
              <p className="text-tl-muted leading-relaxed">
                For privacy questions or concerns:{" "}
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
