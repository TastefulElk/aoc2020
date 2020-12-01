const solve1 = (input) => {
  const complements = {};

  for (const entry of input) {
    // check if entry is complement to an entry we've seen before
    const isComplement = complements[entry];
    if (isComplement) {
      // we found our pair
      return complements[entry] * entry;
    }

    const complement = 2020 - entry;
    complements[complement] = entry;
  }

  throw new Error('no matching pairs found :(');
};

const solve2 = (input) => {
  const complements = {};
  const seenEntries = [];
  for (const entry of input) {
    // check if entry + any previously seen entry is a needed complement
    const match = seenEntries.find(seen => complements[seen + entry]);
    if (match) {
      // we found our pairs
      return match * entry * complements[match + entry];
    }
    
    const complement = 2020 - entry;
    complements[complement] = entry;
    seenEntries.push(entry);
  }

  throw new Error('no matching pairs found :(');
};

module.exports = {
  solve1, solve2
};
