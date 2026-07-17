import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticWrapperProps {
  children: React.ReactNode;
  range?: number; // Distance threshold to react
  strength?: number; // Intensity of pull (0 to 1)
}

const MagneticWrapper: React.FC<MagneticWrapperProps> = ({
  children,
  range = 35,
  strength = 0.35,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Check if mouse is within reaction range
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      // Pull element toward mouse
      setPosition({ x: distanceX * strength, y: distanceY * strength });
    } else {
      // Reset position if outside range
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default MagneticWrapper;
