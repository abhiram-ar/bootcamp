const express = require("express");
const fs = require("fs");
const morgan = require("morgan")
const moviesRouter = require("./router/movieRouter");
const dotenv = require("dotenv")

dotenv.config({path:"./config.env"})

let app = express();


//configuaration
console.log(process.env)
console.log(app.get("env"));
const port = process.env.PORT || 3000



//user defined middleware
const logger = function(req,res, next){
  console.log("custom middle ware used")
  next()
}


//middleware
app.use(express.json());
process.env.NODE_ENV === "development" && app.use(morgan("dev")); 
 app.use(express.static("./public"))
app.use(logger)
app.use((req,res,next)=>{
  req.requestedAt = new Date().toISOString();
  next()
})


//home route
app.get("/", (req, res) => {
  res.status(200).send("please got to route : /api/v1/movies");
});

app.use("/api/v1/movies", moviesRouter);


app.listen(port, () => {
  console.log("server is listening on port " + port);
});
