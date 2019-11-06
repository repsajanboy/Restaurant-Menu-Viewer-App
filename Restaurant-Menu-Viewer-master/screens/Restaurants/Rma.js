import React from 'react';
import { StyleSheet, Image, Platform, UIManager } from 'react-native';
import { Container, Fab, Tab, Tabs, ScrollableTab, TabHeading, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import RmaDish from '../../data/RmaDish';

export default class Chitos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 'true',
      item: RmaDish
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
          <Tab heading={ <TabHeading><Text>Sulyaw Rice</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "sulyawrice"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
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
          <Tab heading={ <TabHeading><Text>RMA Chalog</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "rmachalog"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
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
          <Tab heading={ <TabHeading><Text>RMA Special</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "rmaspecial"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
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
          <Tab heading={ <TabHeading><Text>sandwiches</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "sandwiches"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
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
          <Tab heading={ <TabHeading><Text>Beverages</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "beverage"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
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
          <Tab heading={ <TabHeading><Text>Dessert</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "dessert"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
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
          <Tab heading={ <TabHeading><Text>Salad and Appetizer</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if(item.groupings== "salad"){
                  return<Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={require('../../img/ph/dessert/1.jpg')} style={styles.cardImage}/>
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