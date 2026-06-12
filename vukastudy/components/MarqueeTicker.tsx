const subjects = [
  "Mathematics",
  "Physical Sciences",
  "Life Sciences",
  "Accounting",
  "Business Studies",
  "History",
  "Geography",
  "English HL",
  "Afrikaans FAL",
  "Economics",
  "Life Orientation",
  "Agricultural Sciences",
];

export default function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden border-t border-white/5 bg-white/[0.02] py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center gap-8 px-4">
            {subjects.map((subject) => (
              <span
                key={`${group}-${subject}`}
                className="flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.15em] text-white/40"
              >
                {subject}
                <span className="text-vuka-red">•</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
