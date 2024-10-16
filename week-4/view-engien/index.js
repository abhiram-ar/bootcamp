const express = require("express");
const app = express();

//register viewengine
app.set("view engine", "ejs");

app.use(express.static("./public"))

//rotues
app.get("/", (req, res) => {
  console.log(req.query)
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/home", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
      imgURL: "blog (1).jpeg",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
      imgURL: "blog (2).jpeg",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
      imgURL: "blog (3).jpeg",
    },
  ];

  res.render("index", { title: "home", name: "abhiram" , blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});
//redirecting
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create blog" });
});

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "error" });
});

//server
app.listen(3000, () => {
  console.log("server is listening of port 3000");
});
