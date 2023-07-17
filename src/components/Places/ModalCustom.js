import {
    Modal,
    View,
    StyleSheet,
    useWindowDimensions,
    TouchableOpacity,
    Text,
    Image,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { COLORS } from "../../constants/theme";

  import OutlinedButton from "../UI/OutlineButton";
  
  export const ModalCustom = (props) => {
    const { visible, children, onClose, onTakePhoto } = props;
    //const { width, height } = useWindowDimensions();
  
    const styles = StyleSheet.create({
      modal: {
        flex: 1,
      },
      base: {
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.secondary1,
      },
      overView: {
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      },
      btn: {
        width: 60,
        height: 60,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
      },
      btnLabel: {
        fontSize: 30,
        lineHeight: 29,
        color: "white",
      },
      safeArea: {
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 2,
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
      },
      cameraIcon: {
        width: 35,
        height: 35,
      },
      btnClose: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
      },
    });
  
    return (
      <Modal visible={visible} style={styles.modal} transparent={true}>
        <View style={styles.base}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.overView}>
              <TouchableOpacity style={styles.btnClose} onPress={onClose}>
                <Text style={{color:COLORS.tertiary}}>Close</Text>
              </TouchableOpacity>
  
              
               <OutlinedButton icon="camera" onPress={onTakePhoto}>
                Take Image
       </OutlinedButton>
              
            </View>
          </SafeAreaView>
          <View>{children}</View>
        </View>
      </Modal>
    );
  };