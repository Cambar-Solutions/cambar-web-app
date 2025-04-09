import { ProjectCard } from "./ProjectCard";

// Cambiamos a exportación por defecto para que funcione con React.lazy
function ProjectList({ projects, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={onSelect} />
      ))}
    </div>
  );
}

export default ProjectList;
// Mantenemos la exportación nombrada para compatibilidad con código existente
export { ProjectList };
