const queryString = require("node:querystring")

let qparams = queryString.parse("name=abhiram&age=20")
console.log(qparams)