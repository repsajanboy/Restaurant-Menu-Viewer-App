/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Linking} from 'react-native';
import {
  Container,
  Card,
  CardItem,
  Button,
  Left,
  Right,
  Icon,
  Text,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import UserMapCafeF from '../../components/userMaps/UserMapCafeF';
import CafeFSlider from '../../components/Sliders/CafeFSlider';

export default class CafeFInfo extends React.Component {
  state = {
    userLocation: null,
  };
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.0622,
            longitudeDelta: 0.0421,
          },
        });
      },
      err => console.log(err),
    );
  };
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
    };
  }
  static navigationOptions = {
    title: 'About',
    tabBarIcon: ({tintColor}) => {
      return (
        <Icon
          name="info-circle"
          type="FontAwesome5"
          style={{color: tintColor}}
        />
      );
    },
  };
  render() {
    return (
      <Container style={{backgroundColor: '#dfdfdf'}}>
        <ScrollView>
          <CafeFSlider />
          <Card style={{marginTop: 5}}>
            <CardItem cardBody>
              <UserMapCafeF
                style={{height: 200, width: '100%'}}
                userLocation={this.state.userLocation}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon
                    name="directions"
                    type="MaterialIcons"
                    style={{color: 'black', fontSize: 24}}
                  />
                  <Text>
                    Unit 2F Building Miramonte Subdivision, Lucban, Quezon
                  </Text>
                </Button>
              </Left>
              <Right>
                <Button
                  bordered
                  rounded
                  info
                  onPress={() =>
                    Linking.openURL(
                      'google.navigation:q=14.1120549+121.5593467',
                    )
                  }>
                  <Text>Get Direction</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="restaurant-menu"
                  type="MaterialIcons"
                  style={{marginRight: 10}}
                />
                <Text>Cafe and Restaurant</Text>
              </View>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon
                    name="phone"
                    type="MaterialIcons"
                    style={{color: 'black', fontSize: 24}}
                  />
                  <Text
                    onPress={() => {
                      Linking.openURL('tel: 0995 275 7509');
                    }}
                    style={{fontSize: 16}}>
                    0995 275 7509
                  </Text>
                </Button>
              </Left>
              <Right />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon
                    name="message"
                    type="MaterialIcons"
                    style={{color: 'black', fontSize: 24}}
                  />
                  <Text
                    onPress={() => {
                      Linking.openURL('sms: 09952757509');
                    }}
                    style={{fontSize: 16}}>
                    0995 275 7509
                  </Text>
                </Button>
              </Left>
              <Right />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon
                    name="facebook-square"
                    type="FontAwesome"
                    style={{color: 'black', fontSize: 24}}
                  />
                  <Text
                    onPress={() => {
                      Linking.canOpenURL(
                        'fb://facewebmodal/f?href=https://www.facebook.com/Café-Florentina-436518363422161',
                      ).then(supported => {
                        if (supported) {
                          return Linking.openURL(
                            'fb://facewebmodal/f?href=https://www.facebook.com/Café-Florentina-436518363422161',
                          );
                        } else {
                          return Linking.openURL(
                            'https://www.facebook.com/Café-Florentina-436518363422161',
                          );
                        }
                      });
                    }}>
                    Cafe Florentina
                  </Text>
                </Button>
              </Left>
              <Right />
            </CardItem>
            <CardItem>
              <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="clock"
                  type="MaterialCommunityIcons"
                  style={{marginRight: 10}}
                />
                <Text>Open at 11:00 am - 10:00 pm</Text>
              </View>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    );
  }
}
