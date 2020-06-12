class Vehicle {
    constructor() {
        this.brand = ''
        this.doors = 0
        this.horses = 8
        this.wheels = 0
    }

    toString() {
        return `This vehicle has been made by ${this.brand}, it features ${this.doors} doors and ${this.wheels} wheels\n`
            + `Cherry on the cake, it has ${this.horses} horses.`
    }
}

class VehicleBuilder {
    constructor(vehicle = new Vehicle()) {
        this.vehicle = vehicle
    }

    get cars() {
        return new CarBuilder(this.vehicle)
    }

    build() {
        return this.vehicle
    }
}

class CarBuilder extends VehicleBuilder {
    constructor(vehicle) {
        super(vehicle)
    }

    brand(brandName) {
        this.vehicle.brand = brandName
        return this
    }

    doors(number) {
        this.vehicle.doors = number
        return this
    }

    wheels(number) {
        this.vehicle.wheels = number
        return this
    }

    horses(number) {
        this.vehicle.horses = number
        return this
    }
}


let vb = new VehicleBuilder();
let car = vb.cars.brand('Mercedes').doors(2).wheels(4).horses(10000).build()

console.log(car.toString())