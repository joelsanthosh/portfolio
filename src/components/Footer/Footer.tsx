import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white/50 dark:bg-brand-dark/50 py-12 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo / Brand */}
          <Link to="/" className="group">
            <span className="bg-gradient-to-r from-brand-primary to-brand-neonPurple bg-clip-text text-xl font-bold tracking-wider text-transparent group-hover:opacity-85 transition-opacity">
              JOEL.DEV
            </span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {currentYear} Joel Santhosh Raja. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/joelsanthosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-primary transition-colors dark:text-zinc-400 dark:hover:text-brand-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/joel-santhosh-raja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-brand-primary transition-colors dark:text-zinc-400 dark:hover:text-brand-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:myemail@email.com"
              className="text-zinc-500 hover:text-brand-primary transition-colors dark:text-zinc-400 dark:hover:text-brand-primary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 rounded-full bg-brand-primary/10 p-2.5 text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300 dark:bg-brand-primary/20"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
    </footer>
  );
};

export default Footer;
