import express from "express";
// import sequelize here
import { Sequelize, QueryTypes } from "sequelize";
import connection from "./src/config/connection.js";

const app = express();
const port = 3000;

// create instance sequelize connection
const sequelizeConfig = new Sequelize(connection.development)

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

async function blog(req, res) {
  try {
    const QueryName = "SELECT * FROM blogs ORDER BY id DESC"

    const blog = await sequelizeConfig.query(QueryName, { type: QueryTypes.SELECT })
    
    const obj = blog.map((data) => {
      return {
        ...data,
        author: "Putri Maharani Chan"
      }
    })

    res.render("blog", { data: obj });
  } catch (error) {
    console.log(error);
  }
}

function contact(req, res) {
  res.render("contact");
}

async function blogDetail(req, res) {
  try {
    const id = req.params.id;
    const QueryName = `SELECT * FROM blogs WHERE id=${id}`

    const blog = await sequelizeConfig.query(QueryName, { type: QueryTypes.SELECT })
    
    const obj = blog.map((data) => {
      return {
        ...data,
        author: "Putri Maharani Chan"
      }
    })
    console.log(obj);


    res.render("blog-detail", { data: obj[0] });
  } catch (error) {
    console.log(error);
  }
}

function addBlog(req, res) {
  res.render("add-blog");
}

function testimonial(req, res) {
  res.render("testimonial");
}

async function handleAddBlog(req, res) {
  try {
    const { title, content } = req.body;
    const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU"
  
    const QueryName = `INSERT INTO blogs(title, image, content, "createdAt", "updatedAt")
      VALUES ('${title}', '${image}', '${content}', NOW(), NOW())`;
  
    await sequelizeConfig.query(QueryName)
  
    res.redirect("/blog");
  } catch (error) {
    console.log(error)
  }
}

async function handleDeleteBlog(req, res) {
  try {
    const { id } = req.params;
    const QueryName = `DELETE FROM blogs WHERE id = ${id}`;

    await sequelizeConfig.query(QueryName)

    res.redirect("/blog");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
