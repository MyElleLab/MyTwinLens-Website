const steps = [
  {
    number: "01",
    title: "Place Your Lens",
    description:
      "Put one iPhone at a distance — on a rock, a shelf, a ledge. That device becomes your Lens.",
  },
  {
    number: "02",
    title: "Open Your Mirror",
    description:
      "Open MyTwinLens on your second iPhone. The two phones pair directly over Wi-Fi and Bluetooth — no internet needed.",
  },
  {
    number: "03",
    title: "Control Everything From Your Mirror",
    description:
      "Zoom, flip the camera, set a timer, and fire the shutter — all from the phone in your hand. The Lens just listens.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 bg-tl-surface/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-tl-text">
            How it works
          </h2>
          <p className="text-tl-muted max-w-xl mx-auto">
            Three steps. Set up in 15 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 20%, #F59E0B 50%, rgba(255,255,255,0.08) 80%, transparent)",
            }}
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center gap-4">
              {/* Step number badge */}
              <div className="relative z-10 w-20 h-20 rounded-2xl bg-tl-surface border border-tl-border flex flex-col items-center justify-center">
                <span className="text-2xl text-tl-amber">{StepIcons[i]}</span>
                <span className="text-[10px] font-mono text-tl-amber-dim mt-0.5">
                  {step.number}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-tl-text">{step.title}</h3>
                <p className="text-sm text-tl-muted leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const StepIcons = [
  <svg key="place" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>,
  <svg key="connect" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>,
  <svg key="shoot" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
  </svg>,
];
