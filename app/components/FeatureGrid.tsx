const features = [
  {
    icon: <ViewfinderIcon />,
    title: "Live HD Viewfinder",
    description:
      "H.264 streaming at 30 FPS with under 200ms latency. See exactly what the Lens sees, in real time.",
  },
  {
    icon: <ShutterIcon />,
    title: "Remote Shutter",
    description:
      "One tap on the Mirror fires the camera from any distance. No delay, no guessing.",
  },
  {
    icon: <QualityIcon />,
    title: "Full-Quality Photos",
    description:
      "Full sensor HEIF capture at native resolution. The stream is for framing — your photos are full quality.",
  },
  {
    icon: <PreviewIcon />,
    title: "Photo Preview",
    description:
      "See the result on your Mirror instantly after every shot. Know whether to reshoot or move on.",
  },
  {
    icon: <TimerIcon />,
    title: "Shutter Timer",
    description:
      "3, 5, 7, or 10 second countdown. Shows on both devices so you know exactly when to pose.",
  },
  {
    icon: <SaveIcon />,
    title: "Save Anywhere",
    description:
      "Choose where photos land: Lens only, Mirror only, or both devices. Your shots, your workflow.",
  },
  {
    icon: <WifiOffIcon />,
    title: "Zero Internet",
    description:
      "Direct Wi-Fi + Bluetooth connection. No server, no cloud, no account. Your photos never leave your devices.",
  },
  {
    icon: <NoAdsIcon />,
    title: "No Ads. No Tracking.",
    description:
      "Zero analytics, zero data collection. Your photos stay on your devices. A camera tool that respects your privacy.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-tl-text">
            Everything you need. Nothing you don&apos;t.
          </h2>
          <p className="text-tl-muted max-w-xl mx-auto">
            Professional remote camera. Zero complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative p-6 rounded-xl bg-tl-surface border border-tl-border hover:border-tl-amber-dim transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)]">
      <div className="mb-4">{icon}</div>
      <h3 className="font-semibold text-tl-text mb-2">{title}</h3>
      <p className="text-sm text-tl-muted leading-relaxed">{description}</p>
    </div>
  );
}

function ViewfinderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="20" height="20" rx="2" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="5" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="1.5" fill="#F59E0B" />
    </svg>
  );
}

function ShutterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="11" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="8" stroke="#F59E0B" strokeWidth="2" />
    </svg>
  );
}

function QualityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="22" height="16" rx="2" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M8 18l4-5 3 3 5-6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PreviewIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M2 14s4-8 12-8 12 8 12 8-4 8-12 8-12-8-12-8z" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="14" cy="14" r="3" stroke="#F59E0B" strokeWidth="1.5" />
    </svg>
  );
}

function TimerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="15" r="10" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M14 9v6l4 2" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 3h6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M21 15v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="14 3 14 15" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <polyline points="10 11 14 15 18 11" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WifiOffIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M3 9a18 18 0 0 1 22 0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 13a12 12 0 0 1 14 0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 17a6 6 0 0 1 6 0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="21" r="1.5" fill="#F59E0B" />
      <line x1="4" y1="4" x2="24" y2="24" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function NoAdsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="11" stroke="#F59E0B" strokeWidth="1.5" />
      <path d="M9 14l3.5 3.5L19 10" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
