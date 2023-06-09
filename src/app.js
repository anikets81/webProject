const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = 3000;

const viewPath = path.join(__dirname, "../views")
const publicPath = path.join(__dirname, "../public")
const partialPath = path.join(__dirname, "../partials")

app.set("views", viewPath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialPath);

app.use(express.static(publicPath))


app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/about", (req, res)=>{
    res.render("about");
})
app.get("/weather", (req, res)=>{
    res.render("weather");
})

app.get("*", (req, res)=>{
    res.render("404error", {
        errorMsg : "Oops! Page Not Found"
    });
})

app.listen(port, ()=>{
    console.log("listning...")
})