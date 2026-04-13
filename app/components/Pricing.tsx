const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start shooting.",
    features: [
      "Core pairing",
      "Live viewfinder",
      "Single-tap shutter",
      "No time limits",
      "No ads",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "lifetime",
    description: "For photographers who want more.",
    features: [
      "4K stream",
      "Burst mode",
      "Composition grid",
      "Extended range",
      "Session memory",
    ],
    highlight: true,
    badge: "BEST VALUE",
  },
  {
    name: "Creator Bundle",
    price: "$14.99",
    period: "lifetime",
    description: "The full toolkit for content creators.",
    features: [
      "Everything in Pro",
      "Multi-angle capture",
      "Timer sequences",
      "Future AI composition",
      "Priority features",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-tl-text">
            One price. Yours forever.
          </h2>
          <p className="text-tl-muted max-w-xl mx-auto">
            No subscriptions. No recurring fees. Pay once, use forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-xl border ${
                tier.highlight
                  ? "border-tl-amber bg-tl-surface shadow-[0_0_40px_rgba(245,158,11,0.1)]"
                  : "border-tl-border bg-tl-surface"
              } flex flex-col`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold bg-tl-amber text-tl-bg rounded-full mono-heading tracking-widest">
                  {tier.badge}
                </span>
              )}

              <div className="mb-6 space-y-2">
                <h3 className="mono-heading text-sm text-tl-muted tracking-widest">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-tl-text">
                    {tier.price}
                  </span>
                  <span className="text-sm text-tl-muted">/{tier.period}</span>
                </div>
                <p className="text-sm text-tl-muted">{tier.description}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-tl-amber flex-shrink-0" />
                    <span className="text-tl-muted">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
