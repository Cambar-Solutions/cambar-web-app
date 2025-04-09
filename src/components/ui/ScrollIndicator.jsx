import { motion } from 'framer-motion';

function ScrollIndicator() {
  return (
    <motion.div 
      className="flex flex-col items-center mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      <motion.p 
        className="text-blue-400 mb-2 text-sm font-medium"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Descubre más
      </motion.p>
      
      <motion.div
        className="w-6 h-10 border-2 border-blue-400 rounded-full p-1"
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-blue-500 rounded-full mx-auto"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-400 mt-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

export default ScrollIndicator;
export { ScrollIndicator };
