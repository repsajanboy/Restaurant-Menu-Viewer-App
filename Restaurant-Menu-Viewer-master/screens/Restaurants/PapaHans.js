import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Fab, Tab, Tabs, TabHeading, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

export default class Chitos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true'
    };
  }
    static navigationOptions = {
        title: 'Menu',
        tabBarIcon:({ tintColor}) => {
          return <Icon name='bars' type='FontAwesome5' style={{color: tintColor}} />
      }
    }
    render() {
        return (
            <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Starter</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
                <ScrollView>
                <Card style={{flex: 0, borderRadius: 10}}>
                <CardItem cardBody bordered >
                  <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>Ice Cream Cookie</Text>
                    <Text>Php 00.00</Text>
                  </Body>
                </CardItem>
              </Card>
                </ScrollView>
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Main Course</Text></TabHeading>}>
          <Text>Tab 2</Text>
          </Tab>
          <Tab heading={ <TabHeading><Text>Desserts</Text></TabHeading>}>
          <Text>Tab 3</Text>
          </Tab>
        </Tabs>
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