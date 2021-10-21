import { getRepoInfo } from './getRepoInfo';

export default async function handler({ query: { id } }, res) {
  // const repo = LIBRARIES.find((library) => library.slug === id);
  const repo = (await import(`../../../data/libraries/${id}`)).default;
  const githubInfo = await getRepoInfo(repo.repo);

  // const starTrends = await getTrends(githubInfo.stars, 'stargazers', repo.repo);

  const data = { ...repo, github: githubInfo };

  res.status(200).json(data);
}
