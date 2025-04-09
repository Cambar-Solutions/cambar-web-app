import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: "Descubrimiento",
    description: "Comenzamos entendiendo tu visión y objetivos a través de discusiones detalladas e investigación.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Diseño",
    description: "Diseñamos prototipos para visualizar tu producto, incorporando feedback para perfeccionar la experiencia de usuario.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Desarrollo",
    description: "Construimos tu software asegurando flexibilidad y capacidad de respuesta a los cambios.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Lanzamiento",
    description: "Lanzamos tu producto, proporcionando soporte y orientación para garantizar una entrada exitosa al mercado.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
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

function ProcessSteps() {
  return (
    <div className="w-full pb-16"> 
      {/* Versión para móviles (vertical) */}
      <div className="md:hidden">
        <motion.div 
          variants={staggerContainer}
          className="relative"
        >
          {/* Línea vertical central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-[60%] w-1 bg-blue-600/30 rounded-full"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={step.number}
              variants={fadeInUp}
              className="relative z-10 mb-8 last:mb-0" 
            >
              <div className="flex items-start">
                {/* Círculo con número */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 z-20">
                  {step.icon}
                </div>
                
                {/* Contenido del paso */}
                <div className={`bg-[#131922] py-3 px-4 rounded-xl w-full mt-12 h-[220px] flex flex-col ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Versión para tablets (horizontal compacto) */}
      <div className="hidden md:block lg:hidden">
        <motion.div 
          variants={staggerContainer}
          className="relative flex flex-wrap justify-between"
        >
          {/* Línea horizontal central */}
          <div className="absolute top-12 left-0 w-full h-1 bg-blue-600/30 rounded-full"></div>
          
          {steps.map((step) => (
            <motion.div 
              key={step.number}
              variants={fadeInUp}
              className="relative z-10 w-1/2 px-4 mb-16" 
            >
              {/* Círculo con número */}
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 mb-4">
                {step.icon}
              </div>
              
              {/* Contenido del paso */}
              <div className="bg-[#131922] py-3 px-4 rounded-xl hover:bg-[#1a2130] transition-all duration-300 h-[220px] flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Versión para escritorio (horizontal completo) */}
      <div className="hidden lg:block">
        <motion.div 
          variants={staggerContainer}
          className="relative flex justify-between"
        >
          {/* Línea horizontal central */}
          <div className="absolute top-12 left-0 w-full h-1 bg-blue-600/30 rounded-full"></div>
          
          {steps.map((step) => (
            <motion.div 
              key={step.number}
              variants={fadeInUp}
              className="relative z-10 w-full px-4 first:pl-0 last:pr-0"
            >
              {/* Círculo con número */}
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 mb-4">
                {step.icon}
              </div>
              
              {/* Contenido del paso */}
              <div className="bg-[#131922] py-3 px-4 rounded-xl hover:bg-[#1a2130] transition-all duration-300 h-[220px] flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default ProcessSteps;
export { ProcessSteps };
