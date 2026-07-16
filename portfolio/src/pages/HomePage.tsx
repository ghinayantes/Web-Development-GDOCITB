import { Link } from 'react-router-dom';
import { TerminalCard } from '../components/TerminalCard';
import { useProjectsStore } from '../store/useProjectsStore';

export function HomePage() {
  // Selecting just `projects` from the Zustand store — HomePage doesn't
  // need the mutator actions, so it only re-renders when the list itself
  // changes, not when e.g. a status is toggled elsewhere in a way that
  // wouldn't affect this slice.
  const projects = useProjectsStore((state) => state.projects);
  const current = projects.find((p) => p.status === 'in_progress');

  return (
    <section className="border-b py-24" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-sm" style={{ color: 'var(--accent)' }}>
            $ whoami
          </p>
          <h1 className="animate-fade-up mb-2 font-mono text-4xl leading-tight font-bold tracking-tight md:text-6xl">
            Ghina Emelia Yantes
          </h1>
          <p
            className="animate-fade-up mb-6 text-lg"
            style={{ color: 'var(--text-dim)', animationDelay: '100ms' }}
          >
            Software Engineer & Game Developer <span style={{ color: 'var(--accent)' }}>/</span> AI-Augmented
            Builder
          </p>
          <p
            className="animate-fade-up mb-10 max-w-[42ch]"
            style={{ color: 'var(--text-dim)', animationDelay: '200ms' }}
          >
            Computer Science student learning to build products at the intersection of solid web
            fundamentals and AI-assisted workflows. Now converting the static Module 1 site into a
            typed, routed React SPA.
          </p>
          <div className="animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: '300ms' }}>
            <Link
              to="/projects"
              className="rounded px-5 py-3 font-mono text-sm font-bold transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--accent)', color: 'var(--bg)' }}
            >
              See what I'm learning
            </Link>
            <Link
              to="/about"
              className="rounded border px-5 py-3 font-mono text-sm transition-transform hover:-translate-y-0.5"
              style={{ borderColor: 'var(--border)' }}
            >
              About me
            </Link>
          </div>
        </div>

        <TerminalCard
          lines={[
            `module: 02 — typescript & component-driven ui`,
            `status: ${current ? current.status : 'in_progress'}`,
            `stack: react · typescript · router · zustand`,
            `next: state management deep-dive`,
          ]}
        />
      </div>
    </section>
  );
}
