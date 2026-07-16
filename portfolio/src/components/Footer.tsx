const links = [
  { label: 'Email', value: 'ghinayantes2006@gmail.com', href: 'mailto:ghinayantes2006@gmail.com' },
  { label: 'GitHub', value: 'github.com/ghinayantes', href: 'https://github.com/ghinayantes' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ghina-emelia-yantes',
    href: 'https://www.linkedin.com/in/ghina-emelia-yantes-3162592a7/',
  },
];

export function Footer() {
  return (
    <footer id="contact" className="py-24" style={{ background: 'var(--bg-alt)' }}>
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="mb-2 font-mono text-sm" style={{ color: 'var(--accent)' }}>
          contact
        </p>
        <h2 className="mb-10 font-mono text-3xl md:text-4xl">Let's build something.</h2>

        <ul className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex flex-col gap-1 rounded-lg border p-4 transition-all hover:-translate-y-0.5"
                style={{ borderColor: 'var(--border)' }}
              >
                <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>
                  {link.label}
                </span>
                <span className="text-sm" style={{ color: 'var(--text-dim)' }}>
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="border-t pt-6 text-sm" style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} GY.
        </p>
      </div>
    </footer>
  );
}
