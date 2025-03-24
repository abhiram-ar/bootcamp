//  Income tax is calculated as per the following table

let salary = parseInt(prompt("Enter your salary: ") as string)

let tax: number | undefined = undefined

if (salary > 0 && salary < 250000) {
    tax = 0
} else if (salary < 500000) {
    tax = salary * 5 / 100
} else if (salary < 1000000) {
    tax = salary * 20 / 100
} else if (salary < 5000000) {
    tax = salary * 30 / 100
} else {
    console.log("Please contact income tax dept.")
}


if (typeof tax === "number") {
    console.log("Your income tax amount is ", tax)
}