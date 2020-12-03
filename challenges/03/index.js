const solve1 = (patterns) => {
  const patternLength = patterns[0].length;

  let treeCount = 0;
  let i = 0;
  for (const pattern of patterns) {
    if (pattern[i % patternLength] === '#') {
      treeCount++;
    }

    i = i + 3;
  }

  return treeCount;
};

const solve2 = (lines) => {};

module.exports = {
  solve1,
  solve2,
};
