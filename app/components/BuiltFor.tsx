const personas = [
  {
    icon: <PlaneIcon />,
    title: "Solo Travelers",
    description: "Be in your own travel photos. No more asking strangers or setting blind timers.",
  },
  {
    icon: <VideoIcon />,
    title: "Content Creators",
    description: "Shoot without a crew. Frame yourself perfectly from any distance.",
  },
  {
    icon: <HomeIcon />,
    title: "Real Estate Pros",
    description: "Capture exteriors from the perfect angle across the street.",
  },
  {
    icon: <FamilyIcon />,
    title: "Families",
    description: "Everyone in the group shot. No one left behind the camera.",
  },
];

export default function BuiltFor() {
  return (
    <section className="px-6 py-24 bg-tl-surface/30">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-tl-text">
            Built for
          </h2>
          <p className="text-tl-muted max-w-xl mx-auto">
            Anyone with two iPhones and no one to hold the camera.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {personas.map((persona, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-tl-surface border border-tl-border text-center space-y-3"
            >
              <div className="flex justify-center">{persona.icon}</div>
              <h3 className="font-semibold text-tl-text">{persona.title}</h3>
              <p className="text-sm text-tl-muted leading-relaxed">
                {persona.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlaneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function FamilyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
