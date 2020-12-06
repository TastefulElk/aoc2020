const { solve1, solve2 } = require('../../challenges/05');
const { parseInputAsArray } = require('../util/parseInput');
const path = require('path');

describe('[05]', () => {
  const exampleInput = [
    'FBFBBFFRLR', 
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL'
  ];

  describe('part 1', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 820;
      const actualAnswer = solve1(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 944;
      const input = parseInputAsArray(path.resolve(__dirname, 'input.txt'));
      const actualAnswer = solve1(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });

  describe('part 2', () => {
    it('should pass with actual input', () => {
      const expectedAnswer = 554;
      const input = parseInputAsArray(path.resolve(__dirname, 'input.txt'));
      const actualAnswer = solve2(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
