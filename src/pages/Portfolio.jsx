import { useState } from "react";
import { ProjectList } from "../components/project/ProjectList";
import { ProjectDetail } from "../components/project/ProjectDetail";
import { TeamSection } from "../components/team/TeamSection";
import { useProjects } from "../hooks/useProjects";
import { useTeam } from "../hooks/useTeam";

export default function Portfolio() {
  const projects = useProjects();
  const team = useTeam();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="p-8 max-w-5xl mx-auto relative">
      {/* Si hay un proyecto seleccionado, muestra el detalle */}
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Portafolio de Proyectos</h1>
          <ProjectList projects={projects} onSelect={setSelectedProject} />
          <TeamSection team={team} />
        </>
      )}
    </div>
  );
}
