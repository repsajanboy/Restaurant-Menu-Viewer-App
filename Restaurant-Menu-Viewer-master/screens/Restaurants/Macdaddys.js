import React from 'react';
import { StyleSheet, Image, Platform, UIManager } from 'react-native';
import { Container, Fab, Tab, ScrollableTab, Tabs, TabHeading, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import MacDaddyDish from '../../data/MacDaddyDish';

export default class Chitos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true',
      item: MacDaddyDish
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
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
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={ <TabHeading><Text>Main Dish</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "maindish"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Snacks</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "snacks"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Drinks</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "drinks"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>
                }
              }
              }
              />
            </Container>
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