const experience = [
  {
    role: 'PSP Excellence',
    detail: 'Scholarship & mentorship program at ITB.',
  },
  {
    role: 'OSKM ITB 2026 Committee',
    detail: 'Freshman orientation program, contributing to session design.',
  },
];

export function AboutPage() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="mb-2 font-mono text-sm" style={{ color: 'var(--accent)' }}>
          $ cat experience.txt
        </p>
        <h2 className="mb-4 font-mono text-3xl md:text-4xl">My Experience</h2>
        <p className="mb-10 max-w-[56ch]" style={{ color: 'var(--text-dim)' }}>
          My involvement in both internal and external campus activity.
        </p>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {experience.map((item) => (
            <li
              key={item.role}
              className="rounded-lg border p-6"
              style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
            >
              <h3 className="mb-2 font-mono text-base font-semibold">{item.role}</h3>
              <p className="text-sm" style={{ color: 'var(--text-dim)' }}>
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
