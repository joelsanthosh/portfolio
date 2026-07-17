import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Terminal as TerminalIcon, X, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  text: string;
  type: "input" | "output" | "error" | "system";
}

const TerminalConsole: React.FC<TerminalConsoleProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    { text: "Joel OS [Version 1.0.0]", type: "system" },
    { text: "(c) 2026 Joel Dev. All rights reserved.", type: "system" },
    { text: "Type 'help' to see list of available commands or 'close' to exit.", type: "output" },
  ]);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of logs
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLogs: CommandLog[] = [...logs, { text: `joel-dev:~ $ ${cmd}`, type: "input" }];

    switch (trimmed) {
      case "help":
        newLogs.push(
          { text: "Available commands:", type: "system" },
          { text: "  about      - Learn about me and my engineering path", type: "output" },
          { text: "  skills     - List technical core stacks", type: "output" },
          { text: "  projects   - Show select project names", type: "output" },
          { text: "  theme      - Toggle Light/Dark workspace view", type: "output" },
          { text: "  clear      - Clear the console terminal records", type: "output" },
          { text: "  close      - Close this terminal console overlay", type: "output" }
        );
        break;
      case "about":
        newLogs.push({
          text: "I am a Lead Software Engineer with 7 years of specialized expertise in React, Node.js, TypeScript, and modern frontend frameworks. I create fast, accessible, and responsive user interfaces.",
          type: "output",
        });
        break;
      case "skills":
        newLogs.push({
          text: "Core stack includes: React.js, TypeScript, Next.js, Node.js, Express, Tailwind CSS, Git, Docker, and CI/CD tools.",
          type: "output",
        });
        break;
      case "projects":
        newLogs.push({
          text: "Featured projects: Project A (Fullstack React App), Project B (E-commerce Engine), Project C (CSS Modules Library). Type 'visit /projects' in the page router to view fully.",
          type: "output",
        });
        break;
      case "theme":
        toggleTheme();
        newLogs.push({
          text: `Workspace theme changed. Currently using ${theme === "dark" ? "Light" : "Dark"} mode.`,
          type: "output",
        });
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      case "close":
      case "exit":
        onClose();
        setInput("");
        return;
      default:
        newLogs.push({
          text: `bash: command not found: ${trimmed}. Type 'help' for available command sets.`,
          type: "error",
        });
    }

    setLogs(newLogs);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-3xl h-[450px] rounded-2xl border border-zinc-800 bg-[#09090b] shadow-2xl flex flex-col overflow-hidden text-emerald-500 font-mono text-xs sm:text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#121214] border-b border-zinc-800/80">
              <div className="flex items-center space-x-2">
                <TerminalIcon className="h-4 w-4 text-emerald-500" />
                <span className="text-zinc-400 font-semibold uppercase tracking-wider text-xs">
                  Developer Console Console
                </span>
              </div>
              <button
                onClick={onClose}
                className="rounded-lg p-1 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            {/* Terminal Log Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-2 select-text custom-scrollbar">
              {logs.map((log, idx) => (
                <div
                  key={idx}
                  className={
                    log.type === "input"
                      ? "text-zinc-200"
                      : log.type === "error"
                      ? "text-red-400 font-bold"
                      : log.type === "system"
                      ? "text-brand-primary"
                      : "text-emerald-400"
                  }
                  style={{
                    color: log.type === "system" ? "var(--color-brand-primary)" : undefined
                  }}
                >
                  {log.text}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Input Line */}
            <div className="flex items-center space-x-2 px-6 py-4 bg-[#121214] border-t border-zinc-800/80">
              <span className="text-brand-primary whitespace-nowrap" style={{ color: "var(--color-brand-primary)" }}>
                joel-dev:~ $
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow bg-transparent text-zinc-200 outline-none border-none focus:ring-0 p-0 text-xs sm:text-sm caret-emerald-500"
                placeholder="Type command here..."
              />
              <CornerDownLeft className="h-4 w-4 text-zinc-600 flex-shrink-0" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalConsole;
