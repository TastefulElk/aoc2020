const { solve1: solvePart1, solve2: solvePart2 } = require('../../challenges/01');
const { parseInputAsNumericArray } = require('../util/parseInput');
const path = require('path');

describe('[01]', () => {
  const exampleInput = [1721, 979, 366, 299, 675, 1456];

  describe('part 1', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 514579;
      const actualAnswer = solvePart1(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const input = parseInputAsNumericArray(path.resolve(__dirname, 'input.txt'));

      const expectedAnswer = 658899;
      const actualAnswer = solvePart1(input);

      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });

  describe('part 2', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 241861950;
      const actualAnswer = solvePart2(exampleInput);

      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const input = parseInputAsNumericArray(path.resolve(__dirname,'input.txt'));

      const expectedAnswer = 155806250;
      const actualAnswer = solvePart2(input);

      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
