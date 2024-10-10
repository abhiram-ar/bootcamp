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
app.get("/api/v1/movies/:id", (req, res) => {
  let requestedId = Number(req.params.id);
  let requestdMovie = movies.find(({ id }) => id === requestedId);

  requestdMovie
    ? res.status(200).json(requestdMovie)
    : res.status(404).json({ status: "failed" });
});

app.post("/api/v1/movies", (req, res) => {
  console.log(req.body);
  const newId = movies[movies.length - 1].id + 1;
  const newMovie = { id: newId, ...req.body };
  movies.push(newMovie);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) console.log("error while writing to file");
    else console.log("file saved");
    res.status(201).json({
      status: "sucess",
      data: {
        movie: newMovie,
      },
    });
  });
});

app.patch("/api/v1/movies/:id", (req, res) => {
  console.log("got a patch request");

  let reqID = Number(req.params.id);
  let movieToUpdate = movies.find(({ id }) => id === reqID);
  if (!movieToUpdate)
    return res
      .status(404)
      .json({ status: "failed", message: "index not found" });

  let index = movies.indexOf(movieToUpdate);

  Object.assign(movieToUpdate, req.body);
  movies[index] = movieToUpdate;

  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) return res.status(400).send("error");
    res.status(200).json({
      status: "sucess",
      data: { movies: movies[index] },
    });
  });
});

//status code 204 will not return anything
app.delete("/api/v1/movies/:id", (req, res) => {
  let reqID = Number(req.params.id);
  let movieToDelete = movies.find((el) => el.id === reqID);

  if(!movieToDelete) return res.status(404).send("invalid index")

  let movieIndex = movies.indexOf(movieToDelete);
  movies.splice(movieIndex, 1);
  console.log("delted " + movieToDelete);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) return res.status(400).send("error while saving");
    res.status(204).json({
      status: "sucess",
      data: { movie: movieToDelete}
    });
  });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
