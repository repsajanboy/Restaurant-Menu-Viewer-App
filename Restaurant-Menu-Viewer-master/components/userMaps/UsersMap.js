import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
  let userLocationMarker = null;
  if (props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation} />;
  }
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0421,
        }}
        region={props.userLocation}
        style={styles.map}>
        {userLocationMarker}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 175,
    marginTop: 20,
  },
  map: {
    width: '100%',
    height: 150,
  },
});

export default usersMap;
