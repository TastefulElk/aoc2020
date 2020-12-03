const traverseAndCountTrees = (patterns, downStep, rightStep) => {
  const patternLength = patterns[0].length;
  let treeCount = 0;
  let xPos = 0;
  for (let yPos = 0; yPos < patterns.length; yPos = yPos + downStep) {
    const pattern = patterns[yPos];
    if (pattern[xPos % patternLength] === '#') {
      treeCount++;
    }

    xPos = xPos + rightStep;
  }

  return treeCount;
};

const solve1 = (patterns) => {
  const treeCount = traverseAndCountTrees(patterns, 1, 3);
  return treeCount;
};

const solve2 = (patterns) => {
  const instructions = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1],
  ];

  return instructions
    .map(([down, right]) => traverseAndCountTrees(patterns, down, right))
    .reduce((x, y) => x * y);
};

module.exports = {
  solve1,
  solve2,
};
