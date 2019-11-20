/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, Platform, UIManager } from 'react-native';
import { Container, Tab,ScrollableTab, Tabs, TabHeading, Card, CardItem, Body, Icon, Text } from 'native-base';
import {FlatList } from 'react-native-gesture-handler';
import BuddysDish from '../../data/BuddysDish';

export default class Chitos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      item: BuddysDish,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
    static navigationOptions = {
        title: 'Menu',
        tabBarIcon:({ tintColor}) => {
          return <Icon name="bars" type="FontAwesome5" style={{color: tintColor}} />;
      },
    }
    render() {
        return (
            <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading={ <TabHeading><Text>Noodles/Pasta</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'noodles'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Sizzlers</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'sizzlers'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>BBQ/Grills</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'bbq'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Breakfast/Lunch</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'breakfast'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Sandwiches</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'sandwiches'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Buddy Pizza</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'pizza'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Combo Meals</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'combo'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Pasta/Noodles (Bilao)</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'bilao'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
          <Tab heading={ <TabHeading><Text>Salad/Dessert</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'salad'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
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
                if (item.groupings === 'drinks'){
                  return <Card style={{flex: 0, borderRadius: 10}}>
                    <CardItem cardBody bordered >
                      <Image source={item.image} style={styles.cardImage}/>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{item.name}</Text>
                        <Text>Php {item.price}</Text>
                      </Body>
                    </CardItem>
                    </Card>;
                }
              }
              }
              />
            </Container>
          </Tab>
        </Tabs>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    cardImage:{
      height: 200,
      width: null,
      flex: 1,
    },
  });
