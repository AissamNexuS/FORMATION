import React, { useEffect, useState, useRef } from "react";
import { Image, StyleSheet, BackHandler, Platform, Text,SafeAreaView, Keyboard, TouchableOpacity, View ,KeyboardAvoidingView,  StatusBar} from "react-native";
import styles from "./MapStyles";

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Marker } from 'react-native-maps'
import RNLocation from 'react-native-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const MapViewPage = ({navigation}) => {

  const [region, setRegion] = useState({latitude: 42.882004,longitude: 74.582748,latitudeDelta: 0.0922,longitudeDelta: 0.0421})
  const [viewLocation, isViewLocation] = useState({latitude: 42.882004,longitude: 74.582748,latitudeDelta: 0.0922,longitudeDelta: 0.0421})
  const [adress, setAdress] = useState('')
  const ref = useRef();


  const backAction = () => {
    navigation.replace("Commencer")
  };


  useEffect(() => {
    
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);



  //useEffect to set the adress selected
  useEffect(() => {
    ref.current?.setAddressText(adress);
  }, [adress, viewLocation]);




  RNLocation.configure({
    distanceFilter: 1 //null
   })


   //check permissions

   const permissionHandle = async () => {

    console.log('here')
 
 
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse' // or 'fine'
      }
    });
 
    console.log('here2')
    console.log(permission)

    if(!permission){
      //ask permissions

  permission = await RNLocation.requestPermission({
    ios: "whenInUse",
    android: {
      detail: "coarse",
      rationale: {
        title: "We need to access your location",
        message: "We use your location to show where you are on the map",
        buttonPositive: "OK",
        buttonNegative: "Cancel"
      }
    }
  })
  console.log(permission)
  let location = await RNLocation.getLatestLocation({timeout: 10000})
     console.log(location, location.longitude, location.latitude, 
           location.timestamp)

           //isViewLocation(location)
           console.log("viewLocation:   ",viewLocation);

    }else{
      console.log("Here 7")
    let location = await RNLocation.getLatestLocation({timeout: 10000})
    console.log(location, location.longitude, location.latitude,   
                location.timestamp)
                //isViewLocation(location)
                console.log("viewLocation11111:   ",viewLocation);

                console.log("Location:",location);
    }
 
  }

//AIzaSyBsGZDTFMa_sO45Vr9Aom7WfCpa_7mGnK8


    const onPress = (data, details = null) => {
        // 'details' is provided when fetchDetails = true
        setAdress(data.description)
        isViewLocation(
            {
            
            latitude: details.geometry.location.lat, longitude: details.geometry.location.lng, latitudeDelta: 1.0922,longitudeDelta: 0.0421 // selected coordinates
            }
        );

        console.log("viewLocation:     ",adress);
        console.log("viewLocation:1111     ",data.description);
    }

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
          key: "AIzaSyB8Cp5O6b0_TVjSxSTeksuMv64NXcFo5qs",
          language: 'fr', 

          components: 'country:ma',
          
        }}
        textInputProps={{ placeholderTextColor: 'gray' }}
        styles={{
          textInputContainer: styles.PlaceTextInputContainer,
         
          description: {
            fontWeight: 'bold',
            color:"black",
            
          },
          textInput: {backgroundColor: '#FFFFFF',
          height: 44,
          borderRadius: 5,
          paddingVertical: 5,
          paddingHorizontal: 10,
          fontSize: 15,
          flex: 1,
        color:"black"},

        poweredContainer: {
          justifyContent: 'flex-start',
          alignItems: 'center',
          borderBottomRightRadius: 5,
          borderBottomLeftRadius: 5,
          borderColor: '#c8c7cc',
          borderTopWidth: 0.5,
        },



          container: styles.inputContainer,
          predefinedPlacesDescription: {
            color: 'black',
          },
          row: {backgroundColor: '#FFFFFF',
          padding: 13,
          height: 44,
          flexDirection: 'row',},
          listView: styles.listView,
          rowData: {color:"black"},
          
          separator: {
            height: 0.5,
            backgroundColor: '#c8c7cc',
          },

          loader: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            height: 20,
          },
          listView: {
            width:"90%"
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
        backgroundColor="#FFFFFF"
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        hidden={false} />
        
      <MapView    
          
      style={{height:"100%", width:"100%"}}        
      region={viewLocation}  
      
      provider={PROVIDER_GOOGLE}
      mapType={'terrain'}
      userLocationPriority={'high'}
      userLocationUpdateInterval={500}
      userLocationFastestInterval={5000}
      followsUserLocation
      showsMyLocationButton={true}
      showsCompass={true}
      showsUserLocation={true}>
      <Marker coordinate={viewLocation} 
       pinColor={"blue"} />
      </MapView> 
      <GooglePlacesInput/>
      {Platform.OS === 'android' &&(
        <TouchableOpacity style={styles.positionBtn} onPress={permissionHandle}>
        <Image style={styles.icon} source={require('./../../../img/pngs/location.png')}/>
      </TouchableOpacity>
      )}

    </SafeAreaView>
  );
}
export default MapViewPage;
