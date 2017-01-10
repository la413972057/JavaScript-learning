/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2017/1/10
 * Description: 构造一个对象访问器，实现像原生数组一样来操作对象的方法。
 */
var Visitor = (function () {
    return {
        //截取方法
        splice: function () {
            //arguments: arguments[0]，操作的对象；其他的参数是splice参数(index,howmany,item1,.....,itemX)
            var args = Array.prototype.splice.call(arguments, 1);

            return Array.prototype.splice.apply(arguments[0], args);
        },

        //追加数据方法
        push: function () {
            //arguments: arguments[0]，操作的对象；其他的是追加数据

            //强化类数组对象，添加length属性
            // var len = arguments[0].length || 0;

            var args = this.splice(arguments, 1);//返回参数数组，[arguments[1], arguments[2], ...]，此处arguments已经被修改

            // arguments[0].length = len + args.length;

            return Array.prototype.push.apply(arguments[0], args);//现在js引擎自动会给加上length属性
        },

        //弹出最后一个的数据
        pop: function () {
            return Array.prototype.pop.call(arguments[0]);
        }
    }
})();

var a = new Object();
console.log(a.length);
Visitor.push(a, 1, 2);
console.log(a);
Visitor.push(a,  3, 4, 5, 6, 7);
console.log(a);
Visitor.pop(a);
console.log(a);
Visitor.splice(a, 2, 3, 'a', 'b');
console.log(a);