import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider, Box, Button, FormControl, Input, Stack} from 'native-base';
import { WarningOutlineIcon } from 'native-base';

function SignUp() {
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