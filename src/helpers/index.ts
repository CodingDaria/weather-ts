/* eslint-disable @typescript-eslint/no-explicit-any */
import dayjs from 'dayjs';

export const isFunc = (value: (() => void) | undefined | null): boolean =>
  typeof value === 'function';

const getTimezoneDate = (unixsec: number | undefined, timezone: number) => {
  return unixsec ? new Date((unixsec + timezone) * 1000) : new Date();
};

export const getSunDate = (unixsec: number | undefined, timezone: number): string => {
  const hours = getTimezoneDate(unixsec, timezone).getUTCHours();
  const minutes = `${getTimezoneDate(unixsec, timezone).getUTCMinutes()}`.padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getDay = (unixsec: number): string => {
  const date = new Date(unixsec * 1000);
  return dayjs(date).format('ddd DD');
};

export const getIconLink = (icon: string): string => `http://openweathermap.org/img/wn/${icon}@2x.png`;
