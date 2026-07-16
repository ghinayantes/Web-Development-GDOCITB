export interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  status?: 'queued' | 'in_progress' | 'done';
}
