function Car(color, owner) {
    // this.name = 'BMW';
    // this.length = 4900;
    // this.height = 1400;
    this.color = color;
    this.owner = owner;
}
Car.prototype.name = 'BMW';
Car.prototype.length = 4900;
Car.prototype.height = 1400;

var car = new Car('red', '婷婷');
var car1 = new Car('green', '思思');

console.log(car.name);
console.log(car1);