require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const path = require("path");

// packages
const morgan = require("morgan");
const cors = require("cors");

// routers
const uploadRouter = require("./routes/upload.routes.js");
const calculateRouter = require("./routes/calculate.routes.js");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Serve uploaded files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home page");
});

app.use("/api/upload", uploadRouter);
app.use("/api/calculate", calculateRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  app.listen(port, console.log(`Server is listening on port ${port}...`));
};

start();
