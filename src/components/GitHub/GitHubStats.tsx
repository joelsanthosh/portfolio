import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, GitBranch, Terminal, Users, BookOpen } from "lucide-react";
import { fetchGitHubProfile, fetchGitHubRepos, GitHubProfile, GitHubRepo } from "../../services/githubService";

const GitHubStats: React.FC = () => {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        setLoading(true);
        const [profileData, reposData] = await Promise.all([
          fetchGitHubProfile(),
          fetchGitHubRepos(),
        ]);
        setProfile(profileData);
        setRepos(reposData);
        setError(null);
      } catch (err) {
        console.error("Error loading GitHub stats:", err);
        setError("Unable to load live stats at this moment. You can browse directly on GitHub.");
      } finally {
        setLoading(false);
      }
    };

    loadGitHubData();
  }, []);

  if (error) {
    return (
      <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-brand-cardDark/40 text-center max-w-2xl mx-auto space-y-4">
        <Terminal className="h-10 w-10 text-zinc-400 mx-auto" />
        <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200">GitHub API Status</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{error}</p>
        <div className="pt-2">
          <a
            href="https://github.com/joelsanthosh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 rounded-full bg-brand-primary px-5 py-2 text-xs font-semibold text-white hover:bg-brand-primaryHover transition-all shadow-md"
          >
            <span>Visit Github Profile</span>
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-8 max-w-5xl mx-auto">
        {/* Profile Skeleton */}
        <div className="h-32 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-brand-cardDark/50 animate-pulse"></div>
        {/* Repos Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-36 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-brand-cardDark/50 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Profile Overview Card */}
      {profile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 md:p-8 rounded-3xl border border-zinc-200/50 bg-white/80 dark:bg-brand-cardDark/80 dark:border-zinc-800/50 shadow-lg flex flex-col md:flex-row items-center gap-6 justify-between"
        >
          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-primary p-0.5">
              <img src={profile.avatar_url} alt={profile.name} className="w-full h-full rounded-full object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white">{profile.name}</h3>
              <p className="text-sm font-semibold text-brand-primary">@{profile.login}</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 max-w-md">{profile.bio}</p>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-6 text-center border-t md:border-t-0 md:border-l border-zinc-200 dark:border-zinc-800 pt-6 md:pt-0 md:pl-10 w-full md:w-auto">
            <div>
              <div className="flex items-center justify-center text-brand-primary mb-1">
                <BookOpen className="h-4.5 w-4.5 mr-1" />
                <span className="text-lg font-bold text-zinc-900 dark:text-white">{profile.public_repos}</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Repositories</p>
            </div>
            <div>
              <div className="flex items-center justify-center text-brand-primary mb-1">
                <Users className="h-4.5 w-4.5 mr-1" />
                <span className="text-lg font-bold text-zinc-900 dark:text-white">{profile.followers}</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Followers</p>
            </div>
            <div>
              <div className="flex items-center justify-center text-brand-primary mb-1">
                <GitBranch className="h-4.5 w-4.5 mr-1" />
                <span className="text-lg font-bold text-zinc-900 dark:text-white">{profile.following}</span>
              </div>
              <p className="text-xs text-zinc-400 font-medium uppercase tracking-wider">Following</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Public Repos Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 flex items-center space-x-2">
          <Terminal className="h-5 w-5 text-brand-primary" />
          <span>Active Open Source Projects</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl border border-zinc-200/50 bg-white/50 dark:bg-brand-cardDark/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md hover:border-brand-primary/30 dark:hover:border-brand-primary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h4 className="text-base font-extrabold text-zinc-800 dark:text-white truncate">
                    {repo.name}
                  </h4>
                  {repo.language && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/20">
                      {repo.language}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                  {repo.description || "No description provided."}
                </p>
              </div>

              {/* Stats Footer */}
              <div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
                <span className="flex items-center">
                  <Star className="h-3.5 w-3.5 mr-1 text-amber-500" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  <GitFork className="h-3.5 w-3.5 mr-1 text-brand-primary" />
                  {repo.forks_count}
                </span>
                <span className="ml-auto">
                  Updated: {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
