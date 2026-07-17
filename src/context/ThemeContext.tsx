import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
export type AccentColor = "indigo" | "emerald" | "sky" | "rose" | "violet";

interface ThemeContextType {
  theme: Theme;
  accent: AccentColor;
  toggleTheme: () => void;
  setAccentColor: (color: AccentColor) => void;
}

const accentColorsMap = {
  indigo: { primary: "#6366f1", hover: "#4f46e5" },
  emerald: { primary: "#10b981", hover: "#059669" },
  sky: { primary: "#0ea5e9", hover: "#0284c7" },
  rose: { primary: "#f43f5e", hover: "#e11d48" },
  violet: { primary: "#8b5cf6", hover: "#7c3aed" },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return systemPrefersDark ? "dark" : "light";
  });

  const [accent, setAccent] = useState<AccentColor>(() => {
    const savedAccent = localStorage.getItem("theme-accent") as AccentColor | null;
    return savedAccent || "indigo";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const activeColors = accentColorsMap[accent];
    root.style.setProperty("--color-brand-primary", activeColors.primary);
    root.style.setProperty("--color-brand-primaryHover", activeColors.hover);
    localStorage.setItem("theme-accent", accent);
  }, [accent]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setAccentColor = (color: AccentColor) => {
    setAccent(color);
  };

  return (
    <ThemeContext.Provider value={{ theme, accent, toggleTheme, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
