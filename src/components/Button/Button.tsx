import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import MagneticWrapper from "./MagneticWrapper";
import { playClickSound, playHoverSound } from "../../services/soundService";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-gradient-to-r from-brand-primary to-brand-neonPurple text-white shadow-lg hover:shadow-brand-primary/30 hover:brightness-110 active:scale-95",
    secondary:
      "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 active:scale-95",
    outline:
      "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary/10 active:scale-95",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <MagneticWrapper>
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        onMouseEnter={(e) => {
          playHoverSound();
          if (props.onMouseEnter) props.onMouseEnter(e);
        }}
        onClick={(e) => {
          playClickSound();
          if (props.onClick) props.onClick(e);
        }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    </MagneticWrapper>
  );
};

export default Button;
