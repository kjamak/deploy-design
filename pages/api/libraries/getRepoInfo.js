import axios from '../../../config/axios';
import cacheData from 'memory-cache';

export const getRepoInfo = async (repoURL) => {
  const value = cacheData.get(repoURL);
  if (value) {
    return value;
  } else {
    try {
      const hours = 24;
      const response = await axios.get(`/repos/${repoURL}`);

      const data = {
        stars: response.data.stargazers_count,
        forks: response.data.forks,
        issues: response.data.open_issues,
        lastUpdate: response.data.updated_at,
      };

      cacheData.put(repoURL, data, hours * 1000 * 60 * 60);
      return data;
    } catch (err) {
      return 0;
    }
  }
};
