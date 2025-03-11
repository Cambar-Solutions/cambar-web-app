import { ProjectCard } from "./ProjectCard";

export function ProjectList({ projects, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={onSelect} />
      ))}
    </div>
  );
}
