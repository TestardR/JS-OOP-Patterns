class Vehicle {
  drive() {}
}

class Plane extends Vehicle {
  drive() {
    console.log('I am flying high.');
  }
}

class Moto extends Vehicle {
  drive() {
    console.log('I am speeding !');
  }
}

class VehicleFactory {
  prepare(amount) {}
}

class PlaneFactory extends VehicleFactory {
  prepare(amount) {
    console.log(`I am preparing a flight for ${amount} miles!`);
    return new Plane();
  }
}

class MotoFactory extends VehicleFactory {
  prepare(amount) {
    console.log(`I am preparing a trip for ${amount} miles!`);
    return new Moto();
  }
}

let myFlight = new PlaneFactory();
myFlight.prepare(1000).drive()
let myMoto = new MotoFactory();
myMoto.prepare(500).drive() 