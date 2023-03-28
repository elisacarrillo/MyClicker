import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, Button, FormControl, Input, Stack} from 'native-base';
//import usestate
import { useState } from 'react';
import { TextInput} from 'react-native';

// import axios
import axios from 'axios';

function Profile() {
   
    const [question, setQuestion] = useState(null);
    
    //create state for answer choices
    const [answerChoices, setAnswerChoices] = useState(null);
    
    const [showQuestion, setShowQuestion] = useState(false);

    const [text, setText] = useState(null);
    
    // const serverProcess = spawn('npm', ['run', 'start-server']);

    // serverProcess.stdout.on('data', data => {
    // console.log(`Server output: ${data}`);
    // });

    // serverProcess.stderr.on('data', data => {
    // console.error(`Server error: ${data}`);
    // });
    const submitAnswer = () => {
        console.log("Submitting answer");
        // fetch('http://localhost:3000/answer', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         // Your request payload goes here
        //         // e.g. { "question": "What is your name?" }
        //         "answer": text
        //     }),
        // })
        // .then((response) => response.json())
        // .then((responseData) => {
        //     // Handle the response data here
        //     console.log(responseData);

        // })
        // .catch((error) => {
        //     console.error(error);
        // });

        //fetch using axios
        axios.post('http://localhost:3000/answer', {
            body: JSON.stringify({
                // Your request payload goes here
                // e.g. { "question": "What is your name?" }
                "answer": text
            })
        })
        .then((response) => {
            console.log(response);
            // get question from response
            // set question to state
            setShowQuestion(false);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const fetchQuestions = () => {
        // create state for question
        
        console.log("Fetching questions");
        // fetch('http://localhost:3000/question', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
            
        // })
        // .then((response) => response.json())
        // .then((responseData) => {
        //     // Handle the response data here
        //     console.log(responseData);

        // })
        // .catch((error) => {
        //     console.error(error);
        // });
        
        //fetch using axios
        axios.get('http://localhost:3000/question')
        .then((response) => {
            console.log(response);
            // get question from response
            // set question to state
            setShowQuestion(true);
            setQuestion(response.data.text);
            console.log(response.data.question);
            // get answer choices from response
            // set answer choices to state
            setAnswerChoices(response.data.options);
            console.log(response.data.answerChoices);


        })
        .catch((error) => {
            console.log(error);
        });
    }
        // get question from server using GET request
        // call index.js in server folder

    // }
    // const getQuestion = () => {
        
    //     console.log("Getting question");
    //     fetch('http://localhost:3000/question', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             // Your request payload goes here
    //             // e.g. { "question": "What is your name?" }
    //             "question": "What is your name?"
    //         }),
    //     })
    //     .then((response) => response.json())
    //     .then((responseData) => {
    //         // Handle the response data here
    //         console.log(responseData);

    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });

    //     // get question from server using GET request
    //     // call index.js in server folder
        
    // }
    return (
       
        <NativeBaseProvider>
            <Box margin={4}>
                <Button onPress={fetchQuestions}> Get Question</Button>
            </Box>
            {/* only show the below if showQuestion is true */}
            { showQuestion &&
            <Box margin={4}>
                <Text>{ question }</Text>
                {/* map the answerchoices each on their own line */}
                { answerChoices && answerChoices.map((answerChoice) => {
                    return <Text>{ answerChoice }</Text>
                })}
                <TextInput
                    style={styles.input}
                    placeholder="Enter your answer here"
                    onChangeText={newText => setText(newText)}
                    defaultValue={text}
                />
                <Button onPress={submitAnswer}>Submit Answer</Button>
            </Box>
            }
            {/* return question and answer choices */}
            {/* <Box margin={4}>
                <Text>{ question }</Text>
                
                { answerChoices && answerChoices.map((answerChoice) => {
                    return <Text>{ answerChoice }</Text>
                })}

            </Box> */}
        </NativeBaseProvider>
      
    );
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default Profile;