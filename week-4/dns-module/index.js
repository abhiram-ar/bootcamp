const dns = require('dns');
dns.lookup("google.com", (err,data)=>{
    if(err) return console.log(err);
    console.log(data);
})