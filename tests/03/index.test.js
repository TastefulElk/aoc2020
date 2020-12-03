const { solve1, solve2 } = require('../../challenges/03');
const { parseInputAsArray } = require('../util/parseInput');
const path = require('path');

describe('[03]', () => {
  const exampleInput = [
    '..##.......',
    '#...#...#..',
    '.#....#..#.',
    '..#.#...#.#',
    '.#...##..#.',
    '..#.##.....',
    '.#.#.#....#',
    '.#........#',
    '#.##...#...',
    '#...##....#',
    '.#..#...#.#',
  ];

  describe('part 1', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 7;
      const actualAnswer = solve1(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });

    it('should pass with actual input', () => {
      const expectedAnswer = 244;
      const input = parseInputAsArray(path.resolve(__dirname, 'input.txt'));
      const actualAnswer = solve1(input);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
