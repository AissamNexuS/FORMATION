
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './screens/Signup';
import Signin from './screens/Signin';
import Home from './screens/Home';
import Map from './screens/Map';
import Notification from './screens/Notification';
import Détails from './screens/Détails'
import AddPost from './screens/AddPost';
import { Provider } from 'react-redux';
import store from './src/Redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
let persistor = persistStore(store);

const HomeName = "Home";
const MapName = "Map"
const notificationName = "Notification";

export default function app() {

  const ButonBarSelect = () => {
    return (
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          headerShown: false,
          headerBackground: 'green',
          tabBarStyle: { height: Platform.OS === 'android' ? 60 : 90, backgroundColor: '#E1FAF6', borderTopLeftRadius: 10 },
          tabBarItemStyle: { backgroundColor: '#E1FAF6' },
          tabBarLabelStyle: { fontWeight: "500", fontSize: 14, marginBottom: 6 },
          tabBarActiveTintColor: '#268C63',
          tabBarInactiveTintColor: "grey",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === MapName) {
              iconName = focused ? 'map' : 'map-outline';

            } else if (rn === notificationName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            // You can return any component that you like here!
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}


      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Notification" component={Notification} />
      </Tab.Navigator >

    )
  }


  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Stack.Navigator
            initialRouteName='Signin'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="HomeOR" component={ButonBarSelect} />
            <Stack.Screen name="Détails" component={Détails} />
            <Stack.Screen name="AddPost" component={AddPost} />
          </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  )
}

