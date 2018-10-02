// @flow
const wordCount = (str: string) =>
  str.split(' ').length;

const wordCountInArray = (str: Array<string>) =>
  str.reduce(
    (prev, curr) => curr.split(' ').length,
    0
  );

console.log(wordCount('Hi world'));
