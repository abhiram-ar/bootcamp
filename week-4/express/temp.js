const express = require("express");
const fs = require("fs");
//returns a fucntion

const app = express();
//now app contains a object,which contain a bunch of function
//for creating and managing the sever

app.get("/", (req, res) => {
  //res.status(200).send("<h1>hello from server</h1>")
  //Content-type is set as text/html by default

  res.status(200).json({ name: "abhiram", age: 23 });
  //sending json response, we dont want to stingify,
  //we can pass the object as it is
});
//cb will be called when ever we get a "get" request in root url



app.post("/", (req, res) => {
  console.log("post request is made");
  res.send("hello from post response route");
});

app.listen(3000, () => {
  console.log("server listning on port 3000");
});
//create a server and also listen for incoming request
