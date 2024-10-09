const buff = new Buffer.from("abhiram")

console.log(buff);
console.log(buff.toJSON());
console.log(buff.toString());

buff.write("hi")
console.log(buff);