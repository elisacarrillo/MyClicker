import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider, Box, Button, FormControl, Input, Stack} from 'native-base';
import { WarningOutlineIcon } from 'native-base';

function SignUp() {

    // registerUser = () => {
    //     console.log("Registering user");
    //     auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //     .then(() => {
    //         console.log('User account created & signed in!');
    //     })
    //     .catch(error => {
    //         if (error.code === 'auth/email-already-in-use') {
    //             console.log('That email address is already in use!');

    //         }

    //         if (error.code === 'auth/invalid-email') {
    //             console.log('That email address is invalid!');
    //         }

    //         console.error(error);
    //     });
    // }
    

        
  return (
    <NativeBaseProvider>
    <Box margin={4}>
          
            <FormControl mb="5">
            <FormControl.Label>First Name</FormControl.Label>
            <Input />
            
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Last Name</FormControl.Label>
            <Input />
            
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
            
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Username</FormControl.Label>
            <Input />
            
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Password</FormControl.Label>
            <Input />
            
          </FormControl>
          <Button colorScheme="blue" _text={{ color: 'white' }}>
            Login
          </Button>
         
        </Box>
    </NativeBaseProvider>
  );
}

export default SignUp;