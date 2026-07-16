import type { ProjectCardProps } from '../types/project';

const statusLabel: Record<NonNullable<ProjectCardProps['status']>, string> = {
  queued: '[queued]',
  in_progress: '[in_progress]',
  done: '[done]',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  liveUrl,
  status = 'queued',
}) => {
  return (
    <li
      className="rounded-lg border p-6 transition-all hover:-translate-y-1"
      style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}
    >
      <span
        className="mb-3 inline-block rounded-full px-2 py-1 font-mono text-xs"
        style={{ color: 'var(--accent)', background: 'var(--accent-soft)' }}
      >
        {statusLabel[status]}
      </span>

      <h3 className="mb-2 font-mono text-base font-semibold">{title}</h3>
      <p className="mb-4 text-sm" style={{ color: 'var(--text-dim)' }}>
        {description}
      </p>

      <ul className="mb-4 flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <li
            key={tech}
            className="rounded border px-2 py-0.5 font-mono text-xs"
            style={{ borderColor: 'var(--border)', color: 'var(--text-dim)' }}
          >
            {tech}
          </li>
        ))}
      </ul>

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs font-semibold"
          style={{ color: 'var(--accent)' }}
        >
          Live Demo →
        </a>
      )}
    </li>
  );
};
