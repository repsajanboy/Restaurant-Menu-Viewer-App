import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Title, Content, List, ListItem, Thumbnail, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input, Separator, Row  } from 'native-base';

const restaurantList = props => {
    return(
      <StatusBar backgroundColor="#4050b5" />
        <List style={{margin: 5}}>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>Chitos</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>PH Resto</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem thumbnail style={styles.listItemContainer}>
              <Left>
                <Thumbnail square style={{width: 100, height: 100, margin: 5}} source={require('../img/restau.jpg')} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
    );
};
const styles = StyleSheet.create({
    listItemContainer : {
        width: '100%',
        marginLeft: 0,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: "white",
        
        
    }
  });
export default restaurantList;