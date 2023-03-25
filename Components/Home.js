import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NativeBaseProvider, Box, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';

// GOAL: https://answers.uillinois.edu/illinois/48459

export default function Home(props) {
    const goToLoginPage = () => {
      console.log("Going to login page");
      // TODO: navigate to login page
      props.navigation.navigate('Login');

       
    }
    const goToSignupPage = () => {
        console.log("Going to signup page");

        props.navigation.navigate('Signup');
    }
    return (
      
      <NativeBaseProvider>
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Text>Welcome to MyClicker</Text>
          {/* newline */}
          <Text> </Text>
          <Button onPress={goToLoginPage}>Google Login</Button>
          <Text> </Text>
          <Button onPress={goToLoginPage}>Login</Button>
          <Text> </Text>
          <Button onPress={goToSignupPage}>Sign Up</Button>
        </Box>
      </NativeBaseProvider>
    );
  }