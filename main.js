const yargs = require('yargs');

// Define command line arguments
const argv = yargs
  .option('value1', {
    alias: 'v1',
    describe: 'First value',
    demandOption: true,
    type: 'number',
  })
  .option('value2', {
    alias: 'v2',
    describe: 'Second value',
    demandOption: true,
    type: 'number',
  })
  .option('sign', {
    alias: 's',
    describe: 'Math operation sign',
    demandOption: true,
    choices: ['+', '-', '*', '/'],
  })
  .help()
  .argv;

// Extract values and sign from command line arguments
const { value1, value2, sign } = argv;

// Perform the calculation based on the provided sign
let result;
switch (sign) {
  case '+':
    result = value1 + value2;
    break;
  case '-':
    result = value1 - value2;
    break;
  case '*':
    result = value1 * value2;
    break;
  case '/':
    result = value1 / value2;
    break;
  default:
    console.error('Invalid sign. Please use +, -, *, or /.');
    process.exit(1);
}

// Output the result
console.log(`${value1} ${sign} ${value2} = ${result}`);
