import { motion } from 'framer-motion';

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

function BentoGrid() {
  return (
    <div className="w-full py-16">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Por qué elegirnos
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {/* Tarjeta principal grande */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="col-span-1 md:col-span-2 row-span-2 bg-gradient-to-br from-blue-600 to-blue-900 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Experiencia y Calidad</h3>
            <p className="text-white/80 mb-6 max-w-lg">Con más de 5 años de experiencia en desarrollo de software, nuestro equipo ha perfeccionado el arte de crear soluciones digitales de alta calidad que satisfacen las necesidades específicas de cada cliente.</p>
            <div className="flex items-center space-x-2">
              <span className="text-white/80">Descubre más</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl transform translate-x-10 translate-y-10"></div>
        </motion.div>
        
        {/* Tarjeta de tecnologías */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-[#131922] rounded-3xl p-6 group hover:bg-[#1a2130] transition-colors duration-300"
        >
          <div className="mb-4 p-3 bg-blue-600/20 rounded-xl w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Tecnologías Modernas</h3>
          <p className="text-gray-400">Utilizamos las últimas tecnologías y frameworks para crear soluciones escalables y de alto rendimiento.</p>
        </motion.div>
        
        {/* Tarjeta de metodología */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-[#131922] rounded-3xl p-6 group hover:bg-[#1a2130] transition-colors duration-300"
        >
          <div className="mb-4 p-3 bg-green-600/20 rounded-xl w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Metodología Ágil</h3>
          <p className="text-gray-400">Aplicamos metodologías ágiles para adaptarnos rápidamente a los cambios y entregar valor de forma continua.</p>
        </motion.div>
        
        {/* Tarjeta de soporte */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-[#131922] rounded-3xl p-6 group hover:bg-[#1a2130] transition-colors duration-300"
        >
          <div className="mb-4 p-3 bg-purple-600/20 rounded-xl w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Soporte Continuo</h3>
          <p className="text-gray-400">Ofrecemos soporte técnico y mantenimiento continuo para asegurar el óptimo funcionamiento de tu solución.</p>
        </motion.div>
        
        {/* Tarjeta de equipo */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-3xl p-6 col-span-1 md:col-span-2 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Equipo Multidisciplinario</h3>
            <p className="text-white/80">Nuestro equipo combina habilidades en desarrollo, diseño, UX y estrategia de negocio para ofrecer soluciones integrales.</p>
            <div className="mt-4 flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-red-400 border-2 border-white"></div>
              <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white flex items-center justify-center text-xs font-bold">+3</div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl transform -translate-x-5 -translate-y-5"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default BentoGrid;
export { BentoGrid };
