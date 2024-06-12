// Vehicle class
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  // Return a description of the vehicle
  getDescription() {
    return `${this.name} has ${this.wheels} wheels`;
  }
}

// Car class extends Vehicle
// Add number of doors
class Car extends Vehicle {
  constructor(name, wheels, doors) {
    super(name, wheels);
    this.doors = doors;
  }

  getDescription() {
    return `${super.getDescription()} and ${this.doors} doors.`;
  }
}

// Bike class extends Vehicle
class Bike extends Vehicle {
  constructor(name, wheels, type) {
    super(name, wheels);
    this.type = type;
  }

  getDescription() {
    return `${super.getDescription()} and ${this.type} type bike.`;
  }
}

const myCar = new Car("My Car", 4, 4);
console.log(myCar.getDescription()); // My Car has 4 wheels
console.log(myCar.doors); // 4

const myBike = new Bike("My Bike", 2, "offroad");
console.log(myBike.getDescription()); // My Bike has 2 wheels
console.log(myBike.type); // offroad
