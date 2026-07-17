import React from "react";
import { useTheme, AccentColor } from "../../context/ThemeContext";
import { Paintbrush } from "lucide-react";
import { motion } from "framer-motion";

const AccentCustomizer: React.FC = () => {
  const { accent, setAccentColor } = useTheme();

  const options: { id: AccentColor; colorClass: string; name: string }[] = [
    { id: "indigo", colorClass: "bg-[#6366f1]", name: "Indigo" },
    { id: "emerald", colorClass: "bg-[#10b981]", name: "Emerald" },
    { id: "sky", colorClass: "bg-[#0ea5e9]", name: "Sky" },
    { id: "rose", colorClass: "bg-[#f43f5e]", name: "Rose" },
    { id: "violet", colorClass: "bg-[#8b5cf6]", name: "Violet" },
  ];

  return (
    <div className="flex items-center space-x-3 bg-zinc-100/80 dark:bg-zinc-800/80 rounded-full px-3.5 py-1.5 border border-zinc-200/50 dark:border-zinc-700/50">
      <Paintbrush className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
      <div className="flex items-center space-x-1.5">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setAccentColor(option.id)}
            className={`h-4.5 w-4.5 rounded-full ${option.colorClass} border transition-all duration-200 focus:outline-none relative`}
            title={`Set theme to ${option.name}`}
            style={{
              borderColor: accent === option.id ? "#ffffff" : "transparent",
              boxShadow: accent === option.id ? "0 0 8px rgba(0,0,0,0.4)" : "none",
            }}
          >
            {accent === option.id && (
              <motion.span
                layoutId="activeAccentOutline"
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
