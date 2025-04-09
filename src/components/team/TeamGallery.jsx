import CircularGallery from "../../../Reactbits/CircularGallery/CircularGallery";

function TeamGallery({ members }) {
  // Preparar los datos para el componente CircularGallery
  const galleryItems = members.map(member => ({
    image: member.avatar,
    text: member.name,
    description: member.role
  }));

  return (
    <div className="w-full h-[500px] relative">
      <CircularGallery 
        items={galleryItems} 
        bend={4} 
        textColor="#ffffff" 
        borderRadius={0.05} 
        font="bold 24px Inter, sans-serif"
      />
    </div>
  );
}

export default TeamGallery;
export { TeamGallery };
