import { useCallback, useState,useRef } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity,Image } from 'react-native';
import { ModalCustom } from './ModalCustom';
import { COLORS } from '../../constants/theme';
import { Place } from '../../models/place';
import Button from '../UI/Button';
//import ImagePicker from './ImagePicker';
//import LocationPicker from './LocationPicker';
import { Camera } from 'expo-camera';
import OutlinedButton from '../UI/OutlineButton';



function PlaceForm({onCreatePlace}) {
  const [enteredTitle, setEnteredTitle] = useState('');
  //const [selectedImage, setSelectedImage] = useState();
  //const [pickedLocation, setPickedLocation] = useState();
  const camera=useRef(null);
  const [startCamera,setStartCamera]=useState(false);
  const[previewVisible,setPreviewVisible]=useState(false);
  const [capturedImage,setCapturedImage]=useState();

  const openCamera=async()=>{
      try{
          const {status}=await Camera.requestCameraPermissionsAsync();
          setStartCamera(status=="granted")
      }catch(error){
          console.log(error)
      }
  }
  /*
  const takePicture=async()=>{
      const photo=await Camera.current.takePictureAsync();
      if(photo){
          console.log(photo)
          setPreviewVisible(true);
          setCapturedImage(photo);
          setStartCamera(false);
      }
  }
  */
  const takePicture = async () => {

    if (camera.current) { // Check if the camera ref is defined
        console.log('camera.current is ', camera.current);

      const photo = await camera.current.takePictureAsync();
      console.log('photo is ',photo)
      if (photo) {
        console.log(photo);
        setPreviewVisible(true);
        setCapturedImage(photo);
        setStartCamera(false);
      }
    }
  };
  


  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }
/*
  function takeImageHandler(imageUri) {
    setSelectedImage(imageUri);
  }

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);
  */

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, capturedImage.uri);
    console.log(`place data is ${placeData.title}`)
    onCreatePlace(placeData);
setEnteredTitle('')
setCapturedImage()
  }

  return (
    <ScrollView style={styles.form}>

      
      <ModalCustom visible={startCamera}
      onClose={()=>setStartCamera(false)}
      onTakePhoto={takePicture}>
        <Camera style={{height:"100%",width:"100%"}}
        ratio={"1:1"}
        ref={camera}></Camera>
      </ModalCustom>
{
    capturedImage?(
        <View>
<View style={styles.imagePreview}>
            <Image style={styles.image} source={{ uri: capturedImage.uri }} />
            
             <OutlinedButton icon="camera" onPress={()=>setStartCamera(true)}>
             Take new photo
           </OutlinedButton>
</View>
           <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <Button onPress={savePlaceHandler}>Add Place</Button>
      </View>
    ):
    (
<View style={{justifyContent:"center"}}>
    <Text style={styles.label}>To create new Place, open camera </Text>

    <OutlinedButton icon="camera" onPress={()=>openCamera()}>
             Take new photo
           </OutlinedButton>
</View>
    )
}
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    fontSize:20,
    marginBottom: 4,
    color: COLORS.tertiary,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: COLORS.secondary2,
    borderBottomWidth: 2,
    backgroundColor:'white',
  },
});