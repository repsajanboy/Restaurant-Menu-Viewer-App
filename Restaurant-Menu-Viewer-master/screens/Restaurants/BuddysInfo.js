import React from 'react';
import { StyleSheet, Image, View, Linking } from 'react-native';
import {Container, Fab, Tab, Tabs, TabHeading, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import FetchLocation from '../../components/FetchLocation';
import UsersMapBuddys from '../../components/userMaps/UsersMapBuddys';
import BuddysSlider from '../../components/Sliders/BuddysSlider';
export default class Chitos extends React.Component {
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
              <BuddysSlider />
              <Card style={{marginTop: 5}}>
                <CardItem cardBody>
                  <UsersMapBuddys style={{height: 200, width: '100%'}} userLocation={this.state.userLocation} />
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon name="directions" type="MaterialIcons" style={{color: 'black', fontSize: 24}} />
                      <Text>99 Rizal Avenue, corner San Luis, St, Lucban, Quezon</Text>
                    </Button>
                  </Left>
                  <Right>
                    <Button bordered rounded info onPress={()=> Linking.openURL('google.navigation:q=14.1146135+121.554745')}>
                      <Text>Get Direction</Text>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="restaurant-menu" type="MaterialIcons" style={{marginRight: 10}} />
                      <Text>Restaurant</Text>
                    </View>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button transparent>
                      <Icon name="phone" type="MaterialIcons" style={{color: 'black', fontSize: 24}} />
                      <Text onPress={()=> {Linking.openURL('tel: (042) 540 3394')}} style={{fontSize: 16}}>(042) 540 3394</Text>
                    </Button>
                  </Left>
                  <Right></Right>
                </CardItem>
                <CardItem>
                  <Left>
                      <Button transparent>
                        <Icon name="web" type="MaterialCommunityIcons" style={{color: 'black', fontSize: 24}} />
                        <Text onPress={()=> {Linking.canOpenURL("https://www.buddys.com.ph").then(supported => {
                          if(supported){
                            return Linking.openURL("https://www.buddys.com.ph");
                          } else {
                            return Linking.openURL("https://www.buddys.com.ph");
                          }
                        })}}>www.buddys.com.ph</Text>
                      </Button>
                    </Left>
                    <Right></Right>
                </CardItem>
                <CardItem>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="clock" type="MaterialCommunityIcons" style={{marginRight: 10}} />
                      <Text>Open at 07:00 am - 02:00 am</Text>
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