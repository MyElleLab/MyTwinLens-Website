const features = [
  {
    icon: <ViewfinderIcon />,
    title: "Live HD Viewfinder",
    description:
      "See the feed and run the camera, all from the Mirror. H.264 streaming at 30 FPS with under 200ms latency.",
  },
  {
    icon: <ShutterIcon />,
    title: "Remote Shutter",
    description:
      "Fire the camera from across the room or across the street. One tap on the Mirror triggers the Lens instantly.",
  },
  {
    icon: <ZoomFlipIcon />,
    title: "Remote Controls",
    description:
      "Zoom, brightness, flip, timer, and a rule-of-thirds grid. Every control lives on the Mirror, so the Lens stays hands-free.",
  },
  {
    icon: <QualityIcon />,
    title: "Full-Quality Photos",
    description:
      "Full sensor HEIF capture at native resolution. The stream is only for framing; your saved photos are full quality.",
  },
  {
    icon: <SaveIcon />,
    title: "Review & Save",
    description:
      "See each shot on your Mirror the moment it's taken, then save to the Lens, the Mirror, or both devices.",
  },
  {
    icon: <WifiOffIcon />,
    title: "Private by Design",
    description:
      "No internet needed to shoot. No ads, no tracking, no account. Your photos never leave your devices.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

function ZoomFlipIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="7" stroke="#F59E0B" strokeWidth="1.5" />
      <line x1="9" y1="12" x2="15" y2="12" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="9" x2="12" y2="15" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="17" x2="22" y2="22" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 4l3 3-3 3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 7h-5a3 3 0 0 0-3 3" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
