import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Globe, Github, X } from "lucide-react";
import SEO from "../components/SEO/SEO";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import projectsData from "../data/projects.json";
import { getImageurl } from "../Utils";

interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Get all unique technology tags across all projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projectsData.forEach((project) => {
      project.skills.forEach((skill) => tags.add(skill));
    });
    return ["all", ...Array.from(tags)];
  }, []);

  // Filter projects based on tag search
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag =
        selectedTag === "all" || project.skills.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <>
      <SEO
        title="Projects Portfolio"
        description="Browse Joel Santhosh Raja's development projects, featuring fullstack apps, CSS custom modules, and interactive demos."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-12">
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            My Portfolio Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-neonPurple rounded-full mx-auto"></div>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
            Explore my selected professional work and side projects. Use search or filter tags to refine the list.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl border border-zinc-200/50 bg-white/60 dark:bg-brand-cardDark/60 dark:border-zinc-800/50 backdrop-blur-sm">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-primary/50 text-sm"
            />
          </div>

          {/* Tags list */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-1">
              Filter:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-tight transition-all ${
                  selectedTag === tag
                    ? "bg-brand-primary text-white"
                    : "bg-zinc-100 hover:bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onOpenDetails={setActiveModalProject}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center"
            >
              <p className="text-lg text-zinc-500 dark:text-zinc-400">
                No projects matched your criteria. Try adjusting the search query or filters.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Project Detailed Quick-View Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-brand-cardDark shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-4 right-4 z-10 rounded-full bg-black/40 hover:bg-black/60 p-2 text-white transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Modal Image */}
                  <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden bg-zinc-950">
                    <img
                      src={getImageurl(activeModalProject.imageSrc)}
                      alt={activeModalProject.title}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>

                  {/* Modal Content */}
                  <div className="p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {activeModalProject.title}
                      </h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        {activeModalProject.description}
                      </p>
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeModalProject.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <a
                        href={activeModalProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 rounded-xl bg-brand-primary py-2.5 text-sm font-semibold text-white hover:bg-brand-primaryHover shadow-lg transition-all text-center"
                      >
                        <Globe className="h-4 w-4" />
                        <span>Visit Demo</span>
                      </a>
                      <a
                        href={activeModalProject.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 rounded-xl border border-zinc-300 dark:border-zinc-700 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all text-center"
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Projects;
