/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, Platform, UIManager} from 'react-native';
import {
  Container,
  Tab,
  ScrollableTab,
  Tabs,
  TabHeading,
  Card,
  CardItem,
  Body,
  Icon,
  Text,
} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import CafeJungleDish from '../../data/CafeJungleDish';

export default class CafeJungle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      item: CafeJungleDish,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  static navigationOptions = {
    title: 'Menu',
    tabBarIcon: ({tintColor}) => {
      return (
        <Icon name="bars" type="FontAwesome5" style={{color: tintColor}} />
      );
    },
  };
  render() {
    return (
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab
            heading={
              <TabHeading>
                <Text>Classic Pasta</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'classicpasta') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Meals</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'meals') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Burger/Sandwich</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'burger/sandwich') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>U.S. Fries Galore</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'usfriesgalore') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Waffle</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'waffle') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Pica-Pica</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'picapica') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Desserts</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'Desserts') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Pizzeria</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'pizzeria') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Hot Coffee</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                horizontal={true}
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'hotcoffee') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage1} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Iced Coffee</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                horizontal={true}
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'icedcoffee') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage1} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Tea</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                horizontal={true}
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'tea') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage1} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Frappe</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                horizontal={true}
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'frappe') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage1} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Smoothies</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                horizontal={true}
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'smoothies') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage1} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Milk/Chocolate</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                horizontal={true}
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'milk/chocolate') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage1} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Juice</Text>
              </TabHeading>
            }>
            <Container style={{backgroundColor: '#dfdfdf', padding: 10}}>
              <FlatList
                data={this.state.item}
                //Item Separator View
                horizontal={true}
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'juice') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image source={item.image} style={styles.cardImage1} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text>{item.name}</Text>
                            <Text>Php {item.price}</Text>
                          </Body>
                        </CardItem>
                      </Card>
                    );
                  }
                }}
              />
            </Container>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  cardImage: {
    height: 200,
    width: null,
    flex: 1,
  },
  cardImage1: {
    height: 400,
    width: 300,
    flex: 1,
  },
});
