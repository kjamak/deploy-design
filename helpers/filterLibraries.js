export const filterLibraries = (libraries, filter, typeId) => {
  let filtered = [...libraries];

  if (filter === 'framework') {
    const results = filtered.filter((item) => item.framework.includes(typeId));
    return results;
  }
  if (filter === 'license') {
    const results = filtered.filter((item) => item.license.includes(typeId));

    return results;
  }
  if (filter === 'type') {
    const results = filtered.filter((item) => item.type.includes(typeId));

    return results;
  }
  if (filter === 'use-case') {
    const results = filtered.filter((item) => item.useCase.includes(typeId));

    return results;
  }
};
