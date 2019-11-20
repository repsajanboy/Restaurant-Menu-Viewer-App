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
import CafeFlorentina from '../../data/FlorentinaDish';

export default class CafeF extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      item: CafeFlorentina,
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
                <Text>Cold Drinks</Text>
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
                  if (item.groupings === 'colddrinks') {
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
                <Text>Coolers</Text>
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
                  if (item.groupings === 'coolers') {
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
                <Text>Flat Bread</Text>
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
                  if (item.groupings === 'flatbread') {
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
                <Text>Frappe</Text>
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
                  if (item.groupings === 'frappe') {
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
                <Text>Hot Drinks</Text>
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
                  if (item.groupings === 'hotdrinks') {
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
                  if (item.groupings === 'juices') {
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
                <Text>Rice Bowls</Text>
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
                  if (item.groupings === 'ricebowls') {
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
                <Text>Starters</Text>
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
                  if (item.groupings === 'starters') {
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
                <Text>Wings</Text>
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
                  if (item.groupings === 'wings') {
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
