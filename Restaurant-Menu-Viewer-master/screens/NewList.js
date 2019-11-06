import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Title, Content, List, CardItem, ListItem, Thumbnail, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input, Separator, Row, Card  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class NewList extends React.Component {

    static navigationOptions = {
        tabBarIcon:({ tintColor}) => {
            return <Icon name='md-home' style={{color: tintColor}} />
        }
    }
    render(){
        return(
              <ScrollView>
              <Card style={{flex: 0, borderRadius: 10}}>
                <CardItem bordered style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} button onPress={()=> this.props.navigation.navigate('PHRestau')}>
                  <Left>
                    <Thumbnail source={this.props.item.thumb} />
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.props.item.name}</Text>
                  </Left>
                  <Right>
                    <Button transparent title="Chitos" >
                      <Icon name="send" type="MaterialIcons"/>
                    </Button>
                  </Right>
                </CardItem>
                <CardItem cardBody bordered button onPress={()=> this.props.navigation.navigate('PHRestau')}>
                  <Image source={this.props.item.image} style={styles.cardImage}/>
                </CardItem>
                <CardItem button onPress={()=> this.props.navigation.navigate('PHRestau')}>
                  <Body>
                    <Text>{this.props.item.location}</Text>
                    <Text>{this.props.item.type}</Text>
                    <Text>Open at {this.props.item.time}</Text>
                  </Body>
                </CardItem>
              </Card>
              </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    cardImage:{
      height: 200, 
      width: null, 
      flex: 1
    }
  });