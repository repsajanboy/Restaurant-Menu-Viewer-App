import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {

    return(
        <View style={styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: 14.1131374,
                    longitude: 121.5558106,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0021,
                }}
                region = {props.userLocation}
                style={styles.map}>
                    <MapView.Marker
                        coordinate={{latitude: 14.1129396,
                            longitude: 121.5556736}}
                        title={"Le Maison de Yelo Lane"}
                        description={"Coffee Shop - Restaurant"}
                    />
                </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    mapContainer : {
        width: '100%',
        height: 175,
        marginTop: 20
    },
    map:{
        width: '100%',
        height: 150
    }
});

export default usersMap;