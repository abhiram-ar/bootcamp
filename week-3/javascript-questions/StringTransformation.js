let str = ["abhiram", "drisya" , "suku"]
let formatted = str.map(name => name[0].toUpperCase() + name.slice(1) )

console.log(formatted)