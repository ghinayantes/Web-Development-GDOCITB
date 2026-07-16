import { ProjectCard } from '../components/ProjectCard';
import { useProjectsStore } from '../store/useProjectsStore';

export function ProjectsPage() {
  const projects = useProjectsStore((state) => state.projects);

  return (
    <section className="border-b py-24" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="mb-2 font-mono text-sm" style={{ color: 'var(--accent)' }}>
          $ cat learning-queue.txt
        </p>
        <h2 className="mb-4 font-mono text-3xl md:text-4xl">Learning Queue</h2>
        <p className="mb-10 max-w-[56ch]" style={{ color: 'var(--text-dim)' }}>
          Technologies and modules queued up so far — from static fundamentals to a typed,
          component-driven React SPA with global state.
        </p>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
