/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2016/11/10
 * Description: 使用__proto__手动检索对象属性
 */

var objectCreate = function(arg) {
    if(!arg) {
        return {};
    }
    function obj(){};
    obj.prototype = arg;
    return new obj();
};
Object.create = Object.create || objectCreate;//浏览器兼容问题

var proto = {
    sentence: 4,
    probation: 2
};

var makePrisoner = function(name, id) {
    var prisoner = Object.create(proto);
    prisoner.name = name;
    prisoner.id = id;

    return prisoner;
};

var firstPrisoner = makePrisoner('GodYao', '11A');
console.log(firstPrisoner);//{ name: 'GodYao', id: '11A' }
console.log(firstPrisoner.__proto__);//{ sentence: 4, probation: 2 }
console.log(firstPrisoner.__proto__.__proto__);//{}
console.log(firstPrisoner.__proto__.__proto__.__proto__);//null
//console.log(firstPrisoner.__proto__.__proto__.__proto__.__proto__);//null's __proto__ is error