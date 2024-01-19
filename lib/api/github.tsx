import { createContext, useContext } from "react";

const GitHubUserContext = createContext();
export const useGitHubUserContext = () => useContext(GitHubUserContext);

export async function fetchGitHubUserData() {
  const response = await fetch(`https://api.github.com/users/KevinWuPrograms`);
  await response.json().then((data) => {
    console.log(data);
    return data;
  });
}

export async function fetchGithubUserRepos() {
  const response = await fetch(
    `https://api.github.com/users/KevinWuPrograms/repos`
  );
  const data = await response.json();
  return data;
}
