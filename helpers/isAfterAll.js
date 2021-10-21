import moment from 'moment';

export const isAfterAll = (day, data) => {
  for (let i = data.length - 1; i >= 0; i--) {
    if (moment(day).isSameOrAfter(data[i]['starred_at'])) {
      return i;
    }
  }

  return null;
};
