import { useRef, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useProjects } from "../hooks/useProjects";
import { useTeam } from "../hooks/useTeam";
import logo from "../assets/images/logo.png";

// Importar componentes de forma perezosa correctamente
const ProjectList = lazy(() => import("../components/project/ProjectList"));
const ProjectDetail = lazy(() => import("../components/project/ProjectDetail"));
const TeamSection = lazy(() => import("../components/team/TeamSection"));
const BentoGrid = lazy(() => import("../components/ui/BentoGrid"));
const ProcessSteps = lazy(() => import("../components/process/ProcessSteps"));
const ScrollIndicator = lazy(() => import("../components/ui/ScrollIndicator"));
const InteractiveFolder = lazy(() => import("../components/ui/InteractiveFolder"));

// Componente de carga para secciones internas
const SectionLoading = () => (
  <div className="flex items-center justify-center py-16">
    <div className="animate-pulse flex flex-col items-center">
      <div className="h-8 w-8 bg-blue-500 rounded-full mb-2"></div>
      <div className="h-3 w-24 bg-blue-400 rounded"></div>
    </div>
  </div>
);

export default function Portfolio() {
  const projects = useProjects();
  const team = useTeam();
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Referencias para scroll
  const portfolioRef = useRef(null);
  const processRef = useRef(null);
  const teamRef = useRef(null);
  
  // Funciones para scroll
  const handleScrollToProjects = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToProcess = () => {
    processRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToTeam = () => {
    teamRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <img src={logo} alt="Cambar Logo" className="h-8" />
          </a>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToProcess}>Proceso</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToProjects}>Proyectos</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={handleScrollToTeam}>Equipo</a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
          </div>
          
          <a 
            href="#contacto"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
          >
            Contactar
          </a>
        </nav>
      </header>
      
      {/* Sección Hero */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center pt-16 px-6 md:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-blue-900/30 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-center leading-tight mb-3 mt-4"
          >
            CAMBAR
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-center mb-8"
          >
            Desarrollamos soluciones <span className="text-blue-500">de software a la medida</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <Suspense fallback={<SectionLoading />}>
              <InteractiveFolder />
            </Suspense>
            
            {/* Scroll Indicator con más espacio */}
            <div className="mt-4">
              <Suspense fallback={<div className="h-10"></div>}>
                <ScrollIndicator />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Efecto de luz/resplandor */}
      <div className="w-full h-64 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-blue-500/30 via-blue-700/20 to-transparent top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      </div>

      {/* Sección de Proceso - similar a Mercado Libre */}
      <div className="py-24 px-6 md:px-12 bg-gradient-to-b from-blue-900/30 via-black to-black -mt-64 pt-64 relative z-0">
        <motion.div 
          ref={processRef} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Nuestro proceso de desarrollo
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Seguimos un proceso estructurado pero flexible para garantizar el éxito de tu proyecto, adaptándonos a tus necesidades y objetivos.  
          </motion.p>
          
          <Suspense fallback={<SectionLoading />}>
            <ProcessSteps />
          </Suspense>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-24 text-center pt-4"
          >
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all hover:scale-105 relative z-20">
              Comenzar proyecto
            </button>
          </motion.div>
        </div>
      </motion.div>
      </div>

      {/* Contenido del Portafolio */}
      <div className="py-24 px-6 md:px-12 bg-gradient-to-b from-black via-black to-blue-900/30">
        <motion.div 
          ref={portfolioRef} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            Proyectos destacados
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Nos enorgullecemos de ofrecer resultados excepcionales para startups y fundadores. A continuación, algunos proyectos que nos complace mostrar.
          </motion.p>
          <Suspense fallback={<SectionLoading />}>
            <ProjectList projects={projects} onSelect={setSelectedProject} />
          </Suspense>
          
          {/* Renderizamos el detalle del proyecto como un portal fuera del flujo normal */}
          {selectedProject && (
            <Suspense fallback={<SectionLoading />}>
              <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
            </Suspense>
          )}
        </div>
      </motion.div>
      </div>
      
      {/* Sección de Equipo */}
      <div className="py-24 px-6 md:px-12 bg-gradient-to-b from-blue-900/30 via-black to-black">
        <motion.div 
          ref={teamRef} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            Nuestro equipo
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-16"
          >
            Contamos con profesionales apasionados y experimentados en desarrollo de software, diseño UX/UI y gestión de proyectos.
          </motion.p>
          <Suspense fallback={<SectionLoading />}>
            <TeamSection team={team} />
          </Suspense>
          <Suspense fallback={<SectionLoading />}>
            <BentoGrid />
          </Suspense>
        </div>
      </motion.div>
      </div>
      
      {/* Sección de Contacto */}
      <motion.div 
        id="contacto" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-24 px-6 md:px-12"
      >
        <div className="max-w-3xl mx-auto bg-[#131922] p-8 md:p-12 rounded-2xl">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            Hablemos de tu proyecto
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-300 text-center mb-10"
          >
            ¿Listo para dar el siguiente paso? Contáctanos para discutir cómo podemos ayudarte a convertir tu idea en realidad.
          </motion.p>
          
          <motion.form 
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input type="text" className="w-full p-3 bg-[#0D1117] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 bg-[#0D1117] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <label className="block text-sm font-medium mb-2">Mensaje</label>
              <textarea rows="4" className="w-full p-3 bg-[#0D1117] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"></textarea>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="text-center"
            >
              <button type="submit" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-medium transition-all hover:scale-105 w-full md:w-auto">
                Enviar mensaje
              </button>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-[#0A0E14] border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="Cambar Logo" className="h-8 mb-4" />
            <p className="text-gray-400 text-sm"> 2023 Cambar Solutions. Todos los derechos reservados.</p>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
