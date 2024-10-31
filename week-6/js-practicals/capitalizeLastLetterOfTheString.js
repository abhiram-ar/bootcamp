const str = "abhiram"

const letters = str.split("")
letters[letters.length -1 ] = letters[letters.length -1 ].toUpperCase()

console.log(letters.join(""));