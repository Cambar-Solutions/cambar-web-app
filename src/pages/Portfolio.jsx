import { useRef, useState } from "react";
import { ProjectList } from "../components/project/ProjectList";
import { ProjectDetail } from "../components/project/ProjectDetail";
import { TeamSection } from "../components/team/TeamSection";
import { useProjects } from "../hooks/useProjects";
import { useTeam } from "../hooks/useTeam";

export default function Portfolio() {
  const projects = useProjects();
  const team = useTeam();
  const [selectedProject, setSelectedProject] = useState(null);

  // Referencia al portafolio
  const portfolioRef = useRef(null);

  const handleScrollToProjects = () => {
    if (portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">
      {/* Sección Hero */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight select-none">
          {"cambar".split("").map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-transform duration-300 hover:scale-125"
            >
              {letter}
            </span>
          ))}
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mt-4">
          Sitio en desarrollo...Jenkins
        </p>
        {/* Botón que lleva a la sección de proyectos */}
        <button
          className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium hover:scale-105 transition"
          onClick={handleScrollToProjects}
        >
          🔗 Nuestros proyectos
        </button>
      </div>

      {/* Contenido del Portafolio */}
      <div ref={portfolioRef} className="p-8 max-w-5xl mx-auto relative">
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
    </div>
  );
}
