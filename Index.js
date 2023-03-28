const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())



// Set up a route to handle POST requests for submitting a student's answer
app.post('/answer', (req, res) => {
    // Print in console the answer submitted by the student
    console.log(req.body);
    console.log(req.body.answer)



  
    // Process the answer and send a response back to the client
    // ...

  });

  // Set up a route to handle GET requests for fetching a question
    // app.get('/question', (req, res) => {
    // // Extract the question ID from the request query
    // const { questionId } = req.query;

    // // Fetch the question and send a response back to the client
    // // ...
    // });
    

    app.get('/question',  (req, res) => {
        console.log("Getting question")
        const question = {
          id: 1,
          text: 'What is the capital of France?',
          options: ['A: Paris', 'B: Berlin', 'C: Madrid', 'D: London'],
          answer: 'A'
        };
        res.json(question);
    });


  
  // Start the server and listen on a specific port

const port =  3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
