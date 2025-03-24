// Write a menu driven program to do the basic mathematical operations such as addition, subtraction, 
// multiplication and division(hint: use if else ladder or switch)

class Calculator {
    constructor() { }

    add(a: number, b: number): number {
        return a + b
    }

    difference(a: number, b: number): number {
        return a - b
    }

    multiply(a: number, b: number): number {
        return a * b
    }

    divide(a: number, b: number): number | undefined {
        if (b === 0) {
            console.log("cannot divide by zero")
            return undefined
        }
        return a / b
    }
}

const math = new Calculator()

mainLoop: while (true) {
    
    console.log("Please select a operation.")
    let operation = prompt("a. Addition | b. Substraction | c. Multiplication | d. Division | e. exit: ")

    let num1 = parseInt(prompt("Enter a number: ") as string)
    let num2 = parseInt(prompt("Enter another number: ") as string)

    let res: number | undefined
    switch (operation) {
        case "a":
            res = math.add(num1, num2)
            break
        case "b":
            res = math.difference(num1, num2)
            break
        case "c":
            res = math.multiply(num1, num2)
            break
        case "d":
            res = math.divide(num1, num2)
            break
        case "e":
            break mainLoop
        default:
            console.log("Invalid operation")
            continue mainLoop
    }
    console.log(`Result is ${res}`)

    let response: string = prompt("Would you like to continue: y/n") as string
    if (response === "n" || response === "N") {
        break mainLoop
    }
}