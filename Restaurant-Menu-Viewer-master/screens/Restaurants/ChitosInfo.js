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
import UsersMapChitos from '../../components/userMaps/UsersMapChitos';
import ChitosSlider from '../../components/Sliders/ChitosSlider';
export default class Chitos extends React.Component {
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
          <ChitosSlider />
          <Card style={{marginTop: 5}}>
            <CardItem cardBody>
              <UsersMapChitos
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
                  <Text>Lucban - Tayabas Rd, Lucban, Quezon</Text>
                </Button>
              </Left>
              <Right>
                <Button
                  bordered
                  rounded
                  info
                  onPress={() =>
                    Linking.openURL(
                      'google.navigation:q=14.1132778+121.5569927',
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
                <Text>Restaurant</Text>
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
                      Linking.openURL('tel: 7192850');
                    }}
                    style={{fontSize: 16}}>
                    7192850
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
                        'fb://facewebmodal/f?href=https://www.facebook.com/CHITOSuulitkasasaraptoo',
                      ).then(supported => {
                        if (supported) {
                          return Linking.openURL(
                            'fb://facewebmodal/f?href=https://www.facebook.com/CHITOSuulitkasasaraptoo',
                          );
                        } else {
                          return Linking.openURL(
                            'https://www.facebook.com/CHITOSuulitkasasaraptoo',
                          );
                        }
                      });
                    }}>
                    CHITO'S
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
                <Text>Open at 10:00 am - 10:00 pm</Text>
              </View>
            </CardItem>
          </Card>
        </ScrollView>
      </Container>
    );
  }
}
