export function ProjectCard({ project, onClick }) {
  const handleClick = () => {
    document.startViewTransition(() => onClick(project));
  };

  return (
    <div
      className="relative w-full max-w-sm h-[400px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
      onClick={handleClick}
    >
      {/* Imagen de fondo */}
      <img
        src={project.image}
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro en la parte inferior */}
      <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Contenido de la Card */}
      <div className="absolute bottom-4 left-4 text-white">
        <p className="text-sm opacity-80">Más información</p>
        <h3 className="text-lg font-bold">{project.name}</h3>
      </div>
    </div>
  );
}
