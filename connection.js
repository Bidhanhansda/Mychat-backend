const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.43297dg.mongodb.net/?retryWrites=true&w=majority`).catch (error => console.log(error)).then(console.log("connected to mongodb"));