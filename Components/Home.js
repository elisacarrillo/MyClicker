import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NativeBaseProvider, Box, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import image  from '../assets/background.png';

// GOAL: https://answers.uillinois.edu/illinois/48459

// image is from ../assets/background.jpg
// const image = { source: "../../assets/background.png" };
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
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
          <Box flex={1}  alignItems="center" marginTop={40}>
            <Text style={styles.text}>MyClicker</Text>
            {/* newline */}
            <Text> </Text>
            <Box marginTop={300}>
            <Button onPress={goToLoginPage} style={styles.button}>Sign In with UIUC</Button>
            </Box>
            
            
          </Box>
        </ImageBackground>
      </NativeBaseProvider>
    );
  }

  // create style sheet
  const styles = StyleSheet.create({
    background: {
      // set background image to ../assets/background.jpg
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      
      
      



    },
    text: {
      color: "black",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
    },
    button: {
      backgroundColor: "#13294B",
      color: "black",
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      width: 250,
      height: 50,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
      dropShadow: true,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderColor: "black",
      borderWidth: 1,
    },

  });