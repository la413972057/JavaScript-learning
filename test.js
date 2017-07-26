function addMethod(object, name, fn)
{
    var old = object[name];
    // console.log(typeof old == 'function' ? old.length : old, fn.length);
    object[name] = function()//***************注意这里的闭包。
    {
        // console.log(arguments, arguments.length, fn.length);
        if (fn.length == arguments.length)
            return fn.apply(this, arguments);
        else if (typeof old == 'function')
            return old.apply(this, arguments);
    };
}
// 不传参数时，返回所有name
function find0()
{
    return this.names;
}
// 传一个参数时，返回firstName匹配的name
function find1(firstName)
{
    var result = [];
    for (var i = 0; i < this.names.length; i++)
    {
        if (this.names[i].indexOf(firstName) === 0)
        {
            result.push(this.names[i]);
        }
    }
    return result;
}
// 传两个参数时，返回firstName和lastName都匹配的name
function find2(firstName, lastName)
{
    var result = [];
    for (var i = 0; i < this.names.length; i++)
    {
        if (this.names[i] === (firstName + " " + lastName))
        {
            result.push(this.names[i]);
        }
    }
    return result;
}
function Users()
{
    addMethod(Users.prototype, "find", find0);
    addMethod(Users.prototype, "find", find1);
    addMethod(Users.prototype, "find", find2);
}
var users = new Users();
users.names = ["John Resig", "John Russell", "Dean Tom"];
console.log(users.find()); // 输出[ 'John Resig', 'John Russell', 'Dean Tom' ]
console.log(users.find("John")); // 输出[ 'John Resig', 'John Russell' ]
console.log(users.find("John", "Resig")); // 输出[ 'John Resig' ]
console.log(users.find("John", "E", "Resig")); // 输出undefined