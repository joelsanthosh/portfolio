import React from "react";
import { useTheme, ThemePreset } from "../../context/ThemeContext";
import { Palette } from "lucide-react";
import { motion } from "framer-motion";

const AccentCustomizer: React.FC = () => {
  const { preset, setPreset } = useTheme();

  const options: { id: ThemePreset; colorClass: string; name: string }[] = [
    { id: "slate", colorClass: "bg-[#6366f1]", name: "Slate" },
    { id: "cyberpunk", colorClass: "bg-[#ff007f]", name: "Cyberpunk" },
    { id: "nord", colorClass: "bg-[#88c0d0]", name: "Nord Frost" },
    { id: "retro", colorClass: "bg-[#10b981]", name: "Retro Matrix" },
  ];

  return (
    <div className="flex items-center space-x-3 bg-zinc-100/80 dark:bg-zinc-800/80 rounded-full px-3.5 py-1.5 border border-zinc-200/50 dark:border-zinc-700/50 shadow-sm">
      <Palette className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
      <div className="flex items-center space-x-1.5">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setPreset(option.id)}
            className={`h-4.5 w-4.5 rounded-full ${option.colorClass} border transition-all duration-200 focus:outline-none relative`}
            title={`Set workspace theme to ${option.name}`}
            style={{
              borderColor: preset === option.id ? "#ffffff" : "transparent",
              boxShadow: preset === option.id ? "0 0 8px rgba(0,0,0,0.4)" : "none",
            }}
          >
            {preset === option.id && (
              <motion.span
                layoutId="activePresetOutline"
                className="absolute -inset-1 rounded-full border-2 border-brand-primary"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccentCustomizer;
