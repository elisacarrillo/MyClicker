const express = require("express");
const router = express.Router();
const { pool } = require("../db/db");

const Question = require("../models/questionModel");
const questionModel = new Question();

router.get("/random", (req, res) => {
  console.log("GET /question/random");
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

router.get("/:id", async (req, res) => {
  console.log("GET /question/:id");
  const { id } = req.params;
  try {
    const question = await questionModel.getById(id);
    res.status(200).json(question);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.post("/:id", async (req, res) => {
  console.log("POST /question/:id");
  const { text } = req.body;
  const { id } = req.params;
  try {
    const question = await questionModel.create(id, text);
    res.status(201).json(question);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

router.delete("/:id", async (req, res) => {
  console.log("DELETE /question/:id");
  const { id } = req.params;
  try {
    const question = await questionModel.delete(id);
    res.status(200).json(question);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

module.exports = router;
