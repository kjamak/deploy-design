import cacheData from 'memory-cache';
import { getValuefromApi, getValuefromApiReversed } from './getValuefromApi';

export const getCountForDay = async (maxPage, category, repoURL, day, sum) => {
  const value = cacheData.get(`${repoURL}/${category}/${day}`);
  if (value) {
    return value;
  } else {
    try {
      const hours = 72;
      let value;

      if (category === 'stargazers') {
        value = await getValuefromApiReversed(
          maxPage,
          repoURL,
          category,
          day,
          sum
        );
      } else {
        value = await getValuefromApi(maxPage, repoURL, category, day, sum);
      }
      cacheData.put(
        `${repoURL}/${category}/${day}`,
        value,
        hours * 1000 * 60 * 60
      );

      return value;
    } catch (err) {
      return 0;
    }
  }
};
