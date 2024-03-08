const express = require("express");
// const sequelize here
const { Sequelize, QueryTypes } = require("sequelize");
const connection = require("./src/config/connection.json");
const bcrypt = require("bcrypt");
const session = require("express-session");
const flash = require("express-flash");
// import session = require('express-session';
// import flash = require('express-flash';

const app = express();
const port = 3000;

// create instance sequelize connection
const sequelizeConfig = new Sequelize(connection.development);
app.use(flash());

app.use(
  session({
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
      secure: false, // https => http
    },
    store: new session.MemoryStore(),
    saveUninitialized: true,
    resave: false,
    secret: "pinjamduluseratus",
  })
);

app.set("view engine", "hbs");
app.set("views", "src/views");

// serving static file such as css, js, image, etc
app.use("/assets", express.static("src/assets"));
// body parser for accept req.body
app.use(express.urlencoded({ extended: false }));

app.get("/", home);
app.get("/blog", blog);
app.get("/blog/:id", blogDetail);
app.get("/add-blog", addBlog);
app.post("/add-blog", handleAddBlog);
app.get("/delete-blog/:id", handleDeleteBlog);
app.get("/contact-me", contact);
app.get("/testimonial", testimonial);
app.get("/register", formRegister);
app.post("/register", register);
app.get("/login", formLogin);
app.post("/login", login);

function home(req, res) {
  
  res.render("index", {
    isLogin: req.session.isLogin,
    user: req.session.user,
  });
}

async function blog(req, res) {
  try {
    const QueryName = "SELECT * FROM blogs ORDER BY id DESC";

    const blog = await sequelizeConfig.query(QueryName, {
      type: QueryTypes.SELECT,
    });

    const obj = blog.map((data) => {
      return {
        ...data,
        author: "Putri Maharani Chan",
      };
    });

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
    console.log(id);
    const QueryName = `SELECT * FROM blogs WHERE id=${id}`;

    const blog = await sequelizeConfig.query(QueryName, {
      type: QueryTypes.SELECT,
    });

    const obj = blog.map((data) => {
      return {
        ...data,
        author: "Putri Maharani Chan",
      };
    });
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
    const image =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ61yrH-uBgiaXUvYiH8A2tMofDJrhHtdBJQ&usqp=CAU";

    const QueryName = `INSERT INTO blogs(title, image, content, "createdAt", "updatedAt")
      VALUES ('${title}', '${image}', '${content}', NOW(), NOW())`;

    await sequelizeConfig.query(QueryName);

    res.redirect("/blog");
  } catch (error) {
    console.log(error);
  }
}

async function handleDeleteBlog(req, res) {
  try {
    const { id } = req.params;
    const QueryName = `DELETE FROM blogs WHERE id = ${id}`;

    await sequelizeConfig.query(QueryName);

    res.redirect("/blog");
  } catch (error) {
    console.log(error);
  }
}

function formRegister(req, res) {
  res.render("register");
}

async function register(req, res) {
  try {
    let { name, email, password } = req.body;

    bcrypt.hash(password, 10, async function (err, dataHash) {
      if (err) {
        res.redirect("/register");
      } else {
        await sequelizeConfig.query(
          `INSERT INTO users(name, email, password, "createdAt", "updatedAt") VALUES ('${name}', '${email}', '${dataHash}', NOW(), NOW())`
        );

        res.redirect("/");
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function formLogin(req, res) {
  res.render("login");
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const queryName = `SELECT * FROM users WHERE email = '${email}'`;

    const isCheckEmail = await sequelizeConfig.query(queryName, {
      type: QueryTypes.SELECT,
    });

    if (!isCheckEmail.length) {
      req.flash("danger", "Email has not been registered");
      return res.redirect("/login");
    }

    await bcrypt.compare(
      password,
      isCheckEmail[0].password,
      function (err, result) {
        if (!result) {
          req.flash("danger", "Password wrong");
          return res.redirect("/login");
        } else {
          req.session.isLogin = true;
          req.session.user = isCheckEmail[0].name;
          req.flash("succes", "login succes");

          return res.redirect("/");
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// SELECT id, name, password, email FROM users
// SELECT * FROM users
