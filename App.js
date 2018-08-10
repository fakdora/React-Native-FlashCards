import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Decks from './components/Decks'
import AddDeck from './components/AddDeck'
import { createStackNavigator, createBottomTabNavigator,
  createMaterialTopTabNavigator } from 'react-navigation';
import { purple, white } from './utils/colors'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'


// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   };

//   render () {
//     return (
//       <View>
//         <Decks />
//         <TouchableOpacity onPress={() => navigation.navigate('AddDeckView')}>
//         <Text>Press here for the Dashboard</Text>
//         </TouchableOpacity>
//       </View>)
//   }
// }

const DecksView = ({ navigation }) => (
  <View>
    <Decks />
  </View>
);

const AddDeckView = () => (
  <View>
    <AddDeck />
  </View>
);



const Stack = createStackNavigator({
  DecksView: {
    screen: DecksView,
  },
  AddDeckView: {
    screen: AddDeckView
  }
})

// const Tabs = createBottomTabNavigator({
//   DecksView: {
//     screen: DecksView
//   },
//   AddDeckView: {
//     screen: AddDeckView
//   },
// });


const RouteConfigs = {
  DecksView: {
    screen: DecksView,
    navigationOptions: {
      tabBarLabel: "Decks",
    }
  },
  AddDeckView: {
    screen: AddDeckView,
    navigationOptions: {
      tabBarLabel: "New Deck",
      // tabBarIcon: ({ tintColor }) => ()
    }
  }
};

const TabNavigatorConfig = {
  navigationOptions: {
  header: null
  },
  tabBarOptions: {
  activeTintColor: Platform.OS === "ios" ? purple : white,
  style: {
    height: 56,
    backgroundColor: Platform.OS === "ios" ? white : purple,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }, 
    shadowRadius: 6,
    shadowOpacity: 1
    }
  }
};


const Tabs =
  Platform.OS === "ios"
  ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig)
  : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Tabs />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
