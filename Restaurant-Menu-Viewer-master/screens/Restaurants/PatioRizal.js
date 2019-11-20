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
import PatioRizalDish from '../../data/PatioRizalDish';

export default class PatioRizal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      item: PatioRizalDish,
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
                <Text>American Breakfast</Text>
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
                  if (item.groupings === 'americanbreakfast') {
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
                <Text>Appetizer</Text>
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
                  if (item.groupings === 'appetizer') {
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
                <Text>Beef And Pork</Text>
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
                  if (item.groupings === 'beefandpork') {
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
                <Text>Beer</Text>
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
                  if (item.groupings === 'beer') {
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
                <Text>Brandy</Text>
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
                  if (item.groupings === 'brandy') {
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
                <Text>Budget Meals</Text>
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
                  if (item.groupings === 'budgetmeals') {
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
                <Text>Chicken</Text>
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
                  if (item.groupings === 'chicken') {
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
                <Text>Dessert</Text>
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
                  if (item.groupings === 'dessert') {
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
                <Text>Drinks</Text>
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
                  if (item.groupings === 'drinks') {
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
                <Text>Filipino Breakfast</Text>
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
                  if (item.groupings === 'filipinobreakfast') {
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
                <Text>Main Dish Salad</Text>
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
                  if (item.groupings === 'maindishsalad') {
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
                <Text>Noodles</Text>
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
                  if (item.groupings === 'noodles') {
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
                <Text>Pasta</Text>
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
                  if (item.groupings === 'pasta') {
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
                <Text>Pizza</Text>
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
                  if (item.groupings === 'pizza') {
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
                <Text>Rice</Text>
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
                  if (item.groupings === 'rice') {
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
                <Text>Sandwiches</Text>
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
                  if (item.groupings === 'sandwiches') {
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
                <Text>Sea Foods</Text>
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
                  if (item.groupings === 'seafoods') {
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
                <Text>Sizzler</Text>
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
                  if (item.groupings === 'sizzler') {
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
                <Text>Soup</Text>
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
                  if (item.groupings === 'soup') {
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
                <Text>Vegetables</Text>
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
                  if (item.groupings === 'vegetables') {
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
