import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "src/views");

// serving static file such as css, js, image, etc
app.use("/assets", express.static("src/assets"));

// request = dari client ke server
// respose = dari server ke client
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/blog", (req, res) => {
  res.render("blog");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
