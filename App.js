import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/screens/Signup/Signup';
import Signin from './src/screens/Login/Signin';
import Home from './src/screens/Home/Home';
import Nologin from './src/screens/Nologin/Nologin';
import Map from './src/screens/Maps/Map';
import Share from './src/screens/Share/Share';
import Détails from './src/screens/Détails/Détails';
import AddPost from './src/screens/AddPost/AddPost';
import Nocnx from './src/screens/NoCnx/Nocnx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {Platform} from 'react-native';
import PdfView from './src/screens/pdf/pdf';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';
import {setConnected} from './src/Redux/CnxSlice';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeName = 'Home';
const MapName = 'Map';
const ShareName = 'Share';

export default function app() {
  const dispatch = useDispatch();

  const connected = useSelector(state => state?.connected?.value);

  const ButonBarSelect = () => {
    return (
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({route}) => ({
          headerShown: false,
          headerBackground: 'green',
          tabBarItemStyle: {backgroundColor: '#E1FAF6'},
          tabBarLabelStyle: {fontWeight: '500', fontSize: 14, marginBottom: 6},
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: 'grey',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: Platform.OS === 'android' ? 60 : 90,
            backgroundColor: '#E1FAF6',
            borderTopLeftRadius: 10,
          },
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === MapName) {
              iconName = focused ? 'map' : 'map-outline';
            } else if (rn === ShareName) {
              iconName = focused ? 'share-social' : 'share-social-outline';
            }

            // You can return any component that you like here!
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Share" component={Share} />
      </Tab.Navigator>
    );
  };

  const unsubscribe = NetInfo.addEventListener(state => {
    if (connected !== state.isConnected) {
      dispatch(setConnected(state.isConnected));
    }
  });

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Nologin"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Nologin" component={Nologin} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="HomeOR" component={ButonBarSelect} />
          <Stack.Screen name="Détails" component={Détails} />
          <Stack.Screen name="AddPost" component={AddPost} />
          <Stack.Screen name="PdfView" component={PdfView} />
          <Stack.Screen name="Nocnx" component={Nocnx} />
        </Stack.Navigator>
      </NavigationContainer>
      {!connected && <Nocnx />}
    </>
  );
}
