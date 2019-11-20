import React from 'react';
import RestaurantList from './RestaurantList';
import DishList from './DishList';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import PapaHans from './Restaurants/PapaHans';
import Chitos from './Restaurants/Chitos';
import ChitosInfo from './Restaurants/ChitosInfo';
import PapaHansInfo from './Restaurants/PapaHansInfo';
import YeloLane from './Restaurants/YeloLane';
import YeloLaneInfo from './Restaurants/YeloLaneInfo';
import Rma from './Restaurants/Rma';
import RmaInfo from './Restaurants/RmaInfo';
import Buddys from './Restaurants/Buddys';
import BuddysInfo from './Restaurants/BuddysInfo';
import MacDaddys from './Restaurants/Macdaddys';
import MacDaddysInfo from './Restaurants/MacDaddysInfo';
import Vans from './Restaurants/Vans';
import VansInfo from './Restaurants/VansInfo';
import KuboInfo from './Restaurants/KuboInfo';
import GroundzeroInfo from './Restaurants/GroundzeroInfo';
import Groundzero from './Restaurants/Groundzero';
import Kubo from './Restaurants/Kubo';
import CafeF from './Restaurants/CafeF';
import CafeFInfo from './Restaurants/CafeFInfo';
import Abcede from './Restaurants/Abcede';
import AbcedeInfo from './Restaurants/AbcedeInfo';
import Cbar from './Restaurants/Cbar';
import CbarInfo from './Restaurants/CbarInfo';
import OnyokB from './Restaurants/OnyokB';
import OnyokBInfo from './Restaurants/OnyokBInfo';
import Pepet from './Restaurants/Pepet';
import PepetInfo from './Restaurants/PepetInfo';
import PatioRizal from './Restaurants/PatioRizal';
import PatioRInfo from './Restaurants/PatioRInfo';
import CafeJungle from './Restaurants/CafeJungle';
import CafeJungleInfo from './Restaurants/CafeJungleInfo';
import Bellepat from './Restaurants/Bellepat';
import BellepatInfo from './Restaurants/BellepatInfo';
import Backyard from './Restaurants/Backyard';
import BackyardInfo from './Restaurants/BackyardInfo';

class Main extends React.Component {
  static navigationOptions = {};
  render() {
    return <MainNavigator />;
  }
}

const MainNavigator = createStackNavigator({
  Restaurants: {
    screen: createBottomTabNavigator({
      Restaurant: RestaurantList,
      Dish: DishList,
    }),
    navigationOptions: {header: null},
  },
  PHRestau: {
    screen: createBottomTabNavigator({
      Menu: PapaHans,
      Info: PapaHansInfo,
    }),
    navigationOptions: {
      title: 'Papa Hans',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  ChitosR: {
    screen: createBottomTabNavigator({
      Menu: Chitos,
      Info: ChitosInfo,
    }),
    navigationOptions: {
      title: 'Chitos',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  YeloR: {
    screen: createBottomTabNavigator({
      Menu: YeloLane,
      Info: YeloLaneInfo,
    }),
    navigationOptions: {
      title: 'Le Maison De Yelo Lane',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  RmaR: {
    screen: createBottomTabNavigator({
      Menu: Rma,
      Info: RmaInfo,
    }),
    navigationOptions: {
      title: 'RMA Kitchen',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  BuddysR: {
    screen: createBottomTabNavigator({
      Menu: Buddys,
      Info: BuddysInfo,
    }),
    navigationOptions: {
      title: "Buddy's Restaurant",
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  MacDaddysR: {
    screen: createBottomTabNavigator({
      Menu: MacDaddys,
      Info: MacDaddysInfo,
    }),
    navigationOptions: {
      title: "Mac Daddy's Grilled Burger",
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  VHR: {
    screen: createBottomTabNavigator({
      Menu: Vans,
      Info: VansInfo,
    }),
    navigationOptions: {
      title: 'Van and Hylas Foodstuff',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  KuboR: {
    screen: createBottomTabNavigator({
      Menu: Kubo,
      Info: KuboInfo,
    }),
    navigationOptions: {
      title: 'Kubo Sizzlers',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  GroundR: {
    screen: createBottomTabNavigator({
      Menu: Groundzero,
      Info: GroundzeroInfo,
    }),
    navigationOptions: {
      title: 'GROUNDZERO House of Pizza',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  CafeFR: {
    screen: createBottomTabNavigator({
      Menu: CafeF,
      Info: CafeFInfo,
    }),
    navigationOptions: {
      title: 'Cafe Florentina',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  AbcedeR: {
    screen: createBottomTabNavigator({
      Menu: Abcede,
      Info: AbcedeInfo,
    }),
    navigationOptions: {
      title: "Abcede's Resto",
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  CbarR: {
    screen: createBottomTabNavigator({
      Menu: Cbar,
      Info: CbarInfo,
    }),
    navigationOptions: {
      title: 'C Bar + Restaurant',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  OnyokR: {
    screen: createBottomTabNavigator({
      Menu: OnyokB,
      Info: OnyokBInfo,
    }),
    navigationOptions: {
      title: "Onyok's Bulaluhan",
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  PepetR: {
    screen: createBottomTabNavigator({
      Menu: Pepet,
      Info: PepetInfo,
    }),
    navigationOptions: {
      title: 'Pepet',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  PatioR: {
    screen: createBottomTabNavigator({
      Menu: PatioRizal,
      Info: PatioRInfo,
    }),
    navigationOptions: {
      title: 'Patio Rizal',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  CafeJR: {
    screen: createBottomTabNavigator({
      Menu: CafeJungle,
      Info: CafeJungleInfo,
    }),
    navigationOptions: {
      title: 'Cafe Jungle Lucban',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  BellepatR: {
    screen: createBottomTabNavigator({
      Menu: Bellepat,
      Info: BellepatInfo,
    }),
    navigationOptions: {
      title: 'Bellepat Restaurant Garden',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
  BackyardR: {
    screen: createBottomTabNavigator({
      Menu: Backyard,
      Info: BackyardInfo,
    }),
    navigationOptions: {
      title: 'Our Backyard Grill',
      headerStyle: {
        backgroundColor: '#4050b5',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
        textAlignVertical: 'center',
      },
      headerTintColor: 'white',
    },
  },
});

export default createAppContainer(MainNavigator);
