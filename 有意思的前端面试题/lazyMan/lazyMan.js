/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2017/1/3
 * Description:
 * 实现一个LazyMan，可以按照以下方式调用:
     LazyMan('Hank')输出:
     Hi! This is Hank!
    
     LazyMan('Hank').sleep(10).eat('dinner')输出
     Hi! This is Hank!
     //等待10秒..
     Wake up after 10
     Eat dinner~
    
     LazyMan('Hank').eat('dinner').eat('supper')输出
     Hi This is Hank!
     Eat dinner~
     Eat supper~
    
     LazyMan('Hank').sleepFirst(5).eat('supper')输出
     //等待5秒
     Wake up after 5
     Hi This is Hank!
     Eat supper
    
     以此类推。
 */

function _lazyMan(name){
    this.task = [];
    let self = this,
        fn = (function(n){
            let _name = n;
            return function(){
                console.log('Hi! This is ' + _name + '!');
                self.next();
            }
        })(name);
        this.task.push(fn);
        setTimeout(function(){
            self.next();
        }, 0);// 在下一个事件循环启动任务
}

_lazyMan.prototype.next = function(){
    let fn = this.task.shift();
    fn && fn();
};

_lazyMan.prototype.sleep = function(time){
    let self = this,
        fn = (function(time){
            return function(){
                setTimeout(function(){
                    console.log('Wake up after ' + time);
                    self.next();
                }, time * 1000);
            }
        })(time);
        this.task.push(fn);
        return this;
};

_lazyMan.prototype.sleepFirst = function(time){
    let self = this,
        fn = (function(time){
            return function(){
                setTimeout(function(){
                    console.log('Wake up after ' + time);
                    self.next();
                }, time * 1000);
            }
        })(time);
    this.task.unshift(fn);
    return this;
};

_lazyMan.prototype.eat = function(name){
    let self = this,
        fn = (function(_name){
            return function(){
                console.log('Eat ' + _name + '~');
                self.next();
            }
        })(name);
    this.task.push(fn);
    return this;
};

function LazyMan(name){
    return new _lazyMan(name);
}

// LazyMan('Hank');
// LazyMan('Hank').sleep(10).eat('dinner');
// LazyMan('Hank').eat('dinner').eat('supper');
LazyMan('Hank').sleepFirst(5).eat('supper');
