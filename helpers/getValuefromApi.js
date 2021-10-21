import moment from 'moment';
import axios from '../config/axios';
import { isAfterAll } from './isAfterAll';

export const getValuefromApiReversed = async (
  maxPage,
  repoURL,
  category,
  day,
  sum
) => {
  for (let i = maxPage; i >= 0; i--) {
    try {
      const response = await axios.get(
        `/repos/${repoURL}/${category}?page=${i}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3.star+json',
          },
        }
      );

      const data = response.data;

      if (moment(day).isAfter(data[data.length - 1]['starred_at'])) {
        return i * 30;
      }

      const preIndex = isAfterAll(day, data);

      if (preIndex !== null) {
        return (i - 1) * 30 + preIndex;
      }

      /* const index = findLastIndex(data, 'starred_at', day);
   
      if (index) {
        return (i - 1) * 30 + index + 1;
      }*/
    } catch {
      console.log('errr');
      return 0;
    }
  }
};

export const getValuefromApi = async (maxPage, repoURL, category, day, sum) => {
  for (let i = 1; i <= maxPage; i++) {
    try {
      const response = await axios.get(
        `/repos/${repoURL}/${category}?page=${i}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3.star+json',
          },
        }
      );

      const data = response.data;

      for (let j = 0; j < data.length; j++) {
        if (moment(day).isAfter(data[j]['created_at'])) {
          return sum - (i - 1) * 30 - j;
        }
      }

      const index = data.findIndex(
        (element) => element['created_at'].substring(0, 10) === day
      );

      if (index >= 0) {
        return sum - (i - 1) * 30 - index;
      }
    } catch {
      console.log('errr');
      return 0;
    }
  }
};
