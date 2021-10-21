import { LIBRARIES } from '../../../data/LIBRARIES';
import { getRepoInfo } from './getRepoInfo';

export default async function handler(req, res) {
  const fullRepos = LIBRARIES.map(async (library) => {
    const info = await getRepoInfo(library.repo);
    return {
      title: library.title,
      slug: library.slug,
      description: library.description,
      repo: library.repo,
      license: library.license,
      type: library.type,
      useCase: library.useCase,
      framework: library.framework,
      github: info,
    };
  });

  const data = await Promise.all(fullRepos);
  res.status(200).json(data);
}
