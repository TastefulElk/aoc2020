const fs = require('fs');
const { EOL } = require('os');

const parseInputAsNumericArray = (file) => fs.readFileSync(file, 'utf8').split(EOL).map(Number);

module.exports = { 
  parseInputAsNumericArray
};
