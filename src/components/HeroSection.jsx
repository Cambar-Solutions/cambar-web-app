export function HeroSection() {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#0D0D0D] text-white">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight select-none">
          <span className="hover:scale-110 transition-transform">s</span>
          <span className="hover:scale-110 transition-transform">t</span>
          <span className="hover:scale-110 transition-transform">e</span>
          <span className="hover:scale-110 transition-transform">p</span>
          <span className="hover:scale-110 transition-transform">b</span>
          <span className="hover:scale-110 transition-transform">r</span>
          <span className="hover:scale-110 transition-transform">o</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mt-4">
          Sitio en desarrollo 
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full text-lg font-medium hover:scale-105 transition">
          🔗 Nuestras apps
        </button>
      </div>
    );
  }
  