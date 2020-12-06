const { EOL } = require('os');

const countUniqueChars = str => {
  const seen = [];
  for (let char of str) {
    if (seen.indexOf(char) === -1) seen.push(char);
  }

  return seen.length;
};

const countExistsInAllArrays = arrays => {
  const [array1, ...rest] = arrays;

  let countExistsInAll = 0;
  for (let item of array1) {
    if (rest.every(x => x.indexOf(item) !== -1)) {
      countExistsInAll++
    }
  }

  return countExistsInAll;
}

const solve1 = (groups) => {
  let totalCount = 0;
  for (let group of groups) {
    const cleanedUpString = group
      .replace(/\n/g, '') // throw away newlines

    totalCount += countUniqueChars(cleanedUpString);
  }

  return totalCount;
};

const solve2 = (groups) => {
  const total = groups.reduce((total, group) => {
    return total += countExistsInAllArrays(group.split(EOL));
  }, 0);
  return total;
};

module.exports = {
  solve1,
  solve2,
};
