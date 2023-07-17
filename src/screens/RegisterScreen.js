import {View,Text,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import { COLORS } from '../constants/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useState,useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


function RegisterScreen({navigation}){

    const [fullName,setFullName]=useState('');
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
const [emailError,setEmailError]=useState(false);
const [passwordError,setPasswordError]=useState(false);
const [confirmpasswordError,setConfirmPasswordError]=useState(false);

const onFooterLinkPress=()=>{


    navigation.navigate('Login')
}

const onRegisterPress=async()=>{


    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   // let phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;

    if (emailRegex.test(email)) {
     //   this.setState({ mobileError: false })
       setEmailError(true)
            if (passwordRegex.test(password)) {
               // this.setState({ passwordError: true })
               setPasswordError(true)
                if (password === confirmPassword) {
                  //  this.setState({ passwordError: false, confirmPasswordError: false })
                    setPasswordError(false)
                    setConfirmPasswordError(false)

                    await AsyncStorage.setItem('userName', fullName)
                    await AsyncStorage.setItem('userEmail', email)
                    await AsyncStorage.setItem('userPassword', password)
                    
                    await AsyncStorage.setItem('isAuth', 'true')
                    
                return navigation.replace('HomeNavigator');
                }
            }
           // this.setState({ password: '', confirmPassword: '', passwordError: true, confirmPasswordError: true })
           setConfirmPassword('')
           setPassword('')
           setConfirmPasswordError(true)
           setConfirmPasswordError(true)
            return alert('Password Not Matching');
        
       // this.setState({ mobile: '', mobileError: true })
      //  return alert('Mobile Number Incorrect');
    }

    //this.setState({ emailError: true })
    setEmailError(true)

    return alert('Email Incorrect');
}


    return(
        <View style={styles.container}>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps='always'>
          <Text style={styles.RegisterText}>
                    REGISTER
                </Text>
            <TextInput
                style={styles.input}
                placeholder='Full Name'
                placeholderTextColor='#aaaaaa'
                onChangeText={(text) => setFullName(text)}
                value={fullName}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
            />
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
            <TextInput
                style={styles.input}
                placeholderTextColor='#aaaaaa'
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid='transparent'
                autoCapitalize='none'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onRegisterPress()}>
                <Text style={styles.buttonTitle}>Create account</Text>
            </TouchableOpacity>
            <View style={styles.footerView}>
                <Text style={styles.footerText}>
                    Already got an account?{' '}
                    <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                        Log in
                    </Text>
                </Text>
            </View>
        </KeyboardAwareScrollView>
    </View>
    )
}

export default RegisterScreen;


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
    RegisterText:{
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