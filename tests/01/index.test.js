const { solve1: solvePart1, solve2: solvePart2 } = require('../../challenges/01');

describe('[01]', () => {
  const exampleInput = [1721, 979, 366, 299, 675, 1456];

  describe('part 1', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 514579;
      const actualAnswer = solvePart1(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });

  describe('part 2', () => {
    it('should pass with example input', () => {
      const expectedAnswer = 241861950;
      const actualAnswer = solvePart2(exampleInput);
      expect(actualAnswer).toEqual(expectedAnswer);
    });
  });
});
