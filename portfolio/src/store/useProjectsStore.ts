import { create } from 'zustand';
import type { ProjectCardProps } from '../types/project';
import { initialProjects } from '../data/projects';

interface ProjectsState {
  projects: ProjectCardProps[];
  addProject: (project: ProjectCardProps) => void;
  removeProject: (title: string) => void;
  setStatus: (title: string, status: ProjectCardProps['status']) => void;
}

/**
 * Global projects store (Bonus 3).
 *
 * Why Zustand over plain useState here:
 * - The projects list is needed by both ProjectsPage (renders the grid)
 *   and HomePage (renders a "currently in progress" preview in the
 *   terminal card). With useState that state would have to live in a
 *   common ancestor and be threaded down through props, or duplicated
 *   in each page and kept in sync manually.
 * - Zustand keeps the list in one place outside the component tree.
 *   Any component can read from it or update it (e.g. setStatus) without
 *   prop drilling, and without wrapping the app in a Context provider.
 * - Unlike useState, updates here don't force a re-render of components
 *   that don't subscribe to the changed slice of state, since Zustand
 *   lets you select just the piece you need (see the pages for usage).
 * - The trade-off: it's an extra dependency and a bit more indirection
 *   for what is, right now, a small and simple list. For a single page
 *   with no shared consumers, plain useState would have been enough.
 */
export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: initialProjects,
  addProject: (project) =>
    set((state) => ({ projects: [...state.projects, project] })),
  removeProject: (title) =>
    set((state) => ({
      projects: state.projects.filter((p) => p.title !== title),
    })),
  setStatus: (title, status) =>
    set((state) => ({
      projects: state.projects.map((p) =>
        p.title === title ? { ...p, status } : p,
      ),
    })),
}));
