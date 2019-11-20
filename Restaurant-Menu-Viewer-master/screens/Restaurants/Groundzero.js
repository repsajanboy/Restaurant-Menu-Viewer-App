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
import GroundzeroDish from '../../data/GroundzeroDish';

export default class Groundzero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'true',
      item: GroundzeroDish,
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
                <Text>Main Dish</Text>
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
                <Text>Old Time Favorites</Text>
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
                  if (item.groupings === 'oldtime') {
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
                <Text>Lutong Bahay</Text>
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
                  if (item.groupings === 'lutongbahay') {
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
                <Text>Side Order</Text>
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
                  if (item.groupings === 'sideorder') {
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
                <Text>Pancit</Text>
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
                  if (item.groupings === 'pancit') {
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
                <Text>Kalissa</Text>
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
                  if (item.groupings === 'kalissa') {
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
                <Text>Bread Sticks</Text>
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
                  if (item.groupings === 'breadsticks') {
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
                enableEmptySections={true}
                style={{marginTop: 3, backgroundColor: '#dfdfdf'}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => {
                  if (item.groupings === 'drinks') {
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
});
