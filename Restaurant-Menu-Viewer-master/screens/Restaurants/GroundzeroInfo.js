import React from 'react';
import { StyleSheet, Image, View, Linking } from 'react-native';
import {Container, Fab, Tab, Tabs, TabHeading, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import FetchLocation from '../../components/FetchLocation';
import UserMapGround from '../../components/userMaps/UserMapGround';
import GroundSlider from '../../components/Sliders/GroundSlider';

export default class GroundzeroInfo extends React.Component {
  state = {
    userLocation: null
  }
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation:{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421
        }
      });
    }, err => console.log(err));
  }
  constructor(props) {
    super(props)
    this.state = {
      active: 'true'
    };
  }
    static navigationOptions = {
        title: 'About',
        tabBarIcon:({ tintColor}) => {
            return <Icon name='info-circle' type='FontAwesome5' style={{color: tintColor}} />
        }
    }
    render() {
        return (
            <Container style={{backgroundColor: '#dfdfdf'}}>
            <ScrollView>
              <GroundSlider />
              <Card style={{marginTop: 5}}>
                <CardItem cardBody>
                  <UserMapGround style={{height: 200, width: '100%'}} userLocation={this.state.userLocation} />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon name="directions" type="MaterialIcons" style={{color: 'black', fontSize: 24}} />
                      <Text>Quezon Avenue Corner Regidor St., Lucban, Quezon Province</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button bordered rounded info onPress={()=> Linking.openURL('google.navigation:q=14.1140032+121.5551148')}>
                      <Text>Get Direction</Text>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="restaurant-menu" type="MaterialIcons" style={{marginRight: 10}} />
                      <Text>Pizza Restaurant</Text>
                    </View>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon name="phone" type="MaterialIcons" style={{color: 'black', fontSize: 24}} />
                      <Text onPress={()=> {Linking.openURL('tel: (042) 540 9615')}} style={{fontSize: 16}}>(042) 540 9615</Text>
                    </Button>
                  </Left>
                  <Right></Right>
                </CardItem>
                <CardItem>
                <Left>
                    <Button transparent>
                      <Icon name="facebook-square" type="FontAwesome" style={{color: 'black', fontSize: 24}} />
                      <Text onPress={()=> {Linking.canOpenURL("fb://facewebmodal/f?href=https://www.facebook.com/pages/Ground-Zero-House-of-Pizza/1820171281640334").then(supported => {
                        if(supported){
                          return Linking.openURL("fb://facewebmodal/f?href=https://www.facebook.com/pages/Ground-Zero-House-of-Pizza/1820171281640334");
                        } else {
                          return Linking.openURL("https://www.facebook.com/pages/Ground-Zero-House-of-Pizza/1820171281640334");
                        }
                      })}}>Ground Zero House of Pizza</Text>
                    </Button>
                  </Left>
                  <Right></Right>
                </CardItem>
                <CardItem>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="clock" type="MaterialCommunityIcons" style={{marginRight: 10}} />
                      <Text>Open at 04:00 pm - 11:59 pm</Text>
                    </View>
                </CardItem>
              </Card>
            </ScrollView>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    cardImage:{
      height: 200, 
      width: null, 
      flex: 1
    }
  });