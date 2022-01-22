/* eslint-disable @typescript-eslint/no-explicit-any */

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
