export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-tl-text leading-[1.1]">
          <span className="block">You. In the shot.</span>
          <span
            className="block text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #F59E0B 0%, #D97706 60%, #B45309 100%)",
            }}
          >
            Finally.
          </span>
        </h1>

        {/* Subheadline */}
        <div className="flex flex-col items-center gap-2 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          <p className="text-tl-muted">
            Your second iPhone becomes a live viewfinder and remote shutter.
          </p>
          <p className="text-tl-text font-bold">
            No internet needed to shoot. Your iPhones connect directly over Wi-Fi and Bluetooth.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apps.apple.com/app/id6762047518"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tl-amber text-tl-bg font-semibold text-sm hover:bg-[#D97706] transition-colors"
            aria-label="Download MyTwinLens on the App Store"
          >
            <AppleIcon />
            Download on the App Store
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-tl-muted hover:text-tl-text transition-colors"
          >
            See how it works ↓
          </a>
        </div>

        {/* Hero image */}
        <div className="mt-12 w-full max-w-3xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Hero_v2.png"
            alt="MyTwinLens — one iPhone as the Lens, one as the Mirror, capturing the same shot"
            className="mx-auto w-full h-auto rounded-2xl border border-tl-border shadow-[0_8px_40px_rgba(245,158,11,0.08)]"
          />
          <p className="mt-4 text-xs text-tl-muted mono-heading tracking-widest">
            LENS + MIRROR. TWO PHONES. ONE SHOT.
          </p>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
