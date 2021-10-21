export const sortLibraries = (libraries, type) => {
  const sorted = [...libraries];
  if (type === 'stars') {
    sorted.sort((a, b) => (a.github.stars > b.github.stars ? -1 : 1));
    return sorted;
  }
  if (type === 'forks') {
    sorted.sort((a, b) => (a.github.forks > b.github.forks ? -1 : 1));
    return sorted;
  }
  if (type === 'issues') {
    sorted.sort((a, b) => (a.github.issues > b.github.issues ? -1 : 1));
    return sorted;
  }
  if (type === 'title') {
    sorted.sort((a, b) => (a.title > b.title ? 1 : -1));
    return sorted;
  }
};
