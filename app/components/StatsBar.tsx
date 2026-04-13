const stats = [
  { value: "<200ms", label: "latency" },
  { value: "30", label: "FPS streaming" },
  { value: "0", label: "data collected" },
];

export default function StatsBar() {
  return (
    <section className="px-6 py-16 border-y border-tl-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <div
                className="text-5xl font-bold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-tl-muted uppercase tracking-widest mono-heading">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
