import { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Theme = 'dark' | 'light';

export function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dark');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle dark and light mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs transition-colors"
      style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
    >
      <span
        className="relative inline-block h-4 w-7 flex-shrink-0 rounded-full"
        style={{ background: 'var(--border)' }}
      >
        <span
          className="absolute top-0.5 left-0.5 h-3 w-3 rounded-full transition-transform duration-300"
          style={{
            background: 'var(--accent)',
            transform: theme === 'light' ? 'translateX(12px)' : 'translateX(0)',
          }}
        />
      </span>
      <span className="hidden sm:inline">{theme}</span>
    </button>
  );
}
