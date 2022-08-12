import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import RNLocation from 'react-native-location';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './MapStyles';

const MapViewPage = ({navigation}) => {
  const [viewLocation, isViewLocation] = useState({
    latitude: 30.882004,
    longitude: -6.582748,
    latitudeDelta: 10.0922,
    longitudeDelta: 10.0421,
  });
  const [adress, setAdress] = useState('');
  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText(adress);
  }, [adress, viewLocation]);

  RNLocation.configure({
    distanceFilter: 1, //null
  });

  const permissionHandle = async () => {
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse', // or 'fine'
      },
    });

    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK, Get location',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      let location = await RNLocation.getLatestLocation({timeout: 10000});
      console.log(
        location,
        location.longitude,
        location.latitude,
        location.timestamp,
      );
      //isViewLocation(location)
      console.log('viewLocation:   ', viewLocation);
    } else {
      console.log('Here 7');
      let location = await RNLocation.getLatestLocation({timeout: 10000});
      console.log(
        location,
        location.longitude,
        location.latitude,
        location.timestamp,
      );
    }
  };

  //AIzaSyBsGZDTFMa_sO45Vr9Aom7WfCpa_7mGnK8

  const onPress = (data, details = null) => {
    // 'details' is provided when fetchDetails = true
    setAdress(data.description);
    isViewLocation({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      latitudeDelta: 1.0922,
      longitudeDelta: 0.0421,
    });
  };

  const GooglePlacesInput = () => {
    return (
      <GooglePlacesAutocomplete
        placeholder={'Chercher'}
        ref={ref}
        minLength={2}
        autoFocus={false}
        returnKeyType={'default'}
        fetchDetails={true}
        onPress={onPress}
        query={{
          options:
            'https://developers.google.com/places/web-service/autocomplete',
          key: 'AIzaSyB8Cp5O6b0_TVjSxSTeksuMv64NXcFo5qs',
          language: 'fr',

          components: 'country:ma',
        }}
        textInputProps={{placeholderTextColor: 'gray'}}
        styles={{
          textInputContainer: styles.PlaceTextInputContainer,

          description: {
            fontWeight: 'bold',
            color: 'black',
          },
          textInput: {
            backgroundColor: '#E1FAF6',
            height: 44,
            borderRadius: 5,
            paddingVertical: 5,
            paddingHorizontal: 10,
            fontSize: 15,
            flex: 1,
            color: 'black',
          },

          poweredContainer: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            borderColor: '#E1FAF6',
            borderTopWidth: 0.5,
          },

          container: styles.inputContainer,
          predefinedPlacesDescription: {
            color: 'black',
          },
          row: {
            backgroundColor: '#E1FAF6',
            padding: 13,
            height: 44,
            flexDirection: 'row',
          },
          listView: styles.listView,
          rowData: {color: 'black'},

          separator: {
            height: 0.5,
            backgroundColor: '#E1FAF6',
          },

          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          },
          listView: {
            width: '90%',
          },
        }}
        enablePoweredByContainer={false}
        listViewDisplayed={false}
        currentLocation={false}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#E1FAF6"
        barStyle={'dark-content'}
        showHideTransition={'fade'}
        hidden={false}
      />

      <MapView
        style={{height: '100%', width: '100%'}}
        region={viewLocation}
        provider={PROVIDER_GOOGLE}
        mapType={'hybrid'}
        userLocationPriority={'high'}
        userLocationUpdateInterval={500}
        userLocationFastestInterval={5000}
        followsUserLocation
        showsMyLocationButton={true}
        showsCompass={true}
        showsUserLocation={true}>
        <Marker coordinate={viewLocation} pinColor={'#00F'} />
      </MapView>
      <GooglePlacesInput />
      {Platform.OS === 'android' && (
        <TouchableOpacity style={styles.positionBtn} onPress={permissionHandle}>
          <Image
            style={styles.icon}
            source={require('./../../../img/pngs/location.png')}
          />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};
export default MapViewPage;
