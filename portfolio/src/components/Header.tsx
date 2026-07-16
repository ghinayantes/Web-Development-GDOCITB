import { NavLink } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'home' },
  { to: '/projects', label: 'learning-queue' },
  { to: '/about', label: 'about' },
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg) 88%, transparent)' }}
    >
      <div
        className="mx-auto flex max-w-[1120px] items-center justify-between gap-6 px-6 py-4"
      >
        <NavLink to="/" className="flex items-center gap-2 font-mono text-base font-bold whitespace-nowrap">
          <span style={{ color: 'var(--accent)' }}>&lt;/&gt;</span>
          <span>
            GY<span style={{ color: 'var(--accent)' }}>.dev</span>
          </span>
        </NavLink>

        <nav aria-label="Primary navigation">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-mono text-sm transition-colors ${isActive ? '' : ''}`
                  }
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--text)' : 'var(--text-dim)',
                  })}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
