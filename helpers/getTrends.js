import { days } from './daysForTrends';
import { getCountForDay } from './getCountForDay';

export const getTrends = async (sum, category, repoURL) => {
  const maxPage = Math.ceil(sum / 30);

  let trends = [];

  for (let i = 0; i < days.length; i++) {
    const count = await getCountForDay(
      maxPage,
      category,
      repoURL,
      days[i],
      sum
    );

    trends.push(count);
  }

  return {
    days: days,
    data: trends,
  };
};
