/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2016/11/29
 * Description: 构造函数相关的知识
 */

/**
 * 构造函数就是你用new创建对象时调用的函数。例如`Obeject`、`Function`、`Array`。构造函数的好处在于，所有用同一个构造函数创建的对象均有相同的属性和方法。
 * 在JavaScript中，构造函数和普通函数没有绝对语法上的区别，为了区别它们，我们将构造函数的首字母大写。
 * 当你调用new操作符创建对象的时候，new会自动创建this对象，且其类型就是构造函数的类型。构造函数本身不需要返回值，new操作符会自动帮你返回this对象。
 */

function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    }
}

var person1 = new Person(),
    person2 = new Person();

/**
 * 你可以用instanceof操作符来获取对象的类型。你也可以用构造函数属性来检查一个对象的类型。每个对象在创建的时候都会自动拥有一个构造器属性，其中包含一个指向其构造函数的引用。
 */
console.log(person1 instanceof Person);//true
console.log(person2 instanceof Person);//true
console.log(person1.constructor);//[Function: Person]
console.log(person2.constructor);//[Function: Person]

/**
 * 注意：如果忘记使用new操作符，会导致this指向的是全局对象，从而导致很多意想不到的问题，如何去解决这个问题，可以参考的方式下面的两种方式，构造函数内部进行错误检查并处理。
 */
function PersonSafeMethod(name) {
    // if (!(this instanceof PersonSafeMethod)) {
    //     return new PersonSafeMethod(name);
    // }
    if (!(this.constructor === PersonSafeMethod)) {
        return new PersonSafeMethod(name);
    }
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    }
}
var person3 = PersonSafeMethod('illuSioN4ng');
person3.sayName();

/**
 * 构造函数能够允许你给对象配置相同的属性，但是构造函数并没有消除代码的冗余，如果想要所有的对象实例共享一个方法从而达到更加高效的目的的话，这样就需要用到原型对象了。
 * 几乎所有的函数都有一个名为prototype的属性，该属性是一个原型对象用来创建新的对象实例。例如，`hasOwnProperty()`方法被定义在泛用对象`Object`的原型对象中，但可以被任何对象当做自己的属性访问。
 */
var book = {
    title: 'JavaScript Learning'
};
console.log('title' in book);//true
console.log(book.hasOwnProperty('title'));//true
console.log('hasOwnProperty' in  book);//true
console.log(book.hasOwnProperty('hasOwnProperty'));//false
console.log(Object.prototype.hasOwnProperty('hasOwnProperty'));//true

/*鉴别一个属性是否是原型属性*/
function hasPrototypeProperty(obj, name) {
    return name in obj && !obj.hasOwnProperty(name);
}

console.log(hasPrototypeProperty(book, 'title'));//false
console.log(hasPrototypeProperty(book, 'hasOwnProperty'));//true

/**
 * 1、[[prototype]]属性
 * 一个对象实例通过内部属性[[prototype]]跟踪其原型对象。该属性是一个指向该实例使用的原型对象的指针。当你用new关键字创建一个新的对象时，构造函数的原型对象会被赋给该对象的`[[prototype]]`属性。
 * 你可以用`Object.getPrototypeOf()`方法来读取`[[prototype]]`的值。**大部分js引擎在所有的对象上都支持一个`__proto__`的属性，该属性使你可以直接读写`[[prtotype]]属性。ES6规范**
 * 你也可以用`isPrototypeOf()`方法检查一个对象是否是另外一个对象的原型对象
 */
console.log(Object.getPrototypeOf(person1));//Person {}
console.log(Person.prototype);//Person {}
console.log(person1.__proto__);//Person {}
console.log(Person.prototype.isPrototypeOf(person1));//true

/**
 * 原型链
 * 当读取一个对象的属性或者方法的时候，JavaScript引擎首先在该对象的自由属性上去查找属性名字。如果找到则返回，如果自有属性中没有该属性，则会搜索`[[prototype]]`中指向的对象。如果找到则返回找不到继续往原型对象的原型对象中去查找。这个查找路线就是原型链。
 */

/**
 * 2、在构造函数中使用原型对象
 * 原型对象的共享机制使得它们成为一次性为所有对象定义方法的理想手段。
 */

function Person2(name) {
    this.name = name;
}

Person2.prototype = {
    sayName: function () {
        console.log(this.name);
    },
    favorites: []
};

var person4 = new Person2('illuSioN4ng'),
    person5 = new Person2('GodYao');
person4.sayName();
person5.sayName();
person4.favorites.push('apple');
console.log(person5.favorites);//[ 'apple' ]
console.log(person2.constructor);//[Function: Person]
console.log(person5.constructor);//[Function: Object]

/**
 * 上例中可以看出，构造函数的原型对象对于使用构造函数创建的新的对象来说都是共享的。如：favorites数组。
 * 但是上例中原型使用对象字面形式来写有一个坏处，就是constructor指向会出错。这个时候我们就要手动去设置constructor来避免这种错误。
 */
function Person3(name) {
    this.name = name;
}

Person2.prototype = {
    constructor: Person3,//显示的置顶原型对象的constructor，一般放在原型对象属性的首位来写
    sayName: function () {
        console.log(this.name);
    },
    favorites: []
};
var person6 = new Person3('illuSioN4ng');
console.log(person6.constructor);//[Function: Person3]


/**
 * 3、改变原型对象
 * 给定类型的所有对象实例都共享一个原型对象，所以你可以一次性扩展所有的对象实例。**[[prototype]]属性只包含了一个指向原型对象的指针，任何对象实例对于原型对象的修改都能立即表现在所有对象实例中。**
 * 还有一个有趣的现象。当你在一个对象上使用Object.seal()或者Object.freeze()时，完全是在操作对象的自有属性。你无法添加自有属性或者改变自有属性，但是你可以操作原型对象来扩展实例。
 */

/**
 * 总结
 * 构造函数就是用new操作符调用的普通函数。为了区分构造函数和普通函数，我们一般将构造函数的首字母大写。可以使用`instanceof`操作符或者直接访问`constructor`属性来鉴别对象是被哪个构造函数创建。
 * 每一个函数都有一个`prototype`属性，它定义了该构造函数创建的所有对象实例的共享属性。通常，共享方法和原始值被定义在原型对象中，而其他属性都定义在构造函数中。`constructor`属性实际上被定义在原型对象里供所有对象实例共享。
 * 原型对象被保存在对象实例内部的`[[prototype]]`属性中，这个属性是一个引用而不是一个拷贝副本。由于JavaScript查找属性的机制，对于原型对象的修改都能立即反应在所有的对象实例中。当你访问一个属性的时候，JavaScript根据原型链一次查找。
 */