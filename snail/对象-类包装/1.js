var person = {
    name: '酒神',
    age: 20,
    sex: 'boy',
    drink: function() {
        console.log('I am drinking');
        this.health++;
    },
    smoke: function() {
        console.log('I am smoking: 华子');
        this.health--;
    },
    health: 100
}
// person.health++;
// console.log(person.health);


// person.smoke();
// person.drink();
// person.drink();
// console.log(person.health);


// 增加属性
// person.boyfriend = 'MrZhou';
// console.log(person);

// 查
// console.log(person.sex);

// 改
// person.sex = 'girl';
// console.log(person.sex);

// 删
// delete person.name;
// delete person.sex;
// console.log(person);

// 访问对象中没有的属性并不会报错，值为undefined
// console.log(person.cat);
// console.log(person);


// 对象的创建
// 1. var obj = {}
// 2. 构造函数
//     1)  系统自带的构造函数
//     2)  自定义的构造函数


function Car(color) {
    this.name = 'BMW';
    this.height = '1440';
    this.long = '4900';
    this.weight = 1000;
    this.health = 100;
    this.run = function() {
        this.health--;
    }
    this.color = color;
}
var car = new Car('black');
var car1 = new Car('white');

car.name = '红旗';
car1.name = '劳斯莱斯';

car.run();
console.log(car1.health);