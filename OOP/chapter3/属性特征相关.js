/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2016/11/20
 * Description:
 */

/**
 * 1、通用特征。
 * 有两个属性特征是数据和访问器属性所共有的。一个是[[enumerable]]，决定你是否可以遍历该属性；一个是[[configurable]]，决定该属性是否可配置。你可以使用delete删除一个可配置的属性或者随时改变它。（**你声明的所有属性默认都是可枚举可配置的。**）
 * 如果你想要改变属性特征，可以使用Object.defineProperty()方法。该方法接收三个参数：拥有该属性的对象、属性名、包含需要配置属性特征的描述对象。*/
var person1 = {
    name: 'illuSioN4ng'
};
Object.defineProperty(person1, 'name', {
    enumerable: false
});
console.log('name' in person1);//true
console.log(person1.propertyIsEnumerable('name'));//false
console.log('******************************');

var properties = Object.keys(person1);
console.log(properties.length);//0
console.log('******************************');

Object.defineProperty(person1, 'name', {
    configurable: false
});

delete person1.name;//严格模式下回报错
console.log('name' in person1);//true
console.log(person1.name);//'illuSioN4ng'
console.log('******************************');

//Object.defineProperty(person1, 'name', {
//    configurable: true
//});// Cannot redefine property: name

/**
 * 2、数据属性特征
 * 数据属性拥有两个访问器属性不具备的特性。
 * [[Value]]，包含属性的值；[[Writable]]，布尔值，指示该该属性是否可以写入。（所有属性都是默认可写的，除非你手动制定。）
 */
var person2 = {},
    person3 = {
        name: 'illuSioN4ng3'
    };
Object.defineProperty(person2, 'name', {
    value: 'illuSioN4ng2',
    enumerable: true,
    configurable: true,
    writable: true
});//使用这种方式定义新的属性的时候一定要为所有的特征指定一个值，否则均会默认为false。
console.log(person2);
console.log(person3);
console.log('******************************');

/**
 * 3、访问器属性特征
 * 访问器属性也有两个额外的特征。[[Get]]和[[Set]]，内涵getter,setter函数*/
var person4 = {
    _name: 'illuSioN4ng 4',

    get name() {
        console.log('reading name...');
        return this._name;
    },
    set name(value) {
        console.log('setting name to %s', value);
        this._name = value;
    }
};//可以用以下方式来写

var person5 = {
    _name: 'illuSioN4ng 5'
};
Object.defineProperty(person5, 'name', {
    get: function(){
        console.log('reading name...');
        return this._name;
    },
    set: function(value){
        console.log('setting name to %s', value);
        this._name = value;
    },
    enumerable: true,
    configurable: true
});
console.log(person4);
console.log(person5);
console.log(person4.name);
console.log(person5.name);
console.log('******************************');

/**
 * 4、定义多重属性。
 * Object.defineProperties()方法来定义多重属性。接收两个参数，一个是需要改变的对象，一个是包含所有属性信息的对象。
 * 5、获取属性。Object.getOwnPropertyDescriptor()方法*/
console.log(Object.getOwnPropertyDescriptor(person4, 'name'));
    /*{ get: [Function: name],
     set: [Function: name],
     enumerable: true,
     configurable: true }*/
console.log(Object.getOwnPropertyDescriptor(person5, 'name'));
    /*{ get: [Function],
     set: [Function],
     enumerable: true,
     configurable: true }*/

/**
 * 禁止修改对象
 * [[extensible]]禁止修改对象，布尔值
 * 三种方法：
 * 1、Object.preventExtensions()创建不可扩展对象，无法添加新属性
 * 2、Object.seal()创建被封印对象，不可扩展且属性不可配置
 * 3、Object.freeze()创建被冻结属性，被封印且数据属性不可写
 */