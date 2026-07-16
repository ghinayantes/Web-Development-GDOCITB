interface TerminalCardProps {
  title?: string;
  lines: string[];
}

export function TerminalCard({ title = 'status.sh', lines }: TerminalCardProps) {
  return (
    <div
      className="animate-fade-up overflow-hidden rounded-lg border"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--surface)',
        boxShadow: '0 20px 60px -20px rgba(0, 0, 0, 0.4)',
        animationDelay: '250ms',
      }}
    >
      <div
        className="flex items-center gap-1.5 border-b px-3 py-2.5"
        style={{ borderColor: 'var(--border)', background: 'var(--terminal-bar)' }}
      >
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#febc2e' }} />
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: '#28c840' }} />
        <span className="ml-2 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
          {title}
        </span>
      </div>
      <div className="p-6 font-mono text-sm">
        <p className="mb-2">
          <span className="mr-2" style={{ color: 'var(--accent)' }}>
            $
          </span>
          ./check-progress.sh
        </p>
        {lines.map((line, i) => (
          <p key={i} className="mb-2 pl-5" style={{ color: 'var(--text-dim)' }}>
            {line}
          </p>
        ))}
        <p>
          <span className="mr-2" style={{ color: 'var(--accent)' }}>
            $
          </span>
          <span
            className="inline-block h-4 w-2 align-text-bottom"
            style={{ background: 'var(--accent)', animation: 'blink 1s steps(1) infinite' }}
          />
        </p>
      </div>
    </div>
  );
}
