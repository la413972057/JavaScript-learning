/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2017/2/21
 * Description:
 */
function sum (arr) {
    return arr.reduce(function(a, b) {
        return a + b
    }, 0);
}

module.exports.sum = sum;