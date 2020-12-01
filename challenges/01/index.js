const solve1 = (input) => {
  let complements = {};
  for (let current of input) {
    let complement = 2020 - current;
    const exists = complements[current];
    if (exists) {
      // we found our pair
      return complements[current] * current;
    }

    complements[complement] = current;
  }

  throw new Error('no matching pairs found :(');
};

const solve2 = (input) => {
  let complements = {};
  let seen = [];
  for (let current of input) {
    let match = seen.find(x => complements[x + current])
    if (match) {
      return match * current * complements[match + current];
    }
    
    seen.push(current);
    complements[2020 - current] = current;
  }

  throw new Error('no matching pairs found :(');
};

module.exports = {
  solve1, solve2
};
