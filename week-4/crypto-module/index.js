const crypto = require("node:crypto")

let hash  = crypto.createHash("sha256").update("password").digest("hex")

console.log(hash)