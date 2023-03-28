const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.post("/answer", (req, res) => {
  console.log(req.body);
  console.log(req.body.answer);
});

app.get("/question", (req, res) => {
  console.log("Getting question");
  const question1 = {
    id: 1,
    text: "What is the capital of France?",
    options: ["A: Paris", "B: Berlin", "C: Madrid", "D: London"],
    answer: "A",
  };
  const question2 = {
    id: 2,
    text: "What is the capital of Germany?",
    options: ["A: Paris", "B: Berlin", "C: Madrid", "D: London"],
    answer: "B",
  };
  const chosen = Math.random() > 0.5 ? question1 : question2;
  res.json(chosen);
});

// Start the server and listen on a specific port
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
