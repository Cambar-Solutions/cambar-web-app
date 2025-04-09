import { useState } from 'react';
import { motion } from 'framer-motion';
import Folder from '../../../Reactbits/Folder/Folder';

function InteractiveFolder() {
  const [isOpen, setIsOpen] = useState(false);

  // Componentes de React para los logos de tecnologías
  const techLogos = [
    <div key="react" className="w-full h-full flex items-center justify-center rounded-lg p-2" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' }}>
      <div className="bg-white/90 rounded-full p-2 shadow-lg">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" 
          alt="React" 
          className="w-10 h-10 object-contain"
        />
      </div>
    </div>,
    <div key="tailwind" className="w-full h-full flex items-center justify-center rounded-lg p-2" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)' }}>
      <div className="bg-white/90 rounded-full p-2 shadow-lg">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" 
          alt="Tailwind" 
          className="w-10 h-10 object-contain"
        />
      </div>
    </div>,
    <div key="java" className="w-full h-full flex items-center justify-center rounded-lg p-2" style={{ background: 'linear-gradient(135deg, #e11d48 0%, #7f1d1d 100%)' }}>
      <div className="bg-white/90 rounded-full p-2 shadow-lg">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" 
          alt="Java" 
          className="w-10 h-10 object-contain"
        />
      </div>
    </div>
  ];

  return (
    <div className="relative h-[220px] w-full max-w-2xl mx-auto">
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Folder con los items directamente pasados como prop */}
          <Folder 
            size={1.5} 
            color="#3b82f6" 
            className="transform transition-all duration-500"
            items={isOpen ? techLogos : []}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InteractiveFolder;
export { InteractiveFolder };
