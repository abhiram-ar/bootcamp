const express = require("express")
const { getAllMovie, getMovie, addMovie, updateMovie ,deleteMovie, validateBody} = require("../controller/movieController")

const moviesRouter = express.Router();

//param middleware, value store the value of id
moviesRouter.param("id", (req, res, next, value) => {
  console.log("movie id is " + value);
  next()
});

//rotues
moviesRouter.route("/")
  .get(getAllMovie)
  .post(validateBody,addMovie);


moviesRouter.route("/:id")
  .get(getMovie)
  .patch(updateMovie)
  .delete(deleteMovie);


module.exports = moviesRouter;``