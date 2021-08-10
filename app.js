


// class Vehicle {

//     constructor(make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     honk() {
//         return 'beep'
//     }

//     toString() {
//         return `The vehical is a ${this.make}, ${this.model}, from ${this.year}`
//     }
// }

// myVehicle = new Vehicle('toyota', 'prius', '2014');

// class Car extends Vehicle {

//     constructor(make, model, year) {
//         super(make, model, year)
//         this.numWheels = 4
//     }
// }
// let myFirstCar = new Car("Toyota", "Corolla", 2005);








// class Motorcycle extends Vehicle {

//     constructor(make, model, year) {
//         super(make, model, year)
//         this.numWheels = 2;

//     }

//     revEngine() {
//         return '“VROOM!!!'
//     }
// }

// let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);


// class Garage {
//     constructor(capacity) {
//         this.vehicles = [];
//         this.capacity = capacity
//     }



//     add(newVehicle) {
//         if (!(newVehicle instanceof Vehicle)) {
//             return 'Only vehicles are allowed in here!'
//         }

//         if (this.vehicles.length >= this.capacity) {
//             return 'sorry we are full'
//         }

//         this.vehicles.push(newVehicle)
//         return 'Vehical Added!'



//     }
// }

// let garage = new Garage(2);
