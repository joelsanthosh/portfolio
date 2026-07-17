import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RadarSkill {
  subject: string;
  value: number; // percentage (0 to 100)
  description: string;
  details: string[];
}

const SkillRadarChart: React.FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<RadarSkill | null>(null);

  const skills: RadarSkill[] = [
    {
      subject: "UI/Frontend",
      value: 95,
      description: "State systems, component life cycles, dynamic animations",
      details: ["React", "TypeScript", "Vite", "CSS Modules"],
    },
    {
      subject: "Server/Backend",
      value: 85,
      description: "RESTful endpoints, middleware, datastores, auth flow",
      details: ["Node.js", "Express", "SQL/NoSQL", "REST APIs"],
    },
    {
      subject: "Architecture",
      value: 80,
      description: "Modular separation, clean layers, scaling structures",
      details: ["Monorepos", "Design Patterns", "Clean Code"],
    },
    {
      subject: "Performance",
      value: 90,
      description: "Asset optimization, tree shaking, lazy splitting",
      details: ["Bundle Chunking", "Image Compressing", "Lighthouse audit"],
    },
    {
      subject: "DevOps/CI-CD",
      value: 75,
      description: "Workflows scripts, Docker, deployment checks",
      details: ["GitHub Actions", "Vercel", "Docker"],
    },
    {
      subject: "Design/UX",
      value: 85,
      description: "Fluid spacing, glassmorphism, responsive grids",
      details: ["Tailwind CSS", "Framer Motion", "Responsive Layouts"],
    },
  ];

  const size = 320;
  const center = size / 2;
  const maxRadius = 100; // max radius inside size

  // Helper to map index & value to x,y coords
  const getCoordinates = (index: number, val: number) => {
    const angle = (index * 2 * Math.PI) / skills.length - Math.PI / 2;
    const r = (val / 100) * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  // Concentric grids coordinates (at 25, 50, 75, 100 scales)
  const gridLevels = [25, 50, 75, 100];

  const getGridPoints = (level: number) => {
    return skills
      .map((_, idx) => {
        const { x, y } = getCoordinates(idx, level);
        return `${x},${y}`;
      })
      .join(" ");
  };

  // Generate path string for active skill area
  const skillPoints = skills
    .map((s, idx) => {
      const { x, y } = getCoordinates(idx, s.value);
      return `${x},${y}`;
    })
    .join(" ");
  const skillPathString = `M ${skillPoints} Z`;

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 sm:p-8 rounded-3xl border border-zinc-200/50 bg-white/60 dark:border-zinc-800/50 dark:bg-brand-cardDark/60 backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
      {/* SVG Radar Graphics */}
      <div className="relative w-[320px] h-[320px] flex-shrink-0">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
          <defs>
            <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-brand-primary)" stopOpacity={0.1} />
              <stop offset="100%" stopColor="var(--color-brand-primary)" stopOpacity={0.4} />
            </radialGradient>
          </defs>

          {/* Dotted Concentric Helper Grids */}
          {gridLevels.map((lvl) => (
            <polygon
              key={lvl}
              points={getGridPoints(lvl)}
              fill="none"
              stroke="currentColor"
              className="text-zinc-200 dark:text-zinc-800"
              strokeWidth={1}
              strokeDasharray="4 4"
            />
          ))}

          {/* Axes Lines */}
          {skills.map((_, idx) => {
            const outer = getCoordinates(idx, 100);
            return (
              <line
                key={idx}
                x1={center}
                y1={center}
                x2={outer.x}
                y2={outer.y}
                stroke="currentColor"
                className="text-zinc-200 dark:text-zinc-800"
                strokeWidth={1.5}
              />
            );
          })}

          {/* Filled Skill Path */}
          <motion.path
            d={skillPathString}
            fill="url(#radarGrad)"
            stroke="var(--color-brand-primary)"
            strokeWidth={2.5}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Axis Node Circles & Text Labels */}
          {skills.map((s, idx) => {
            const pt = getCoordinates(idx, s.value);
            const outerPt = getCoordinates(idx, 115); // place text further out

            return (
              <g key={s.subject} className="cursor-pointer">
                {/* Node circle wrapper */}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={hoveredPoint?.subject === s.subject ? 7 : 5}
                  fill="var(--color-brand-primary)"
                  className="transition-all duration-200 shadow-md"
                  onMouseEnter={() => setHoveredPoint(s)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                
                {/* Label text */}
                <text
                  x={outerPt.x}
                  y={outerPt.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={`font-mono text-[10px] font-bold select-none transition-colors duration-200 ${
                    hoveredPoint?.subject === s.subject
                      ? "fill-brand-primary text-brand-primary"
                      : "fill-zinc-500 dark:fill-zinc-400"
                  }`}
                  onMouseEnter={() => setHoveredPoint(s)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  style={{
                    fill: hoveredPoint?.subject === s.subject ? "var(--color-brand-primary)" : undefined
                  }}
                >
                  {s.subject}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info / Tooltip Box */}
      <div className="flex-1 min-w-[240px] space-y-4">
        <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">
          Expertise Matrix
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Hover over the chart nodes or labels to inspect details of my competency levels across core areas.
        </p>

        <AnimatePresence mode="wait">
          {hoveredPoint ? (
            <motion.div
              key={hoveredPoint.subject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl border border-zinc-200 bg-brand-light dark:border-zinc-800 dark:bg-brand-dark/50"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-base text-zinc-800 dark:text-white">
                  {hoveredPoint.subject}
                </span>
                <span className="text-sm font-extrabold text-brand-primary" style={{ color: "var(--color-brand-primary)" }}>
                  {hoveredPoint.value}%
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                {hoveredPoint.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {hoveredPoint.details.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-brand-primary/10 px-2 py-0.5 text-[10px] font-bold text-brand-primary dark:bg-brand-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="fallback"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-5 rounded-2xl border border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center h-[130px] text-center"
            >
              <span className="text-xs text-zinc-400 italic">
                Hover a skill point to reveal tech details.
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SkillRadarChart;
