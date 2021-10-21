import { getTrends } from '../../../helpers/getTrends';
import { getRepoInfo } from './getRepoInfo';

export default async function handler(req, res) {
  const id = req.query.library;

  //const repo = LIBRARIES.find((library) => library.slug === id);
  const repo = (await import(`../../../data/libraries/${id}`)).default;
  const githubInfo = await getRepoInfo(repo.repo);

  // trends

  const forkTrends = await getTrends(githubInfo.forks, 'forks', repo.repo);

  res.status(200).json(forkTrends);
}
