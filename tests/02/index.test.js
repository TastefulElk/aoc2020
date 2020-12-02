const { solve1, solve2 } = require('../../challenges/02');
const { parseInputAsArray } = require('../util/parseInput');
const path = require('path');

describe('[02]', () => {
  const exampleInput = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc'
  ];

  describe('part 1', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 2;
      const actualAnswer = solve1(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 536;
      const input = parseInputAsArray(path.resolve(__dirname,'input.txt'));
      const actualAnswer = solve1(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });

  describe('part 2', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 1;
      const actualAnswer = solve2(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 558;
      const input = parseInputAsArray(path.resolve(__dirname,'input.txt'));
      const actualAnswer = solve2(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
