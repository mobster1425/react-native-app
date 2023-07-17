import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState,useEffect } from 'react';

import { COLORS } from '../constants/theme';


function Profile({navigation}){

const [username,setusername]=useState(null);
const [useremail,setuseremail]=useState(null);

useEffect(() => {
  
    const getData = async () => {
        const userNameValue = await AsyncStorage.getItem('userName');
        setusername(userNameValue);
    
        const userEmailValue = await AsyncStorage.getItem('userEmail');
        setuseremail(userEmailValue);
    
        
      };
      getData();

  }, []);

 

  /*
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

  */


  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: async () => {
            await AsyncStorage.setItem('isAuth', 'false');
            navigation.replace('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };


    return(
        
        <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex: 1, paddingVertical: 30 }}>
        <View style={styles.container}>
         
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color:COLORS.tertiary }}>
             Welcome - {username}
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginTop:20,color:COLORS.tertiary }}>
             Your Email-  {useremail}
            </Text>
          </View>
        </View>

       


       

        <View style={[styles.container, { flex: 1, justifyContent: 'flex-end' }]}>
          <TouchableOpacity
                      style={styles.tile}
                      onPress={handleLogout}
                    >
                      <Text style={styles.tileText}>Log Out</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </SafeAreaView>
            );
          }
          
    


export default Profile;

const styles = StyleSheet.create({
	container: { 
		margin: 20,
        padding:10,
         alignItems:'center',
	},
	tile: { 
		paddingVertical: 10, 
		paddingHorizontal: 15, 
		borderRadius: 10, 
		backgroundColor: COLORS.tertiary, 
        
		elevation: 15 
	},
	tileText: {
		fontSize: 20, 
		fontWeight: 'bold',
        color:'white',
	}
});