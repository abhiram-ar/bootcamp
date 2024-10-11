const fs = require("fs");

let movies = JSON.parse(fs.readFileSync("./data/movies.json", "utf-8"));


exports.validateBody = (req, res, next) => {
  if (!req.body.name || !req.body.releaseYear) {
    return res.status(400).json({
      status: "fail",
      message: "not valid movie data",
    });
  }
  next()
}


module.exports.getAllMovie = (req, res) => {
  res.status(200).json({
    status: "sucess",
    requestedAt: req.requestedAt,
    count: movies.length,
    data: {
      movies,
    },
  });
};

module.exports.getMovie = (req, res) => {
  let requestedId = Number(req.params.id);
  let requestdMovie = movies.find(({ id }) => id === requestedId);

  requestdMovie
    ? res.status(200).json(requestdMovie)
    : res.status(404).json({ status: "failed" });
};

module.exports.addMovie = (req, res) => {
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
};

module.exports.updateMovie = (req, res) => {
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
};

module.exports.deleteMovie = (req, res) => {
  let reqID = Number(req.params.id);
  let movieToDelete = movies.find((el) => el.id === reqID);

  if (!movieToDelete) return res.status(404).send("invalid index");

  let movieIndex = movies.indexOf(movieToDelete);
  movies.splice(movieIndex, 1);
  fs.writeFile("./data/movies.json", JSON.stringify(movies), (err) => {
    if (err) return res.status(400).send("error while saving");
    res.status(204).json({
      status: "sucess",
      data: { movie: movieToDelete },
    });
  });
};
