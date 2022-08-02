import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from 'react-redux';
import store from '../src/Redux/store';
// Screens
import Home from '../screens/Home'

let persistor = persistStore(store);

//Screen names
const homeName = "Home";


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let rn = route.name;

                if (rn === homeName) {
                  iconName = focused ? 'home' : 'home-outline';

                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: '#539D48',
              inactiveTintColor: 'grey',
              labelStyle: { paddingBottom: 10, fontSize: 10 },
              style: { padding: 10, height: 70 },
            }}>

            <Tab.Screen name={homeName} component={Home} />


          </Tab.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer >
  );
}

export default MainContainer;