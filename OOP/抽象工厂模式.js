/**
 * Created with JetBrains WebStorm.
 * User: illuSioN4ng
 * Date: 2016/11/27
 * Description:
 */
var VehicleFactory = function(subType, superType) {
    if(typeof VehicleFactory[superType] === 'function') {
        var F = function(){};
        F.prototype = new VehicleFactory[superType]();
        subType.constructor = subType;
        subType.prototype = new F();
    }else {
        throw new Error('未创建该抽象类');
    }
};

//小汽车抽象类
VehicleFactory.Car = function() {
    this.type = 'Car';
};

VehicleFactory.Car.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function() {
        return new Error('抽象方法不能调用');
    }
};

//公交车抽象类
VehicleFactory.Bus = function() {
    this.type = 'Bus';
};

VehicleFactory.Bus.prototype = {
    getPrice: function() {
        return new Error('抽象方法不能调用');
    },
    getSpeed: function() {
        return new Error('抽象方法不能调用');
    }
};

//宝马汽车子类
var BMW = function(price, speed) {
    this.price = price;
    this.speed = speed;
};
VehicleFactory(BMW, 'Car');
BMW.prototype.getPrice = function() {
    return this.price;
};
BMW.prototype.getSpeed = function() {
    return this.speed;
};

//新建宝马汽车
var bmwCar = new BMW(10000, 1000000);
console.log(bmwCar.getPrice());
console.log(bmwCar.type);
console.log(VehicleFactory);