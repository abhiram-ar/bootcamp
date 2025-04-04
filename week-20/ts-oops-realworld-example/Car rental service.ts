abstract class Vehicle {
    constructor(
        public id: number,
        public brand: string,
        public model: string,
        protected baseRate: number, // base-rate/day
        public isRented: boolean = false
    ) { }

    // each sub class should implements its logic of rental rate
    abstract getRentalRate(): number

    rent(): boolean {
        if (!this.isRented) {
            this.isRented = true
            console.log(`${this.brand} ${this.model}  (id: ${this.id}) has been rented`)
            return true
        }
        else {
            console.log(`${this.brand} ${this.model}  (id: ${this.id}) is already rented`)
            return false
        }
    }
}

class Car extends Vehicle {
    constructor(
        id: number,
        brand: string,
        model: string,
        baseRate: number,
        public seatCount: number,
        isRented?: boolean,
    ) {
        super(id, brand, model, baseRate, isRented)
    }

    // rental rate for car depends on this seat count 100rs/seat
    getRentalRate(): number {
        const extraFee = this.seatCount * 100
        return this.baseRate + extraFee
    }
}


class Truck extends Vehicle {
    constructor(
        id: number,
        brand: string,
        model: string,
        baseRate: number,
        public loadCapacityInTones: number,
        isRented?: boolean,
    ) {
        super(id, brand, model, baseRate, isRented)
    }

    // rental rate for truck depends on its load capacity, 1000rs/ton
    getRentalRate(): number {
        const extraFee = this.loadCapacityInTones * 1000
        return this.baseRate + extraFee
    }
}

class MotorCycle extends Vehicle {
    constructor(
        id: number,
        brand: string,
        model: string,
        baseRate: number,
        isRented?: boolean
    ) {
        super(id, brand, model, baseRate, isRented)
    }

    // for bike rental rate is same as base rate
    getRentalRate(): number {
        return this.baseRate
    }
}


class RentalService {
    private vechicles: Vehicle[] = []

    addVehicle(vechicle: Vehicle): void {
        this.vechicles.push(vechicle)
    }

    listVechicles(): void {
        this.vechicles.forEach(vehicle => {
            console.log(`id:${vehicle.id} | ${vehicle.brand} ${vehicle.model} | rate: ${vehicle.getRentalRate()}/day | rented: ${vehicle.isRented}`)
        })
    }

    rentVehicle(id: number): boolean {
        let foundVehicle = this.vechicles.find(vehicle => vehicle.id === id)
        if (foundVehicle) {
            return foundVehicle.rent()
        } else {
            console.log("Invalid vechicle ID")
            return false
        }
    }
}

// --------------------------Logic------------------------------------

// vehicles
const benz = new Car(1, "benz", "S class", 1000, 4)
const alto = new Car(2, "maruthi", "alto", 200, 4)
const kawasaki = new MotorCycle(3, "Kawazaki", "ninja", 300)
const truck = new Truck(4, "Mahindra", "b1", 1200, 6)


// rental service
const cochinRentalService = new RentalService()
cochinRentalService.addVehicle(benz)
cochinRentalService.addVehicle(alto)
cochinRentalService.addVehicle(kawasaki)
cochinRentalService.addVehicle(truck)

cochinRentalService.listVechicles()
console.log("")

cochinRentalService.rentVehicle(1)
cochinRentalService.rentVehicle(2)
console.log("")

cochinRentalService.listVechicles()
