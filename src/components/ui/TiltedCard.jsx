import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function TiltedCard({ children, className = '', glareColor = 'rgba(255, 255, 255, 0.4)', glareOpacity = 0.3, scale = 1.05, rotationIntensity = 15, borderRadius = '16px', perspective = 1000 }) {
  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values for smooth animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Add spring physics for smoother animation
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [rotationIntensity, -rotationIntensity]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-rotationIntensity, rotationIntensity]), springConfig);
  
  // Glare effect position
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card (0-1)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        borderRadius,
      }}
      animate={{
        scale: isHovering ? scale : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card content */}
        <div className="w-full h-full relative z-10">
          {children}
        </div>
        
        {/* Glare effect */}
        <motion.div
          className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
          style={{
            borderRadius,
            opacity: isHovering ? glareOpacity : 0,
            background: `radial-gradient(circle at ${glareX} ${glareY}, ${glareColor} 0%, transparent 80%)`,
            mixBlendMode: 'overlay',
          }}
        />
      </motion.div>
    </motion.div>
  );
}
