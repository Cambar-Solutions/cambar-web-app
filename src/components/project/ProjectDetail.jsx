import { useEffect, useState } from "react";
import { Avatar } from "../ui/Avatar";
import { Button } from "../ui/Button";

export function ProjectDetail({ project, onClose }) {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    // Inicia la animación de entrada
    setAnimate(true);
  }, []);

  // Al cerrar, primero se invierte la animación y luego se llama a onClose
  const handleClose = (e) => {
    e.stopPropagation();
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  // Evita que los clics dentro del detalle propaguen el evento de cierre
  const handleCardClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
        animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <div
        onClick={handleCardClick}
        className="relative w-[90vw] h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Sección superior: imagen con overlay */}
        <div className="relative w-full h-2/5">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover"
            view-transition-name={`project-image-${project.id}`}
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
        <div className="p-6 h-3/5 overflow-auto text-gray-700">
          <p className="text-md leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
          {/* Botón de cerrar pequeño */}
          <Button
            onClick={handleClose}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 text-xs rounded-full"
          >
            ✖
          </Button>
        </div>
      </div>
    </div>
  );
}
