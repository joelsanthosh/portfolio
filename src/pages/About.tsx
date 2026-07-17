import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, BookOpen, Briefcase, Award } from "lucide-react";
import SEO from "../components/SEO/SEO";
import ExperienceTimeline from "../components/Timeline/ExperienceTimeline";
import Button from "../components/Button/Button";
import SkillRadarChart from "../components/RadarChart/SkillRadarChart";
import historyData from "../data/history.json";
import skillsData from "../data/skills.json";
import { getImageurl } from "../Utils";

interface Skill {
  title: string;
  imageSrc: string;
  category?: string;
}

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend" | "tools">("all");

  // Enrich skills with categories since json is simple
  const enrichedSkills: Skill[] = skillsData.map((skill) => {
    let category = "frontend";
    if (skill.title.toLowerCase().includes("node") || skill.title.toLowerCase().includes("express") || skill.title.toLowerCase().includes("sql")) {
      category = "backend";
    } else if (skill.title.toLowerCase().includes("git") || skill.title.toLowerCase().includes("figma") || skill.title.toLowerCase().includes("docker")) {
      category = "tools";
    }
    return { ...skill, category };
  });

  const filteredSkills = enrichedSkills.filter(
    (skill) => activeTab === "all" || skill.category === activeTab
  );

  const tabs = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools & DevOps" },
  ] as const;

  return (
    <>
      <SEO title="About Me" description="Learn more about Joel Santhosh Raja - Lead Software Engineer, his career timeline, skills, and experience." />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-24">
        
        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              About Me
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-neonPurple rounded-full"></div>
            
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I'm a passionate and dedicated React.js Developer with 7 years of professional experience building modern, interactive, and user-centric web applications. I specialize in creating seamless and dynamic user interfaces that are fast, responsive, and easy to use.
            </p>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              With a focus on performance and best practices, I aim to build scalable, maintainable applications that provide a great user experience. I am driven by the thrill of solving complex engineering puzzles and converting ideas into clean, executable code.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="/cv-placeholder.pdf"
                download
                className="w-full sm:w-auto"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Resume download triggered (CV mockup demonstration).");
                }}
              >
                <Button className="w-full sm:w-auto flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Intro Side Grid cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="p-6 rounded-2xl border border-zinc-200/50 bg-white/50 dark:bg-brand-cardDark/50 dark:border-zinc-800/50">
              <BookOpen className="h-8 w-8 text-brand-primary mb-3" />
              <h3 className="font-bold text-zinc-800 dark:text-white mb-1">Education</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">B.E. in Computer Science</p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200/50 bg-white/50 dark:bg-brand-cardDark/50 dark:border-zinc-800/50">
              <Briefcase className="h-8 w-8 text-brand-primary mb-3" />
              <h3 className="font-bold text-zinc-800 dark:text-white mb-1">Role</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Lead Software Engineer</p>
            </div>
            <div className="p-6 rounded-2xl border border-zinc-200/50 bg-white/50 dark:bg-brand-cardDark/50 dark:border-zinc-800/50 sm:col-span-2">
              <Award className="h-8 w-8 text-brand-primary mb-3" />
              <h3 className="font-bold text-zinc-800 dark:text-white mb-1">Key Domain Focus</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Single Page Apps, State Management (Redux, Context), Custom Libraries, High-Performance Vite bundles.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Radar Expertise Matrix Section */}
        <section className="space-y-8 animate-float-slow">
          <SkillRadarChart />
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Technical Skills</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
              Here are the core technologies I utilize to bring concepts to reality. Filter by category to browse.
            </p>
          </div>

          {/* Skill Filter Tabs */}
          <div className="flex justify-center flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2 text-xs md:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="p-5 rounded-2xl border border-zinc-200/50 bg-white/80 dark:bg-brand-cardDark/80 dark:border-zinc-800/50 flex flex-col items-center justify-center text-center gap-3 shadow-sm hover:shadow-md hover:border-brand-primary/30 dark:hover:border-brand-primary/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center p-1 rounded-xl bg-zinc-50 dark:bg-zinc-900/50">
                  <img
                    src={getImageurl(skill.imageSrc)}
                    alt={skill.title}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=100&q=80";
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200">
                  {skill.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Experience Section */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Work History</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
              A timeline of my professional journey as a software developer over the last 7 years.
            </p>
          </div>

          <ExperienceTimeline history={historyData} />
        </section>

      </div>
    </>
  );
};

export default About;
