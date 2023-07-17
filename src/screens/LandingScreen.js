import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { COLORS } from '../constants/theme';

function LandingScreen({navigation}){



    return(
        /*
        <View>
        <View>
            <Text>
              Welcome to react-native-app
            </Text>
            </View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Login')
            }}>
<Text>
    Login
</Text>
            </TouchableOpacity>


        </View>
        */
       <View style={styles.container}>
        <Text style={styles.HeaderText}>
            WELCOME TO ENJOYNATURE APPLICATION
        </Text>

        <Text style={styles.DescriptionText}>ENJOYNATURE IS AN APPLICATION FOR ENJOYING NATURE</Text>
        <TouchableOpacity style={styles.Button} onPress={()=>{
                navigation.navigate('Login')
            }}>
<Text style={styles.ButtonText}>
    Login
</Text>
            </TouchableOpacity>
       </View>
    )
}




export default LandingScreen;

const styles=StyleSheet.create({
wrapper:{},
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
   
    margin:40,
    lineHeight:1.5,
},
Button:{
   
   paddingTop:5,
   paddingBottom:5,
    paddingLeft:50,
    paddingRight:50,

    backgroundColor:COLORS.tertiary,
    borderRadius:25,
},
HeaderText:{
    fontSize:40,
    fontWeight:'bold',
    paddingBottom:5,
    color:COLORS.secondary2,
    marginBottom:25,
    marginTop:25,
    letterSpacing:1.5,
},
bold:{
    fontWeight:'bold',
},
DescriptionText:{
    color:COLORS.secondary2,
  fontSize:20,
    marginTop:15,
    marginBottom:30,
    letterSpacing:1.5,
},
ButtonText:{
    color:COLORS.white,
}

})