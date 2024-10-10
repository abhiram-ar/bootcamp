const express = require("express");
const fs = require("fs");

let app = express();
let movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));

app.use(express.json());

app.get("/api/v1/movies", (req, res) => {
  res.status(200).json({
    status: "sucess",
    count: movies.length,
    data: {
      movies,
    },
  });
});

//route parameter - we use : to represent that the segment is a route parameter
app.get("/api/v1/movies/:id", (req,res)=>{
    let requestedId = Number(req.params.id)
    let requestdMovie = movies.find(({id}) => id === requestedId)
    res.status(200).json(requestdMovie)
})

app.post("/api/v1/movies", (req, res) => {
  console.log(req.body);
  const newId = movies[movies.length - 1].id + 1;
  const newMovie = { id:newId, ...req.body };
  movies.push(newMovie);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) console.log("error while writing to file");
    else console.log("file saved");
    res.status(201).json({
      status: "sucess",
      data:{
        movie: newMovie,
      },
    });
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
