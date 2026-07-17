import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { getImageurl } from "../../Utils";

interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-zinc-200/50 bg-white shadow-lg transition-all duration-300 dark:border-zinc-800/50 dark:bg-brand-cardDark/90 hover:shadow-brand-primary/20 dark:hover:shadow-brand-primary/10"
    >
      {/* Project Image Container */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={getImageurl(project.imageSrc)}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            // Fallback image if file not found
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80";
          }}
        />
        {/* Hover overlay with button */}
        <div className="absolute inset-0 bg-brand-primary/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
          <button
            onClick={() => onOpenDetails(project)}
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-primary shadow-lg hover:bg-zinc-100 transition-colors"
          >
            Quick View
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-sm font-medium text-zinc-600 hover:text-brand-primary dark:text-zinc-300 dark:hover:text-brand-primary transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>Source Code</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-sm font-medium text-brand-primary hover:brightness-90 transition-all"
          >
            <span>Live Demo</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
