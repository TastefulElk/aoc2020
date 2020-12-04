const { solve1, solve2 } = require('../../challenges/04');
const { parseInputAsArray } = require('../util/parseInput');
const path = require('path');

describe('[04]', () => {
  const exampleInput = [
    'ecl:gry pid:860033327 eyr:2020 hcl:#fffffd',
    'byr:1937 iyr:2017 cid:147 hgt:183cm',
    '',
    'iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884',
    'hcl:#cfa07d byr:1929',
    '',
    'hcl:#ae17e1 iyr:2013',
    'eyr:2024',
    'ecl:brn pid:760753108 byr:1931',
    'hgt:179cm',
    '',
    'hcl:#cfa07d eyr:2025 pid:166559648',
    'iyr:2011 ecl:brn hgt:59in',
  ];

  describe('part 1', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 2;
      const actualAnswer = solve1(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 200;
      const input = parseInputAsArray(path.resolve(__dirname, 'input.txt'));
      const actualAnswer = solve1(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });

  describe('part 2', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 2;
      const actualAnswer = solve2(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 116;
      const input = parseInputAsArray(path.resolve(__dirname, 'input.txt'));
      const actualAnswer = solve2(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
