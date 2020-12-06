const { solve1, solve2 } = require('../../challenges/06');
const { parseInputGroupedByEmptyLine } = require('../util/parseInput');
const path = require('path');
const { EOL } = require('os');

describe('[06]', () => {
  const exampleInput = [
    'abc',
    `a${EOL}b${EOL}c`,
    `ab${EOL}ac`,
    `a${EOL}a${EOL}a${EOL}a`,
    'b',
  ];

  describe('part 1', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 11;
      const actualAnswer = solve1(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 6799;
      const input = parseInputGroupedByEmptyLine(path.resolve(__dirname, 'input.txt'));
      const actualAnswer = solve1(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });

  describe('part 2', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 6;
      const actualAnswer = solve2(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 3354;
      const input = parseInputGroupedByEmptyLine(path.resolve(__dirname, 'input.txt'));
      const actualAnswer = solve2(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
