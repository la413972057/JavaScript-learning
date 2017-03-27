/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2017/2/21
 * Description:
 */
const calc = require('./calc');

const numbersToAdd = [
    3,
    4,
    10,
    2
];

const result = calc.sum(numbersToAdd);
console.log(`The result is: ${result}`);