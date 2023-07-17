import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import { COLORS } from '../constants/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState,useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';





function LoginScreen({navigation}){
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [actualEmail,setActualEmail]=useState('');
const [actualPassword,setActualPassword]=useState('');
const [errorText,setErrorText]=useState('error in value');




const onFooterLinkPress=()=>{
                setEmail('')
               setPassword('');
               setErrorText('error in value');
    navigation.navigate('Registration')
}

useEffect(() => {
    const fetchUserData = async () => {
      const storedEmail = await AsyncStorage.getItem('userEmail');
      const storedPassword = await AsyncStorage.getItem('userPassword');
      setActualEmail(storedEmail);
      setActualPassword(storedPassword);
    };
    fetchUserData();
  }, []);

const onLoginPress=()=>{
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailRegex.test(email)) {
        if (passwordRegex.test(password)) {
            AsyncStorage.setItem('isAuth', 'true')

            if (actualEmail === email && actualPassword === password ) {
                return navigation.replace('HomeNavigator');
            } else {
               // this.setState({ userEmail: '', userPassword: '', errorText: 'User not Registered' });
               setEmail('')
               setPassword('');
               setErrorText('User not Registered');
console.log(errorText)
                return alert(errorText);
            }

            
        } else {
          //  this.setState({ userEmail: '', userPassword: '', errorText: 'Password is incorrect' });
          setEmail('')
               setPassword('');
               setErrorText('Password is incorrect');
               console.log(errorText)
            return alert(errorText);
        }
    } else {
      //  this.setState({ userEmail: '', userPassword: '', errorText: 'Email is incorrect' });
      setEmail('')
      setPassword('');
      setErrorText('Email is incorrect');
      console.log(errorText)
        return alert(errorText);
    }

}


    return(
        /*
        <View>
 <View>
            <Text>
                Login Screen
            </Text>
        </View>
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Registration')
        }}>
           
            <Text>you have not yet signed up? sign up now </Text>
        </TouchableOpacity>

        </View>
       */
<View style={styles.container}>
<KeyboardAwareScrollView
				style={styles.scroll}
				keyboardShouldPersistTaps='always'>
				<Text style={styles.loginText}>
                    LOGIN
                </Text>
				<TextInput
					style={styles.input}
					placeholder='E-mail'
					placeholderTextColor='#aaaaaa'
					onChangeText={(text) => setEmail(text)}
					value={email}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TextInput
					style={styles.input}
					placeholderTextColor='#aaaaaa'
					secureTextEntry
					placeholder='Password'
					onChangeText={(text) => setPassword(text)}
					value={password}
					underlineColorAndroid='transparent'
					autoCapitalize='none'
				/>
				<TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
					<Text style={styles.buttonTitle}>Log in</Text>
				</TouchableOpacity>
				<View style={styles.footerView}>
					<Text style={styles.footerText}>
						Don't have an account?{' '}
						<Text onPress={onFooterLinkPress} style={styles.footerLink}>
							Sign up
						</Text>
					</Text>
				</View>
			</KeyboardAwareScrollView>
</View>



    )
}

export default LoginScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:COLORS.primary1,
        
    },
    scroll:{
        flex:1,
        width:'100%',
    },
    input:{
        height:48,
        borderRadius:5,
        overflow:'hidden',
        backgroundColor:'white',
        marginTop:10,
        marginBottom:10,
        marginLeft:30,
        marginRight:30,
        paddingLeft:16,
    },
    loginText:{
        flex:1,
        height:40,
        alignSelf:'center',
        marginTop:100,
        marginBottom:30,
        color:COLORS.tertiary,
        fontSize:30,
    fontWeight:'bold',
    },
    button:{
         backgroundColor:COLORS.tertiary,
        borderRadius:25,
        marginLeft:30,
        marginRight:30,
        marginTop:20,
        height:48,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonTitle:{
        color:COLORS.white,
        fontSize:16,
        fontWeight:'bold',
    },
    footerView:{
        flex:1,
        alignItems:'center',
        marginTop:20,
    },
    footerText:{
        fontSize:16,
        color:COLORS.secondary2,
    },
    footerLink:{
        color:COLORS.tertiary,
        fontWeight:'bold',
        fontSize:16,
    },
})