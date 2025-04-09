import { useEffect, useState } from "react";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";

function ProjectDetail({ project, onClose }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Inicia la animación de entrada
    setAnimate(true);
    
    // Aseguramos que el componente sea visible
    document.body.style.overflow = "hidden";
    
    // Limpieza al desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Al cerrar, primero se invierte la animación y luego se llama a onClose
  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 300); // Reducimos el tiempo para evitar problemas de sincronización
  };

  // Evita que los clics dentro del detalle propaguen el evento de cierre
  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  // Manejador para tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div
        onClick={handleCardClick}
        className={`relative w-[90vw] md:w-[75vw] lg:w-[55vw] h-[85vh] md:h-[80vh] bg-[#131922] text-white rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ${
          animate ? "scale-100" : "scale-95"
        }`}
      >
        {/* Sección superior: imagen con overlay */}
        <div className="relative w-full h-2/5">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-2xl font-bold">{project.name}</h2>
            <div className="flex items-center mt-2">
              <Avatar src={project.owner.avatar} alt={project.owner.name} />
              <span className="ml-2 text-lg">{project.owner.name}</span>
            </div>
          </div>
        </div>

        {/* Contenido del proyecto */}
        <div className="p-4 md:p-6 h-3/5 overflow-auto">
          <p className="text-sm md:text-md leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
          {/* Botón de cerrar pequeño */}
          <Button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white w-8 h-8 flex items-center justify-center text-sm rounded-full"
            aria-label="Cerrar"
          >
            ✖
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
export { ProjectDetail };
