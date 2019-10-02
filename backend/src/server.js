const express = require("express");

const app = express();

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://omnistack:omnistack@omnistack-jxije.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

app.use(require("./routes"));

app.listen(3333);
