/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2017/1/4
 * Description: 用js实现读取出字符串中每个字符重复出现的次数？
 */
var arr = 'abcdaabc';

var info = arr
    .split('')
    .reduce((p, k) => (p[k]++ || (p[k] = 1), p), {});

console.log(info); //{ a: 3, b: 2, c: 2, d: 1 }