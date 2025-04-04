function Car(name: string, milage: number, max_speed: number) {
    this.name = name
    this.milage = milage
    this.max_speed = max_speed
}

let myCar = new Car("toyota", 20, 115)

console.log(myCar.name)