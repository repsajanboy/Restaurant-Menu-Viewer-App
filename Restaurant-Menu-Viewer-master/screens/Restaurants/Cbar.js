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
import CbarDish from '../../data/CbarDish';

export default class Cbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      item: CbarDish,
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
                      <Card style={{flex: 1, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
                <Text>Cocktails</Text>
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
                  if (item.groupings === 'cocktails') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
                <Text>Herballiqueur</Text>
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
                  if (item.groupings === 'herballiqueur') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
                <Text>Pansit</Text>
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
                  if (item.groupings === 'pansit') {
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
                <Text>Pica</Text>
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
                  if (item.groupings === 'pica') {
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
                <Text>Pork</Text>
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
                  if (item.groupings === 'pork') {
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
                <Text>Quesadilla</Text>
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
                  if (item.groupings === 'quesadilla') {
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
                <Text>Red and White Wine</Text>
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
                  if (item.groupings === 'redwhitewine') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
                <Text>Rice Bowl</Text>
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
                  if (item.groupings === 'ricebowl') {
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
                <Text>Rice Meal</Text>
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
                  if (item.groupings === 'ricemeal') {
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
                <Text>Rum</Text>
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
                  if (item.groupings === 'rum') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
                <Text>Seafood</Text>
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
                  if (item.groupings === 'seafood') {
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
                <Text>Silog</Text>
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
                  if (item.groupings === 'silog') {
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
                <Text>Sizzlers</Text>
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
                  if (item.groupings === 'sizzlers') {
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
                <Text>Tequila</Text>
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
                  if (item.groupings === 'tequila') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
                  if (item.groupings === 'vegetable') {
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
                <Text>Whiskey</Text>
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
                  if (item.groupings === 'whiskey') {
                    return (
                      <Card style={{flex: 0, borderRadius: 10}}>
                        <CardItem cardBody bordered>
                          <Image
                            source={item.image}
                            style={styles.cardImage1}
                          />
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
