//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';


import { useEffect,useState } from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from './src/navigation/AppNavigator'
import { COLORS } from './src/constants/theme';
const HomeNav = createNativeStackNavigator();
import { init } from './src/utils/database';

import AppLoading from 'expo-app-loading';

console.log('App.js')
// Use Stack Navigator to navigate to various pages in app
//to start application use 
//npx expo start --tunnel
//to install expo libraries use
//npm expo install package-name
//normal library
//npm install package-name

function App() {
  const [dbInitialized, setDbInitialized]=useState(false);

useEffect(()=>{
init().then(()=>{
  setDbInitialized(true);
}).catch((err)=>{
  console.log(err);
})
},[]);

if(!dbInitialized){
  return <AppLoading/>
}

	return (
		<NavigationContainer >
			
				<HomeNav.Navigator screenOptions={{ headerShown: false }}>
					<HomeNav.Screen name='AppNavigator' component={AppNavigator} />
				</HomeNav.Navigator>
		
		</NavigationContainer>
	)
}

export default App







/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


*/
