const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const isBetweenYears = (year, min, max) => year >= min && year <= max;

const isValidHeight = (height) => {
  if (!height) return;
  const unit = height.slice(height.length - 2);

  if (unit === 'cm') {
    const value = Number(height.slice(0, 3));
    return value >= 150 && value <= 193;
  }

  if (unit === 'in') {
    const value = Number(height.slice(0, 2));
    return value >= 59 && value <= 76;
  }

  // invalid or missing unit
  return false;
};

const isValidHairColor = (color) => color && color.match(/^#[0-9a-f]{6}$/);

const isValidEyeColor = (color) =>
  color && color.match(/^amb|blu|brn|gry|grn|hzl|oth$/);

const isValidPassportId = (id) => id && id.match(/^[0-9]{9}$/);

const strictValidationRules = [
  (x) => isBetweenYears(Number(x['byr']), 1920, 2002),
  (x) => isBetweenYears(Number(x['iyr']), 2010, 2020),
  (x) => isBetweenYears(Number(x['eyr']), 2020, 2030),
  (x) => isValidHeight(x['hgt']),
  (x) => isValidHairColor(x['hcl']),
  (x) => isValidEyeColor(x['ecl']),
  (x) => isValidPassportId(x['pid']),
];

// Check that passport has a non-empty value for each required field
const validatePassport = (passport) =>
  requiredFields.every((x) => !!passport[x]);

const validatePassportStrict = (passport) =>
  strictValidationRules.every((rule) => rule(passport));

// group array by empty value in array. ['a', 'b', '', 'c'] => [['a', 'b'], ['b']]
const groupByEmpty = (arr) => { 
  const groups = [];
  let group = [];
  for (let item of arr) {
    if (item === '') {
      groups.push(group);
      group = [];
      continue;
    }

    group.push(item);
  }

  groups.push(group);

  return groups;
};

const parsePassport = (passportLines) => {
  const passport = passportLines.reduce((passport, line) => {
    line.split(' ').forEach((x) => {
      const [key, value] = x.split(':');
      passport[key] = value;
    });
    return passport;
  }, {});

  return passport;
};

const solve1 = (lines) => {
  const passportGroups = groupByEmpty(lines);
  const passports = passportGroups.map(parsePassport);
  return passports.reduce(
    (count, x) => (validatePassport(x) ? count + 1 : count),
    0
  );
};

const solve2 = (lines) => {
  const passportGroups = groupByEmpty(lines);
  const passports = passportGroups.map(parsePassport);
  return passports.reduce(
    (count, x) => (validatePassportStrict(x) ? count + 1 : count),
    0
  );
};

module.exports = {
  solve1,
  solve2,
};
