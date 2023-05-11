const express = require("express");
const mongoose = require("mongoose")
const pageRoute = require("./routes/pageRoute")
const courseRoute = require("./routes/courseRoute")
const categoryRoute = require("./routes/categoryRoute")

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/smartedu-db").then(() => {
    console.log("DB bağlantısı Yapıldı")
})

//Template Engine
app.set("view engine", "ejs")

//Middlewares
app.use(express.static("public"))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//Routes
app.use("/", pageRoute)
app.use("/courses", courseRoute)
app.use("/categories", categoryRoute)


const port = 3000;
app.listen(port, () => {
    console.log(`App started on port ${port}`)
});