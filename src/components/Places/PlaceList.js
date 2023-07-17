import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../constants/theme';
import PlaceItem from './PlaceItem';
/*
If the PlacesList component is being rendered within a screen component of React Navigation, you can use the useNavigation hook from the @react-navigation/native package to get the navigation object directly within the component. Uncomment the line // const navigation = useNavigation(); in the PlacesList component and remove the navigation prop from its function signature.

*/
function PlacesList({ places }) {
  const navigation = useNavigation();

  function selectPlaceHandler(id) {
    navigation.navigate('PlaceDetails', {
      placeId: id,
    });
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={selectPlaceHandler} />
      )}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
    padding:20,
  //  backgroundColor:COLORS.tertiary,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: COLORS.tertiary,
  },
});