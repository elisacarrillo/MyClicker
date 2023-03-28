// Import modules
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

// Import routes
const questionRouter = require("./routes/question");

// Create the express app
const app = express();

app.use(bodyParser.json());

// Use routes
app.use("/question", questionRouter);

// Start the server and listen on a specific port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
