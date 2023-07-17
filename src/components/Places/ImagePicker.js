import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { useState,useRef } from 'react';

import { COLORS } from '../../constants/theme';
import OutlinedButton from '../UI/OutlineButton';

function ImagePicker({ onTakeImage }) {
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
    const takePicture=async()=>{
        const photo=await Camera.current.takePictureAsync();
        if(photo){
            console.log(photo)
            setPreviewVisible(true);
            setCapturedImage(photo);
            setStartCamera(false);
        }
    }
    /*
    
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    console.log(`camera permission info is - ${cameraPermissionInformation.status}`)
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant camera permissions to use this app.'
      );
      return false;
    }

    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
    onTakeImage(image.uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlinedButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutlinedButton>
    </View>
  );
  */

}

export default ImagePicker;

const styles = StyleSheet.create({
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
});