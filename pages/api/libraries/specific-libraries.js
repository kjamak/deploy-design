import { LIBRARIES } from '../../../data/LIBRARIES';
import { FILTERS } from '../../../data/FILTERS';
import { filterLibraries } from '../../../helpers/filterLibraries';
import { getRepoInfo } from './getRepoInfo';

export default async function handler(req, res) {
  const filter = req.body.filter;
  const type = req.body.type;

  let filterInfo;

  try {
    filterInfo = (await import(`../../../data/filters/${filter}/${type}`))
      .default;
  } catch {}

  const filteredLibraries = filterLibraries(LIBRARIES, filter, type);

  const fullRepos = filteredLibraries.map(async (library) => {
    const info = await getRepoInfo(library.repo);
    return {
      title: library.title,
      slug: library.slug,
      description: library.description,
      license: library.license,
      type: library.type,
      useCase: library.useCase,
      framework: library.framework,
      github: info,
    };
  });

  const data = await Promise.all(fullRepos);

  res.status(200).json({
    info: filterInfo || {},
    libraries: data,
  });
}
