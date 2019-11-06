import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const usersMap = props => {

    return(
        <View style={styles.mapContainer}>
            <MapView
                initialRegion={{
                    latitude: 14.1143521,
                    longitude: 121.556955114,
                    latitudeDelta: 0.0022,
                    longitudeDelta: 0.0021,
                }}
                region = {props.userLocation}
                style={styles.map}>
                    <MapView.Marker
                        coordinate={{latitude: 14.11470554577507,
                            longitude: 121.557058095932}}
                        title={"PH Papa Hans"}
                        description={"Restaurant"}
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