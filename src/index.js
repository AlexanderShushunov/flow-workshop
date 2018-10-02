// @flow
const wordCount = (
  str: string | Array<string>
) => {
  if (Array.isArray(str)) {
    return str.reduce(
      (prev, curr) =>
        prev + curr.split(' ').length,
      0
    );
  }
  return wordCount([str]);
};

console.log(wordCount(['Hi world', 'one more']));
