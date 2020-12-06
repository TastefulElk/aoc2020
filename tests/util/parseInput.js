const fs = require('fs');
const { EOL } = require('os');

const parseInputAsNumericArray = (file) =>
  fs.readFileSync(file, 'utf8').split(EOL).map(Number);

const parseInputAsArray = (file) => fs.readFileSync(file, 'utf8').split(EOL);

const parseInputGroupedByEmptyLine = (file) =>
  fs
    .readFileSync(file, 'utf8')
    .split(`${EOL}${EOL}`);

module.exports = {
  parseInputAsArray,
  parseInputAsNumericArray,
  parseInputGroupedByEmptyLine,
};
