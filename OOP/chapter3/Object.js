/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2016/11/20
 * 对象相关（1）
 */

/**
 * 1、Description: 定义属性。**创建对象的方式有两种：使用Object构造函数或使用对象的字面形式**
 */
var person1 = {
    name: 'GodYao'
},
    person2 = new Object();
person2.name = 'Yao47';

person1.age = 24;
person2.age = 24;

console.log(person1);
console.log(person2);
console.log('******************************');
/**
 *     当一个属性第一次添加给对象的时候，JavaScript在对对象上调用一个名为`[[Put]]`的内部方法。`[[Put]]`方法会在对象上创建一个新节点来保存属性，就想第一次在哈希表上添加一个键一样。
 *     调用`[[Put]]`方法的结果是在对象上创建了一个自有属性。一个自有属性表明仅仅该指定的的对象实例拥有该属性。该属性被直接保存在该实例中，对该属性的所有操作都必须通过该对象进行。
 *     当一个已有属性被赋值的时候，调用的是一个名为`[[Set]]`的方法，该方法把当前属性值替换为新值。
 */



/**
 * 2、Description: 属性探测。由于对象的属性可以在任何时候添加，所以有的时候需要对对象进行检查是否已有一个属性。
 */
//一个错误的例子
if(person1.name) {
    //do somthing
    console.log(person1.age);
}
console.log('******************************');
/**
 * 在JavaScript中类型的强制转换会影响上述模式的输出结果。当if判断的值是一个对象、非空字符、非零数字以及true时，判断为真；而当值为null、undefined、0、false、NaN或空字符串的时候判断为假。由于一个对象的属性值可能包含这些假值，从而导致上述代码错误。
 */


/**
 * in操作符在给定的对象中查找一个给定名称的属性，如果找到则为返回true。即便属性是方法也可以用这种方法判断。
 */
console.log('name' in person1);//true
console.log('age' in person1);//true
console.log('sex' in person1);//false
console.log('******************************');

/**
 * 然而在某些情况下，你可能希望仅当一个属性是自有属性才检查其是否存在。
 * in操作符会检查自有属性和原型属性，所以在合格时候就需要使用hasOwnProperty()方法该方法在给定的属性存在且为自有属性的时候返回true
 */
var person3 = {
    name: 'GodYaoyaoyao',
    sayName: function() {
        console.log(this.name);
    }
}
console.log('name' in person3);//true
console.log(person3.hasOwnProperty('sayName'));//true

console.log('toString' in person3);//true
console.log(person3.hasOwnProperty('toString'));//false

console.log('******************************');


/**
 * 3、Description：删除属性。
 * 正如属性可以在任何时候被添加到对象上，它们也可以在任何时候被移除。但是设置一个属性值为null并不能从对象中彻底删除这个属性，只是调用了[[Set]]内部方法用null替代了原来的属性值而已。所以彻底删除一个属性需要调用delete操作符。
 * delete操作符针对单个对象属性调用名为[[Delete]]的内部方法。你可以理解成删除哈希表中的键值对。当delete操作成功时，返回true。
 */

var person4 = {
    name: 'illuSioN4ng'
};

console.log("name" in person4);//true
console.log(delete person4.name);//true
console.log("name" in person4);//false

console.log('******************************');


/**
 * 4、Description: 属性枚举
 * 所有你所添加的属性都是默认可枚举的，也就说你可以用for-in来遍历它们。可枚举属性的内部特性[[enumerable]]都被设置为true。
 * for-in循环会枚举一个对象所有的可枚举属性并将属性名赋给一个变量。*/

var obj = {
    "1": 1,
    "2": 2,
    "3": 3
},
    property;
for(property in obj) {
    console.log('Name: ' + property + '; Value: ' + obj[property]);
}
console.log('******************************');

/**
 * ECMAScript5 中引入了一个Object.keys()方法，它可以获取可枚举属性(自有属性)的数组。
 */
var properties = Object.keys(obj);
console.log(properties);
for(var i = 0, len = properties.length; i < len; i++) {
    console.log('Name: ' + properties[i] + '; Value: ' + obj[properties[i]]);
}
console.log('******************************');

/**
 * 并不是所有的属性都是可枚举的。
 * 实际上大部分原生方法的[[enumerable]]特征都被设置为false，你可以使用propertyIsEnumerable()方法来检查属性的可枚举性，每个对象都拥有该方法。
 */
console.log("length" in properties);//true
console.log(properties.propertyIsEnumerable('length'));//false
console.log('******************************');


/**
 * 5、Description：属性类型
 * 属性有两种类型：数据类型和访问器类型。
 * 数据属性包含一个值。[[Put]]方法默认行为是创建数据属性。
 * 访问器属性不包含值而定义了一个值被读取的时候调用的函数（成为getter）和一个当属性被写入时调用的函数（称为setter）。
 * 在对象字面形式中定义访问器属性有特殊的语法，如下例。
 */
var person5 = {
    _name: 'GodYaoyaoyao',

    get name() {
        console.log('reading name...');
        return this._name;
    },
    set name(value) {
        console.log('setting name to %s', value);
        this._name = value;
    }
};
console.log(person5.name);  //reading name...
                            //GodYaoyaoyao
person5.name = 'GodYao';    //setting name to GodYao
console.log(person5.name);  //GodYao