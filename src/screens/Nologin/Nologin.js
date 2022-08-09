import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import storage from '../../source/storage';
import {useDispatch} from 'react-redux';
import {initializeList} from '../../Redux/PostSlice';

export default function Nologin({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeList([]));
    isLoggedIn();
  }, []);

  const isLoggedIn = async () => {
    const session = await storage.getSession();

    if (session) {
      navigation.replace('HomeOR');
      console.log('heeeeeereeeeee')
    } else {
      navigation.replace('Signin');
    }
  };
  return (
    <SafeAreaView
      style={{
        felx: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#E1FAF6',
      }}></SafeAreaView>
  );
}
