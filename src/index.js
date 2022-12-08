const express = require("express");
const mongoose = require("mongoose");
const route = require("./route");
const app = express();

app.use(express.json());

mongoose.set('strictQuery', true)

mongoose.connect("mongodb+srv://reesheeka:rishika123@cluster0.6sez6kq.mongodb.net/crypto", { useNewUrlParser: true })

    .then(() => console.log("MongoDB is connected"))
    .catch((error) => console.log(error));

app.use("/", route);

app.listen(3000, function () {
    console.log("Express App Running on Port: 3000");
});
