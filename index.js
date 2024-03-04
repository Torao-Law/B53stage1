import express from "express";
const app = express();
const port = 3000;

app.set("view engine", "hbs");
app.set("views", "src/views");

// serving static file such as css, js, image, etc
app.use("/assets", express.static("src/assets"));
// body parser for accept req.body
app.use(express.urlencoded({ extended: false }));

// request = dari client ke server
// respose = dari server ke client

// get = mengambil data
// post = mengirimkan data

app.get("/", home);
app.get("/blog", blog);
app.get("/blog-detail/:id", blogDetail);
app.get("/add-blog", addBlog);
app.post("/add-blog", handleAddBlog);
app.get("/delete-blog/:id", handleDeleteBlog);
// app.get("/edit-blog/:id");
// app.post("/edit-blog/:id", a);

// function a(req, res) {
//   const { id } = req.params;
//   const { title, content } = req.body;

//   datas.splice(id, 1, { title, content });

//   res.redirect("/blog");
// }

app.get("/contact", contact);
app.get("/testimonial", testimonial);

const datas = [];

function home(req, res) {
  res.render("index");
}

function blog(req, res) {
  res.render("blog", { data: datas });
}

function contact(req, res) {
  res.render("contact");
}

function blogDetail(req, res) {
  const id = req.params.id;

  res.render("blog-detail", { id });
}

function addBlog(req, res) {
  res.render("add-blog");
}

function testimonial(req, res) {
  res.render("testimonial");
}

function handleAddBlog(req, res) {
  // const titleData = req.body.title;
  // const content = req.body.content;

  const { title, content } = req.body;

  datas.push({ title, content });

  res.redirect("/blog");
}

function handleDeleteBlog(req, res) {
  const { id } = req.params;

  datas.splice(id, 1);

  res.redirect("/blog");
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
