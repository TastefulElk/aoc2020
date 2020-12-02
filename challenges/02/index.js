const parseLine = (line) => {
  const [rule, letter, password] = line.replace(':', '').split(' ');
  const [rule1, rule2] = rule.split('-').map(Number);

  return {
    letter,
    rule1,
    rule2,
    password,
  };
};

const solve1 = (lines) => {
  const validPasswords = lines.reduce((validCount, line) => {
    const { letter, rule1: minCount, rule2: maxCount, password } = parseLine(
      line
    );
    const match = password.match(new RegExp(letter, 'g'));
    const occurrences = (match && match.length) || 0;

    return occurrences >= minCount && occurrences <= maxCount
      ? validCount + 1
      : validCount;
  }, 0);

  return validPasswords;
};

const solve2 = (lines) => {
  const validPasswords = lines.reduce((validCount, line) => {
    const { letter, rule1: pos1, rule2: pos2, password } = parseLine(line);

    const isInPos1 = password[pos1 - 1] === letter;
    const isInPos2 = password[pos2 - 1] === letter;

    const isValid = (isInPos1 && !isInPos2) || (!isInPos1 && isInPos2);
    return isValid ? validCount + 1 : validCount;
  }, 0);

  return validPasswords;
};

module.exports = {
  solve1,
  solve2,
};
