/* eslint-disable @typescript-eslint/no-explicit-any */

export const isFunc = (value: (() => void) | undefined | null): boolean =>
  typeof value === 'function';
