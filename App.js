import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './src/screens/Signup/Signup';
import Signin from './src/screens/Login/Signin';
import Home from './src/screens/Home/Home';
import Nologin from './src/screens/Nologin/Nologin';
import Map from './src/screens/Maps/Map';
import Détails from './src/screens/Détails/Détails';
import Notification from './src/screens/Notification/Notification';
import AddPost from './src/screens/AddPost/AddPost';
import Nocnx from './src/screens/NoCnx/Nocnx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import PdfView from './src/screens/pdf/pdf';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';
import {setConnected} from './src/Redux/CnxSlice';
import OneSignal from 'react-native-onesignal';
import {ScaledSheet} from 'react-native-size-matters/extend';
import Share from 'react-native-share';

////////////////////////////////////////////////:
OneSignal.setAppId('f30f9440-4783-4a36-8b23-7cbbc153ee7e');

OneSignal.promptForPushNotificationsWithUserResponse(response => {
  console.log(' response   ===>:', response);
});

OneSignal.setNotificationWillShowInForegroundHandler(
  notificationReceivedEvent => {
    console.log(
      'OneSignal: notification will show in foreground====>:',
      notificationReceivedEvent,
    );
    let notification = notificationReceivedEvent.getNotification();

    const data = notification.additionalData;
    console.log('additionalData: ', data);
    notificationReceivedEvent.complete(notification);
  },
);

OneSignal.addSubscriptionObserver(event => {
  console.log('ssssss ====>:', event);
});

OneSignal.setNotificationOpenedHandler(notification => {
  console.log('notification opened=====>:', notification);
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeName = 'Home';
const MapName = 'Map';
const NotificationName = 'Notification';

const Partager = () => {
  const url =
    'https://drive.google.com/file/d/1BrQZIawHeZGvvafdwuUHa-l3TCPLQSYU/view?usp=sharing';
  const title = "Lien pour telecharger  l'application";
  const message = "merci de telecharger et partager l'app.";

  const options = {
    title,
    url,
    message,
  };

  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TouchableOpacity
      style={[styles.touch]}
      onPress={async () => {
        await share();
      }}>
      <View style={styles.semi}>
        <Image
          style={styles.iconPartage}
          source={require('./img/pngs/partager.png')}
        />
      </View>
      <Text style={{color: 'black'}}>Share</Text>
    </TouchableOpacity>
  );
};

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
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#000000',
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            backgroundColor: '#E1FAF6',
            borderTopLeftRadius: 10,
            height: Platform.OS === 'android' ? 70 : 90,
          },
          tabBarItemStyle: {
            backgroundColor: '#E1FAF6',
          },
          tabBarLabelStyle: {
            fontWeight: '400',
            fontSize: 14,
            marginBottom: 6,
          },
          tabBarIcon: ({focused}) => {
            let iconName;
            let width;
            let height;
            let rn = route.name;

            if (rn === HomeName) {
              width = 30;
              height = 30;
              iconName = !focused
                ? require('./img/pngs/activeHome.png')
                : require('./img/pngs/inactiveHome.png');
            } else if (rn === MapName) {
              width = 32;
              height = 32;
              iconName = focused
                ? require('./img/pngs/map.png')
                : require('./img/pngs/inactiveMap.png');
            } else if (rn === NotificationName) {
              width = 35;
              height = 35;
              iconName = focused
                ? require('./img/pngs/activeNot.png')
                : require('./img/pngs/inactiveNot.png');
            }

            // You can return any component that you like here!
            return (
              <View style={{padding: 20}}>
                <Image
                  source={iconName}
                  style={[{width: width, height: height}]}
                />
              </View>
            );
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen
          name="Partager"
          component={Partager}
          options={{tabBarButton: props => <Partager {...props} />}}
        />
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
const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '80@s',
    backgroundColor: '#E1FAF6',
    position: 'absolute',
    bottom: 100,
  },
  footer: {
    flexDirection: 'row',
  },

  icon: {
    width: '30@s',
    height: '30@s',
    margin: 5,
  },
  iconPartage: {
    width: '26@s',
    height: '26@s',
  },
  touch: {
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1FAF6',
  },
});
