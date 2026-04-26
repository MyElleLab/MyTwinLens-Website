const plans = [
  {
    name: "Monthly",
    price: "$4.99",
    period: "month",
    description: "Full access. 7-day free trial.",
    features: [
      "Live HD viewfinder",
      "Remote shutter, zoom, flip & timer",
      "Full-quality photo capture",
      "Photo preview on Mirror",
      "Save to Lens, Mirror, or both",
    ],
    highlight: false,
  },
  {
    name: "Yearly",
    price: "$39.99",
    period: "year",
    description: "Everything in Monthly. 7-day free trial. Save 33%.",
    features: [
      "Live HD viewfinder",
      "Remote shutter, zoom, flip & timer",
      "Full-quality photo capture",
      "Photo preview on Mirror",
      "Save to Lens, Mirror, or both",
    ],
    highlight: true,
    badge: "SAVE 33%",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-tl-text">
            Simple pricing
          </h2>
          <p className="text-tl-muted max-w-xl mx-auto">
            Start with a 7-day free trial. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-xl border ${
                plan.highlight
                  ? "border-tl-amber bg-tl-surface shadow-[0_0_40px_rgba(245,158,11,0.1)]"
                  : "border-tl-border bg-tl-surface"
              } flex flex-col`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-bold bg-tl-amber text-tl-bg rounded-full mono-heading tracking-widest">
                  {plan.badge}
                </span>
              )}

              <div className="mb-6 space-y-2">
                <h3 className="mono-heading text-sm text-tl-muted tracking-widest">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-tl-text">
                    {plan.price}
                  </span>
                  <span className="text-sm text-tl-muted">/{plan.period}</span>
                </div>
                <p className="text-sm text-tl-muted">{plan.description}</p>
              </div>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-tl-amber flex-shrink-0" />
                    <span className="text-tl-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://apps.apple.com/app/id6762047518"
                className={`mt-6 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-tl-amber text-tl-bg hover:bg-[#D97706]"
                    : "border border-tl-border text-tl-text hover:border-tl-amber hover:text-tl-amber"
                }`}
              >
                <AppleIcon />
                Download on the App Store
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-tl-muted mt-8">
          Payment is charged to your Apple ID. Subscriptions auto-renew unless
          cancelled at least 24 hours before the end of the current period.
        </p>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 384 512"
      fill="currentColor"
      className="w-4 h-4"
      aria-hidden="true"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
