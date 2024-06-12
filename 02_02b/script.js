// Vehicle class
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  getDescription() {
    return `${this.name} has ${this.wheels} wheels.`;
  }
}

class Car extends Vehicle {
  constructor(name, doors) {
    super(name, 4);
    this.doors = doors;
  }
}

class Bike extends Vehicle {
  constructor(name, type) {
    super(name, 2);
    this.type = type;
  }
}

const myCar = new Car("My Car", 4);
console.log(myCar.getDescription()); // My Car has 4 wheels and 4 doors

const myBike = new Bike("My Bike", "offroad");
console.log(myBike.getDescription()); // My Bike has 2 wheels and is a offroad type
