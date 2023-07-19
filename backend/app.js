const fs = require("node:fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.json());

const cors = require("cors");

app.use(
    cors({
        origin: process.env.FRONTEND_URL ?? "http://localhost:5173",
        optionSuccessStatus: 200,
    })
);

const router = require("./routes/routes");

app.use(router);

app.use(express.static(path.join(__dirname, "../public")));

const reactIndexFile = path.join(
    __dirname,
    "..",
    "..",
    "frontend",
    "dist",
    "index.html"
  );

  if (fs.existsSync(reactIndexFile)) {
    // serve REACT resources
  
    app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));
  
    // redirect all requests to the REACT index file
  
    app.get("*", (req, res) => {
      res.sendFile(reactIndexFile);
    });
  }

module.exports = app;