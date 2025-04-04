const myHeight = -1


try {
    if (isNaN(myHeight)) {
        throw new Error("notANumberError")
    } else if (myHeight < 10) {
        throw new Error("tinyHeightError")
    } else if (myHeight > 300) {
        throw new Error("hugeHeightError")
    }
    console.log('valid height', myHeight)

} catch (error) {
    console.log(error.message)
}