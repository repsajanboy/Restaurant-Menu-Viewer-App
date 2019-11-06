import React from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';


export default class FooterD extends React.Component{
    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Camera</Text>
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                        <Text>Navigate</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>Contact</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}
