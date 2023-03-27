import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider, Box, Button, FormControl, Input, Stack} from 'native-base';
import { WarningOutlineIcon } from 'native-base';

export default function Login(props) {
  const goToProfile = () => {
    console.log("Going to profile page");
    props.navigation.navigate('Profile');
  }




  return (
    <NativeBaseProvider>
    <Box alignItems='center' margin={4}>
          
          <FormControl mb="5">
            <FormControl.Label>Username</FormControl.Label>
            <Input />
            
          </FormControl>
          <FormControl mb="5">
            <FormControl.Label>Password</FormControl.Label>
            <Input />
            
          </FormControl>
          <Button colorScheme="blue" _text={{ color: 'white' }} onPress={goToProfile}>
            Login
          </Button>
         
        </Box>
    </NativeBaseProvider>
  );
}

