import React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {
  return (
    <View style={styles.mapContainer}>
      <MapView
        initialRegion={{
          latitude: 14.1120839,
          longitude: 121.5593833,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}
        region={props.userLocation}
        style={styles.map}>
        <MapView.Marker
          coordinate={{latitude: 14.1120549, longitude: 121.5593467}}
          title={'Cafe Florentina'}
          description={'Cafe Florentina'}
        />
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
