export interface GitHubProfile {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

const GITHUB_USERNAME = "joelsanthosh";

export const fetchGitHubProfile = async (): Promise<GitHubProfile> => {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }
  return response.json();
};

export const fetchGitHubRepos = async (): Promise<GitHubRepo[]> => {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }
  return response.json();
};
