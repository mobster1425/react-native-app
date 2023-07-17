import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import HomeNavigation from "./HomeNavigation";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect } from "react";
import PlaceDetails from "../screens/PlaceDetailsScreen";
import Map from "../screens/MapScreen";



const Stack=createNativeStackNavigator();

function AppNavigator(){
const [isAuth,isAuthenticated]=useState(false)

    useEffect(() => {
        const fetchUserData = async () => {
          
          const currentUser = await AsyncStorage.getItem('isAuth');
          if(currentUser=== true){
          isAuthenticated(currentUser);
          console.log(currentUser)
          }
        };
        fetchUserData();
      }, []);
      

//let currentUser=false;

    return(
       

<Stack.Navigator initialRouteName='LandingPage' screenOptions={{headerShown: false}}>
					
						<Stack.Screen name='HomeNavigator' component={HomeNavigation}  />
				
						<>
							<Stack.Screen
								name='LandingPage'
								component={LandingScreen}
							/>
							<Stack.Screen name='Login' component={LoginScreen} />
							<Stack.Screen name='Registration' component={RegisterScreen} />
                            <Stack.Screen name="PlaceDetails" component={PlaceDetails}/>
                          
						</>
					
				</Stack.Navigator>


       
    )
}

export default AppNavigator;

/*
  <Stack.Screen name="Map" component={Map}/>
  */