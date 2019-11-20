/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Image, Platform, UIManager } from 'react-native';
import { Container, Tab, ScrollableTab, Tabs, TabHeading, Card, CardItem, Body, Icon, Text } from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import AbcedeDish from '../../data/AbcedesRestoDish';

export default class Abcede extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      item: AbcedeDish,
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
          <Tab heading={ <TabHeading><Text>Breakfast Meal</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'breakfastmeal'){
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
          <Tab heading={ <TabHeading><Text>Desserts</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'desserts'){
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
          <Tab heading={ <TabHeading><Text>Extras</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'extras/ad-ons'){
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
          <Tab heading={ <TabHeading><Text>Fish</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'fish(halforoneKG)'){
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
          <Tab heading={ <TabHeading><Text>Fried</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'fried'){
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
          <Tab heading={ <TabHeading><Text>Inihaw</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'inihaw'){
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
          <Tab heading={ <TabHeading><Text>Kinilaw</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'kinilaw'){
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
          <Tab heading={ <TabHeading><Text>Noodles and Pasta (Bilao)</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'noodlesandpastabilao'){
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
          <Tab heading={ <TabHeading><Text>Noodles and Pasta</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'noodlesandpasta'){
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
          <Tab heading={ <TabHeading><Text>Sandwiches and Fries</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'sandwichesandfries'){
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
          <Tab heading={ <TabHeading><Text>Sizzlers with Rice</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'sizzlerswithrice'){
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
          <Tab heading={ <TabHeading><Text>Sizzling</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'sizzling'){
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
          <Tab heading={ <TabHeading><Text>Special</Text></TabHeading>}>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}} >
              <FlatList
              data={this.state.item}
              //Item Separator View
              enableEmptySections={true}
              style={{ marginTop: 3, backgroundColor: '#dfdfdf' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => {
                if (item.groupings === 'special'){
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
