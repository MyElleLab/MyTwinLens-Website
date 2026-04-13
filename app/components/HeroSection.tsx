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
            No internet. No tripod timer. No asking strangers.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apps.apple.com/app/id6762047518"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tl-amber text-tl-bg font-semibold text-sm hover:bg-[#D97706] transition-colors"
            aria-label="Download TwinLens on the App Store"
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

        {/* Dual phone mockup */}
        <div className="mt-12 w-full max-w-3xl mx-auto">
          <DualPhoneMockup />
          <p className="mt-4 text-xs text-tl-muted mono-heading tracking-widest">
            LENS + MIRROR. TWO PHONES. ONE SHOT.
          </p>
        </div>
      </div>
    </section>
  );
}

function DualPhoneMockup() {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-10">
      {/* Lens phone */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="rounded-[2rem] border-[3px] border-tl-hint overflow-hidden w-[140px] md:w-[180px] bg-tl-surface flex flex-col items-center justify-center"
          style={{ height: 280, aspectRatio: "9/19.5" }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-4 space-y-3">
            <CameraIcon />
            <span className="mono-heading text-[10px] text-tl-muted tracking-widest">LENS</span>
            <div className="w-full h-px bg-tl-border" />
            <div className="w-full flex-1 rounded-lg bg-gradient-to-br from-tl-amber-glow to-transparent flex items-center justify-center">
              <span className="text-xs text-tl-hint">Live camera feed</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-tl-amber animate-amber-pulse" />
              <span className="text-[9px] text-tl-amber mono-heading">STREAMING</span>
            </div>
          </div>
        </div>
        <span className="text-xs text-tl-muted mono-heading tracking-widest">LENS DEVICE</span>
      </div>

      {/* Connection indicator */}
      <div className="flex flex-col items-center gap-1">
        <WifiIcon />
        <span className="text-[8px] text-tl-hint mono-heading">DIRECT</span>
      </div>

      {/* Mirror phone */}
      <div className="flex flex-col items-center gap-3">
        <div
          className="rounded-[2rem] border-[3px] border-tl-amber overflow-hidden w-[140px] md:w-[180px] bg-tl-surface flex flex-col items-center justify-center"
          style={{ height: 280, aspectRatio: "9/19.5" }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-4 space-y-3">
            <MirrorIcon />
            <span className="mono-heading text-[10px] text-tl-amber tracking-widest">MIRROR</span>
            <div className="w-full h-px bg-tl-border" />
            <div className="w-full flex-1 rounded-lg bg-gradient-to-br from-tl-amber-glow to-transparent flex items-center justify-center">
              <span className="text-xs text-tl-hint">Live viewfinder</span>
            </div>
            {/* Shutter button */}
            <div className="w-12 h-12 rounded-full border-[3px] border-tl-text flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-tl-text" />
            </div>
          </div>
        </div>
        <span className="text-xs text-tl-amber mono-heading tracking-widest">IN YOUR HANDS</span>
      </div>
    </div>
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

function CameraIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function MirrorIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}
