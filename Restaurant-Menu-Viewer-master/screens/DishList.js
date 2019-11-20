/* eslint-disable react-native/no-inline-styles */
/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
// eslint-disable-next-line prettier/prettier
import {View, StyleSheet, FlatList, Platform, UIManager, Modal, Image  } from 'react-native';
// eslint-disable-next-line prettier/prettier
import {Thumbnail, Button, Left, Right, Body, Icon, Text, Container, Header, List, ListItem, CardItem} from 'native-base';
import {SearchBar, CheckBox, Card} from 'react-native-elements';
import AllDish from '../data/AllDish';

console.disableYellowBox = true;
export default class App extends React.PureComponent {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      return (
        <Icon name="bars" type="FontAwesome5" style={{color: tintColor}} />
      );
    },
  };
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      item: AllDish,
      data: AllDish,
      singleItem: [],
      dataBackup: AllDish,
      isLoading: false,
      page: 1,
      seed: 1,
      refreshing: false,
      status: false,
      rice: false,
      sizzler: false,
      silog: false,
      pasta: false,
      pizza: false,
      drinks: false,
      sandwiches: false,
      salad: false,
      modalVisible: false,
      modal2Visible: false,
      dish: '',
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  openModal = () => {
    this.setState({modalVisible: true});
  };
  openModal2 = text => {
    var name = text;
    var filderData = this.state.data;
    filderData = this.state.data.filter(item => {
      if (item.name === name) {
        return item;
      }
    });
    this.setState({
      modal2Visible: true,
      singleItem: filderData,
    });
  };
  navigateRestaurant = text => {
    var navi = text;
    this.setState({modal2Visible: false});
    this.props.navigation.navigate(navi);
  };
  closeModal2 = () => {
    this.setState({modal2Visible: false});
  };
  closeModal = () => {
    this.setState({modalVisible: false});
  };
  cancelModal = () => {
    this.setState({
      rice: false,
      pasta: false,
      pizza: false,
      drinks: false,
      sandwiches: false,
      salad: false,
      item: AllDish,
    });
    this.setState({modalVisible: false});
  };
  filterList = text => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      query: text,
      item: newData,
    });
  };
  checkRice = () => {
    var group = 'ricemeal';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      rice: !this.state.rice,
    });
    if (this.state.rice === false) {
      this.setState({
        item: filterData,
        silog: false,
        sizzler: false,
        pasta: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  checkSizzler = () => {
    var group = 'Sizzlers';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      sizzler: !this.state.sizzler,
    });
    if (this.state.sizzler === false) {
      this.setState({
        item: filterData,
        silog: false,
        rice: false,
        pasta: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  checkSilog = () => {
    var group = 'Silog';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      silog: !this.state.silog,
    });
    if (this.state.silog === false) {
      this.setState({
        item: filterData,
        rice: false,
        sizzler: false,
        pasta: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  checkPasta = () => {
    var group = 'pasta';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      pasta: !this.state.pasta,
    });
    if (this.state.pasta === false) {
      this.setState({
        item: filterData,
        rice: false,
        silog: false,
        sizzler: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  checkPizza = () => {
    var group = 'pizza';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      pizza: !this.state.pizza,
    });
    if (this.state.pizza === false) {
      this.setState({
        item: filterData,
        pasta: false,
        rice: false,
        silog: false,
        sizzler: false,
        drinks: false,
        sandwiches: false,
        salad: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  checkDrinks = () => {
    var group = 'drinks';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      drinks: !this.state.drinks,
    });
    if (this.state.drinks === false) {
      this.setState({
        item: filterData,
        pasta: false,
        pizza: false,
        rice: false,
        silog: false,
        sizzler: false,
        sandwiches: false,
        salad: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  checkSalad = () => {
    var group = 'salad';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      salad: !this.state.salad,
    });
    if (this.state.salad === false) {
      this.setState({
        item: filterData,
        pasta: false,
        pizza: false,
        drinks: false,
        sandwiches: false,
        rice: false,
        silog: false,
        sizzler: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  checkSandwiches = () => {
    var group = 'sandwiches';
    var filterData = this.state.dataBackup;
    filterData = this.state.dataBackup.filter(item => {
      if (item.filter === group) {
        return item;
      }
    });
    this.setState({
      sandwiches: !this.state.sandwiches,
    });
    if (this.state.sandwiches === false) {
      this.setState({
        item: filterData,
        pasta: false,
        pizza: false,
        drinks: false,
        rice: false,
        silog: false,
        sizzler: false,
        salad: false,
      });
    } else {
      this.setState({
        item: AllDish,
      });
    }
  };
  renderItem(item) {
    return (
      <View>
        <List style={{backgroundColor: 'white'}}>
          <ListItem
            thumbnail
            style={{marginBottom: 5}}
            button
            onPress={() => this.openModal2(item.name)}>
            <Left>
              <Thumbnail square source={item.image} />
            </Left>
            <Body>
              <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
              <Text>Php {item.price}</Text>
            </Body>
            <Right>
              <Button transparent>
                <Icon name="angle-right" type="FontAwesome" />
              </Button>
            </Right>
          </ListItem>
        </List>
      </View>
    );
  }
  render() {
    return (
      //ListView to show with textinput used as search bar
      <Container style={styles.viewStyle}>
        <Header>
          <View
            style={{flex: 1, flexDirection: 'row', backgroundColor: '#3f48cc'}}>
            <View style={{flex: 4}}>
              <SearchBar
                round
                autoFocus={false}
                containerStyle={{
                  backgroundColor: 'transparent',
                  borderWidth: 0,
                  borderBottomColor: 'transparent',
                  borderTopColor: 'transparent',
                }}
                inputContainerStyle={{backgroundColor: '#ffffff'}}
                searchIcon={{size: 24, color: 'black'}}
                inputStyle={{color: 'black'}}
                placeholder="Search dishes here..."
                placeholderTextColor="black"
                onChangeText={text => {
                  this.filterList(text);
                }}
                onPressCancel={() => {
                  this.filterList('');
                }}
                value={this.state.query}
              />
            </View>
            <View>
              <Button
                style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}
                transparent
                onPress={this.openModal}>
                <Text style={{color: 'white'}}>Filter</Text>
              </Button>
            </View>
          </View>
        </Header>
        <View style={{flex: 1}}>
          <Modal
            visible={this.state.modalVisible}
            animationType={'fade'}
            onRequestClose={() => this.closeModal}>
            <View style={{marginLeft: 25, marginTop: 20}}>
              <Text style={{fontSize: 24}}>Categories :</Text>
            </View>

            <View
              style={{
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'stretch',
                alignContent: 'stretch',
                alignSelf: 'stretch',
              }}>
              <CheckBox
                title="Rice Meals"
                checked={this.state.rice}
                onPress={this.checkRice}
              />
              <CheckBox
                title="Silog Meals"
                checked={this.state.silog}
                onPress={this.checkSilog}
              />
              <CheckBox
                title="Sizzlers Meals"
                checked={this.state.sizzler}
                onPress={this.checkSizzler}
              />
              <CheckBox
                title="Pasta/Noodles"
                checked={this.state.pasta}
                onPress={this.checkPasta}
              />
              <CheckBox
                title="Pizza"
                checked={this.state.pizza}
                onPress={this.checkPizza}
              />
              <CheckBox
                title="Sandwiches/Burger"
                checked={this.state.sandwiches}
                onPress={this.checkSandwiches}
              />
              <CheckBox
                title="Salad/Dessert/Fries"
                checked={this.state.salad}
                onPress={this.checkSalad}
              />
              <CheckBox
                title="Drinks"
                checked={this.state.drinks}
                onPress={this.checkDrinks}
              />
            </View>
            <View
              style={{
                margin: 20,
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <Button danger onPress={this.cancelModal}>
                <Text>Cancel</Text>
              </Button>
              <Button onPress={this.closeModal}>
                <Text>Apply Filter</Text>
              </Button>
            </View>
          </Modal>
        </View>
        <View style={{flex: 1}}>
          <Modal
            visible={this.state.modal2Visible}
            animationType={'fade'}
            onRequestClose={() => this.closeModal}>
            <FlatList
              data={this.state.singleItem}
              //Item Separator View
              enableEmptySections={true}
              style={{marginTop: 10, backgroundColor: '#dfdfdf'}}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <Card>
                  <CardItem>
                    <Left style={{flex: 1, flexDirection: 'column'}}>
                      <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                      <Text>Php {item.price}</Text>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Image
                      source={item.image}
                      style={{height: 350, width: null, flex: 1}}
                    />
                  </CardItem>
                  <CardItem>
                    <Left style={{flex: 1, flexDirection: 'row'}}>
                      <Text>Restaurant : </Text>
                      <Text style={{fontWeight: 'bold'}}>{item.restau}</Text>
                    </Left>
                  </CardItem>
                  <CardItem>
                    <Left style={{flex: 2}}>
                      <Button
                        transparent
                        onPress={() => this.navigateRestaurant(item.navi)}>
                        <Text>Go to Restaurant</Text>
                        <Icon name="sign-in" type="FontAwesome" />
                      </Button>
                    </Left>
                    <Right style={{flex: 1}}>
                      <Button transparent onPress={this.closeModal2}>
                        <Text>To List</Text>
                        <Icon name="reply" type="FontAwesome" />
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              )}
              // Single Comes here which will be repeatative for the FlatListItems
            />
          </Modal>
        </View>
        <FlatList
          data={this.state.item.sort((a, b) => a.name.localeCompare(b.name))}
          //Item Separator View
          enableEmptySections={true}
          style={{marginTop: 10, padding: 10, backgroundColor: '#dfdfdf'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => this.renderItem(item)}
          // Single Comes here which will be repeatative for the FlatListItems
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  cardImage: {
    height: 200,
    width: null,
    flex: 1,
  },
});
