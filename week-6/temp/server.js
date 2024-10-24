const mongoose = require("mongoose");
const app = require("./app");

mongoose
    .connect(
        `mongodb+srv://abhiram:mkNyPuIilWEX9g6B@cluster0.s3euj.mongodb.net/nodetest?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then((connObj) => {
        //console.log(connObj);
        console.log(`db connection sucessful`);
    })
    .catch((err) => {
        console.log(`some error occured while connecting to DB`);
    });

//creating a movie schema with validation for each field
const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    discription: {
        type: String,
        required: [true, "discription is required and should be number"],
    },
    duration: Number,
    rating: { type: String, default: 1.0 },
});

//creating movie model,
// naming convention : first letter should be capitalized
const Movie = mongoose.model("Movie", movieSchema);

//creating a new document form model
const testMovie = new Movie({
    name: "In pursuit of happiness",
    discription: "A movie on how to live a fulfilling life",
    duration: 160,
    rating: 4.5,
});

//saviong the movie to the database,
// this returns a promoise, with the resolved value being the data being the document that is saved to the server
testMovie
    .save()
    .then((doc) => console.log(doc))
    .catch((err) => console.log(err));

app.listen(3000, () => {
    console.log(`server is running on port 3000`);
});
