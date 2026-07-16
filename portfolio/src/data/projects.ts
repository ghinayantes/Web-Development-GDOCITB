import type { ProjectCardProps } from '../types/project';

export const initialProjects: ProjectCardProps[] = [
  {
    title: 'Module 1 — Web Foundations & the AI-Augmented Development Mindset',
    description:
      'Structuring content the way browsers — and screen readers — expect it.',
    techStack: ['HTML', 'CSS'],
    status: 'done',
  },
  {
    title: 'Module 2 — TypeScript & Component-Driven UI with React',
    description:
      'Rebuilding the static landing page as a typed, multi-page React SPA with client-side routing.',
    techStack: ['React', 'TypeScript', 'React Router', 'Zustand', 'Tailwind CSS'],
    status: 'in_progress',
  },
];
