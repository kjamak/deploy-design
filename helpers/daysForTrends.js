import moment from 'moment';

export const days = [
  moment
    .utc()
    .subtract('20', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('19', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('18', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('17', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('16', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('15', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('14', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('13', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('12', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('11', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('10', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('9', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('8', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('7', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('6', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
  moment
    .utc()
    .subtract('5', 'day')
    .startOf('day')
    .toISOString()
    .substring(0, 10),
];
