const myString = "abhiram"

try {
    myString.split("").reverse()
    console.log(`revered sring: ${myString}`)
} catch (error) {
    console.log(error.message)
} finally {
    console.log(`typeof ${myString}: ${typeof myString}`)
}

