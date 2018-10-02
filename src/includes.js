// @flow
export const includes = (
  arr: Array<string>,
  value: string | number
) => {
  return arr.includes(String(value));
};
