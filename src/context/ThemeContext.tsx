import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
export type ThemePreset = "slate" | "cyberpunk" | "nord" | "retro";

interface ThemeContextType {
  theme: Theme;
  preset: ThemePreset;
  toggleTheme: () => void;
  setPreset: (preset: ThemePreset) => void;
}

export const presetsMap = {
  slate: {
    primary: "#6366f1",
    hover: "#4f46e5",
    lightBg: "#f4f4f5",
    darkBg: "#09090b",
    cardLight: "#ffffff",
    cardDark: "#18181b",
    name: "Slate",
  },
  cyberpunk: {
    primary: "#ff007f", // Neon Pink
    hover: "#d00060",
    lightBg: "#fff0f6",
    darkBg: "#05000a", // Pure dark purple-black
    cardLight: "#ffffff",
    cardDark: "#11071c", // Deep neon violet card
    name: "Cyberpunk",
  },
  nord: {
    primary: "#88c0d0", // Nord Frost Cyan
    hover: "#81a1c1",
    lightBg: "#eceff4",
    darkBg: "#2e3440", // Nord Polar Night
    cardLight: "#e5e9f0",
    cardDark: "#3b4252",
    name: "Nord Frost",
  },
  retro: {
    primary: "#10b981", // Matrix Emerald Green
    hover: "#059669",
    lightBg: "#f2fdf5",
    darkBg: "#000000", // Pitch black
    cardLight: "#e2ecd5",
    cardDark: "#060b06", // Dark green-black card
    name: "Retro Matrix",
  },
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

  const [preset, setPresetState] = useState<ThemePreset>(() => {
    const savedPreset = localStorage.getItem("theme-preset") as ThemePreset | null;
    return savedPreset || "slate";
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
    const active = presetsMap[preset];
    
    root.style.setProperty("--color-brand-primary", active.primary);
    root.style.setProperty("--color-brand-primaryHover", active.hover);
    root.style.setProperty("--color-brand-light", active.lightBg);
    root.style.setProperty("--color-brand-dark", active.darkBg);
    root.style.setProperty("--color-brand-cardLight", active.cardLight);
    root.style.setProperty("--color-brand-cardDark", active.cardDark);
    
    localStorage.setItem("theme-preset", preset);
  }, [preset]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const setPreset = (selectedPreset: ThemePreset) => {
    setPresetState(selectedPreset);
  };

  return (
    <ThemeContext.Provider value={{ theme, preset, toggleTheme, setPreset }}>
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
