import { TiltedCard } from "../ui/TiltedCard";
import { memo } from "react";

// Usamos memo para evitar re-renderizaciones innecesarias
export const ProjectCard = memo(function ProjectCard({ project, onClick }) {
  const handleClick = (e) => {
    // Guardamos la posición de scroll actual
    const scrollY = window.scrollY;

    if (document.startViewTransition) {
      document.startViewTransition(() => onClick(project));
    } else {
      onClick(project);
    }

    // Restauramos el scroll en el siguiente frame
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  return (
    <TiltedCard 
      className="w-full h-[350px] sm:h-[380px] lg:h-[400px] cursor-pointer" // Ancho completo y altura responsive
      glareColor="rgba(59, 130, 246, 0.5)" // Color azul para el brillo
      glareOpacity={0.3}
      scale={1.05}
      rotationIntensity={8}
      borderRadius="16px"
      key={project.id} // Aseguramos que cada tarjeta tenga una key única
    >
      <div 
        className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg flex flex-col"
        onClick={handleClick}
      >
        {/* Sección de imagen (parte superior) */}
        <div className="relative w-full h-[55%] overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy" // Carga perezosa para mejorar rendimiento
          />
          {/* Efecto de difuminado en la parte inferior de la imagen */}
          <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-b from-transparent via-[#131922]/70 to-[#131922]"></div>
        </div>

        {/* Sección de texto (parte inferior) */}
        <div className="w-full h-[45%] bg-[#131922] p-4 flex flex-col justify-center">
          <p className="text-sm text-blue-400 mb-1">Más información</p>
          <h3 className="text-base sm:text-lg font-bold text-white line-clamp-2">{project.name}</h3>
          <p className="text-xs text-gray-400 mt-2 line-clamp-2">{project.shortDescription || "Proyecto destacado de Cambar Solutions"}</p>
        </div>
      </div>
    </TiltedCard>
  );
});
