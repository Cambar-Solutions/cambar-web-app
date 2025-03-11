import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { Avatar } from "../ui/Avatar";

export function ProjectDetail({ project, onClose }) {
  const [animate, setAnimate] = useState(false);

  // Inicia la animación cuando el componente se monta
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-xs transition-all duration-500 ${
        animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
    >
      <div className="relative w-full max-w-lg h-[500px] bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Imagen de fondo con overlay */}
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
        <div className="p-6">
          <p className="text-gray-700 text-md leading-relaxed">{project.description}</p>
          <Button onClick={onClose} className="mt-6 w-full bg-red-500 hover:bg-red-600">
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
