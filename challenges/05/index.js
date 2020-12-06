const getSeatId = (row, col) => row * 8 + col;

const search = (instructions, total, upOperator, downOperator) => {
  let upperBound = total;
  let lowerBound = 0;

  for (let instruction of instructions) {
    if (instruction === downOperator) {
      upperBound = Math.floor((upperBound - lowerBound) / 2) + lowerBound;
    } else if (instruction === upOperator) {
      lowerBound = Math.ceil((lowerBound + upperBound) / 2);
    } else {
      throw new Error('Unexpected instruction', instruction);
    }
  }

  if (upperBound !== lowerBound) {
    throw new Error(
      'Expected upperBound to equal lowerBound after all instructions',
      { lowerBound, upperBound }
    );
  }

  return upperBound;
};

const getRow = (boardingPass) =>
  search(boardingPass.slice(0, 7), 127, 'B', 'F');

const getCol = (boardingPass) =>
  search(boardingPass.slice(7, boardingPass.length), 7, 'R', 'L');

const solve1 = (boardingPasses) => {
  const highestSeatId = boardingPasses.reduce((highest, boardingPass) => {
    const row = getRow(boardingPass);
    const col = getCol(boardingPass);
    const seatId = getSeatId(row, col);

    return highest > seatId ? highest : seatId;
  }, 0);

  return highestSeatId;
};

const solve2 = (boardingPasses) => {
  const seatIds = boardingPasses.map(boardingPass => {
    const row = getRow(boardingPass);
    const col = getCol(boardingPass);
    const seatId = getSeatId(row, col);

    return seatId;
  });

  const sortedSeatIds = seatIds.sort((a, b) => a - b);
  for (let i = 0; i < sortedSeatIds.length; i++) {
    const seatId = sortedSeatIds[i];
    const nextSeatId = sortedSeatIds[i + 1];

    if (nextSeatId - seatId !== 1) {
      return nextSeatId - 1;
    }
  }
};

module.exports = {
  solve1,
  solve2,
};
