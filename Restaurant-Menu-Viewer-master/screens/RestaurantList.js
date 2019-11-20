/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Platform, UIManager, Image } from 'react-native';
import { CardItem, Thumbnail, Button, Left, Right, Body, Icon, Card, Text  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-elements';

import staticRestaurant from '../data/staticRestaurant';

export default class App extends React.Component {
  static navigationOptions = {
    tabBarIcon:({ tintColor}) => {
        return <Icon name="md-home" style={{color: tintColor}} />;
    },
}
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      item: staticRestaurant,
      dataBackup: staticRestaurant,
      isLoading: false,
      page: 1,
      seed: 1,
      refreshing: false,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
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

  render() {
    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        <SearchBar
            round
            autoFocus={false}
            containerStyle= {{backgroundColor: '#3f48cc'}}
            inputContainerStyle = {{backgroundColor: '#ffffff'}}
            searchIcon= {{size: 24, color: 'black'}}
            inputStyle= {{color: 'black'}}
            placeholder="Search restaurant here"
            placeholderTextColor = "black"
            onChangeText={text => {
              this.filterList(text);
            }}
            onPressCancel={() => {
              this.filterList('');
            }}
            value = {this.state.query}
          />
          <FlatList
          data={this.state.item.sort((a,b) => a.name.localeCompare(b.name))}
          //Item Separator View
          enableEmptySections={true}
          style={{ marginTop: 10, padding: 10, backgroundColor: '#dfdfdf' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            // Single Comes here which will be repeatative for the FlatListItems
            <ScrollView>
              <Card style={{flex: 0, borderRadius: 10}}>
                <CardItem bordered style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} button onPress={()=> this.props.navigation.navigate(item.navi)}>
                  <Left>
                    <Thumbnail style={{resizeMode: 'contain'}} source={item.thumb} />
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
                  </Left>
                  <Right>
                    <Button transparent>
                      <Icon name="send" type="MaterialIcons"/>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem cardBody bordered button onPress={()=> this.props.navigation.navigate(item.navi)}>
                  <Image source={item.image} style={styles.cardImage}/>
                </CardItem>
                <CardItem button onPress={()=> this.props.navigation.navigate(item.navi)}>
                  <Body>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="directions" type="MaterialIcons" style={{marginRight: 10}} />
                      <Text>{item.location}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="restaurant-menu" type="MaterialIcons" style={{marginRight: 10}} />
                      <Text>{item.type}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                      <Icon name="clock" type="EvilIcons" style={{marginRight: 10}} />
                      <Text>Open at {item.time}</Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>
              </ScrollView>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'white',
    marginTop: Platform.OS === 'ios' ? 30 : 0,
  },
  cardImage:{
    height: 200,
    width: null,
    flex: 1,
  },
});
