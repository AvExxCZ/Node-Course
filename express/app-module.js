const express = require("express");

const app = express();

// application level settings
app.set("view engine", "ejs");

// routing
app.get("/", (rey, res) => {
  res.send("home page");
});

app.post("/api/data", (req, res) => {
  req.json({
    message: "Data recived",
    data: req.body,
  });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong...");
});
