import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { getImageurl } from "../../Utils";

interface HistoryItem {
  role: string;
  organisation: string;
  startDate: string;
  endDate: string;
  experiences: string[];
  imageSrc: string;
}

interface ExperienceTimelineProps {
  history: HistoryItem[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ history }) => {
  return (
    <div className="relative mx-auto max-w-4xl px-4 py-8">
      {/* Vertical line running down */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-neonPurple to-transparent transform -translate-x-1/2 hidden md:block"></div>
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-neonPurple to-transparent md:hidden"></div>

      <div className="space-y-12">
        {history.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={`${item.organisation}-${item.role}`}
              className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center"
            >
              {/* Timeline Center Bullet Icon */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full border-4 border-brand-light dark:border-brand-dark bg-brand-primary transform -translate-x-1/2 z-10 shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>

              {/* Timeline Content Block */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className={`ml-14 md:ml-0 w-full md:w-[44%] p-6 rounded-2xl border border-zinc-200/50 bg-white/80 dark:bg-brand-cardDark/80 dark:border-zinc-800/50 shadow-md backdrop-blur-sm ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Org Logo & Role */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/50 dark:border-zinc-700/50 flex items-center justify-center p-1">
                    <img
                      src={getImageurl(item.imageSrc)}
                      alt={item.organisation}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback icon placeholder if image path doesn't load
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallbackSpan = document.createElement("span");
                          fallbackSpan.className = "text-brand-primary font-bold text-lg";
                          fallbackSpan.innerText = item.organisation[0];
                          parent.appendChild(fallbackSpan);
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-extrabold text-zinc-800 dark:text-white leading-tight">
                      {item.role}
                    </h4>
                    <p className="text-sm font-semibold text-brand-primary">
                      {item.organisation}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center space-x-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>
                    {item.startDate} - {item.endDate}
                  </span>
                </div>

                {/* Key Bullet Points */}
                <ul className="space-y-2 list-disc pl-4 text-sm text-zinc-600 dark:text-zinc-300">
                  {item.experiences.map((exp, expIdx) => (
                    <li key={expIdx} className="leading-relaxed">
                      {exp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
