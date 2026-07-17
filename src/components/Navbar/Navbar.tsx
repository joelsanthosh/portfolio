import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Menu, X, Code2, User, Briefcase, Mail, Terminal, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AccentCustomizer from "../AccentCustomizer/AccentCustomizer";
import { playClickSound, playHoverSound } from "../../services/soundService";

interface NavbarProps {
  onOpenTerminal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    return localStorage.getItem("ui-sound-mute") === "true";
  });

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    localStorage.setItem("ui-sound-mute", String(nextMuted));
    if (!nextMuted) {
      setTimeout(() => {
        playClickSound();
      }, 50);
    }
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Code2 },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const handleLinkClick = () => {
    playClickSound();
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glassmorphism border-b border-zinc-200/50 dark:border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="flex items-center space-x-2 group"
            onClick={playClickSound}
            onMouseEnter={playHoverSound}
          >
            <span className="bg-gradient-to-r from-brand-primary to-brand-neonPurple bg-clip-text text-2xl font-extrabold tracking-wider text-transparent group-hover:opacity-85 transition-opacity">
              JOEL.DEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={playClickSound}
                  onMouseEnter={playHoverSound}
                  className={({ isActive }) =>
                    `flex items-center space-x-1 text-sm font-medium transition-colors hover:text-brand-primary ${
                      isActive
                        ? "text-brand-primary border-b-2 border-brand-primary pb-1"
                        : "text-zinc-600 dark:text-zinc-300"
                    }`
                  }
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}

            <AccentCustomizer />

            {/* Terminal Console Trigger */}
            <button
              onClick={() => {
                playClickSound();
                onOpenTerminal();
              }}
              onMouseEnter={playHoverSound}
              className="rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none animate-pulse-slow"
              aria-label="Open developer terminal console"
              title="Open console (~)"
            >
              <Terminal className="h-5 w-5 text-emerald-500" />
            </button>

            {/* Mute Toggle */}
            <button
              onClick={toggleMute}
              onMouseEnter={playHoverSound}
              className="rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle UI sounds"
              title={isMuted ? "Unmute sounds" : "Mute sounds"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-zinc-400" />
              ) : (
                <Volume2 className="h-5 w-5 text-brand-primary animate-pulse" />
              )}
            </button>

            {/* Dark Mode Switcher */}
            <button
              onClick={() => {
                playClickSound();
                toggleTheme();
              }}
              onMouseEnter={playHoverSound}
              className="rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>
          </nav>

          {/* Mobile menu toggle & theme/sound switches */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Terminal Console Trigger */}
            <button
              onClick={() => {
                playClickSound();
                onOpenTerminal();
              }}
              className="rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Open developer terminal console"
            >
              <Terminal className="h-5 w-5 text-emerald-500" />
            </button>

            {/* Mute Toggle */}
            <button
              onClick={toggleMute}
              className="rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle UI sounds"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-zinc-400" />
              ) : (
                <Volume2 className="h-5 w-5 text-brand-primary" />
              )}
            </button>

            <button
              onClick={() => {
                playClickSound();
                toggleTheme();
              }}
              className="rounded-full p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => {
                playClickSound();
                setIsOpen(!isOpen);
              }}
              className="rounded-lg p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-zinc-200/50 dark:border-zinc-800/50 glassmorphism"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              <div className="px-3 py-2 flex items-center justify-between mb-4 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Theme Accent</span>
                <AccentCustomizer />
              </div>
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    onMouseEnter={playHoverSound}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 rounded-lg px-3 py-3 text-base font-medium transition-all ${
                        isActive
                          ? "bg-brand-primary/10 text-brand-primary"
                          : "text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
