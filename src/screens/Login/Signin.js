import React, {useState, useEffect} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  BackHandler,
  Image,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import Api from './../../source/api';
import SimpleLottie from '../component/SimpleLottie/SimpleLottie';
import {displayToast} from '../../../lib/interactions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SigninStyles from './SigninStyle';
import ActivityIndicatorS from '../component/indicator/ActivityIndicatorS';
const Signin = ({navigation}) => {
  const [Email, setEmail] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [HideShowPassWord, setHideShowPassWord] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const number = /[0-9]/;
  const letter = /[a-zA-Z]/;

  useEffect(() => {
    getEmail();
    getPassword();
  }, []);

  const backAction = () => {
    BackHandler.exitApp();
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  function setEmail2(email) {
    var promise = new Promise(resolve => {
      try {
        AsyncStorage.setItem('email', Email);
        resolve();
      } catch (error) {
        //reportError("set session error", error);
      }
    });

    return promise;
  }

  function setPassWord2(password) {
    var promise = new Promise(resolve => {
      try {
        AsyncStorage.setItem('password', PassWord);
        resolve();
      } catch (error) {
        //reportError("set session error", error);
      }
    });

    return promise;
  }

  function getEmail() {
    var promise = new Promise(async (resolve, reject) => {
      try {
        const result = await AsyncStorage.getItem('email');
        resolve(result);
        console.log('email:   ', result);
        if (result) {
          setEmail(result);
        }
      } catch (error) {
        //reportError("get already in error", error);
        reject(error);
      }
    });
    return promise;
  }
  function getPassword() {
    var promise = new Promise(async (resolve, reject) => {
      try {
        const result = await AsyncStorage.getItem('password');
        resolve(result);
        console.log('password:   ', result);
        if (result) {
          setPassWord(result);
        }
      } catch (error) {
        //reportError("get already in error", error);
        reject(error);
      }
    });
    return promise;
  }

  const Signin1 = () => {
    setEmail2(Email);
    setPassWord2(PassWord);
    setIsLoading(true);
    setShow(true);

    Api()
      .post('/api/v1/auth/signin', {
        username: Email,
        password: PassWord,
        oneSignalPlayerId: '',
      })
      .then(res => {
        storeData();
        setIsLoading(false);
        console.log('res', res);
        navigation.replace('HomeOR');
      })
      .catch(e => {
        setShow(false);
        console.log('errrrrror   ', e.message);
        displayToast(e.message);
        setIsLoading(false);
      });
  };
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('email', Email);
      console.log('Sescuful 1');
    } catch (e) {
      console.log('err 1');
    }
    try {
      await AsyncStorage.setItem('mdp', PassWord);
      console.log('Sescuful 2');
    } catch (e) {
      console.log('Err 2');
    }
  };
  return (
    <SafeAreaView style={SigninStyles.con}>
      <StatusBar
        animated={true}
        backgroundColor="#E1FAF6"
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
      {show ? (
        <SimpleLottie
          onPress={() => {
            setShow(false);
          }}
        />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={{justifyContent: 'flex-start'}}>
            <Text style={SigninStyles.contaire}>Se Connecter</Text>
          </View>
          <ScrollView style={SigninStyles.ScrollV}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../../img/logo.png')}
                style={{width: 300, height: 300}}
              />
            </View>

            <Text style={SigninStyles.contaire2}>E-mail</Text>
            <TextInput
              style={SigninStyles.bord}
              autoCorrect={false}
              keyboardType={'email-address'}
              value={Email}
              onChangeText={text => setEmail(text)}
            />
            {!reg.test(Email) && Email.length > 0 && (
              <Text style={SigninStyles.contaire98}>❌ E-mail non valide </Text>
            )}

            <Text style={SigninStyles.contaire2}>mot de passe</Text>
            <TextInput
              style={SigninStyles.bord}
              autoCorrect={false}
              secureTextEntry={HideShowPassWord}
              value={PassWord}
              onChangeText={text => setPassWord(text)}
            />
            <View style={{top: -56, left: 330}}>
              <TouchableOpacity
                onPress={() => setHideShowPassWord(!HideShowPassWord)}>
                <Image
                  source={
                    HideShowPassWord
                      ? require('../../../img/pngs/show.png')
                      : require('../../../img/pngs/hide.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <Text>
              <Text
                style={
                  PassWord.length >= 6
                    ? SigninStyles.texte
                    : SigninStyles.texte2
                }>
                {' '}
                Minimum 6 caractére{' '}
              </Text>
              <Text
                style={
                  letter.test(PassWord) && PassWord.length > 0
                    ? SigninStyles.texte
                    : SigninStyles.texte2
                }>
                . Lettre
              </Text>
              <Text
                style={
                  number.test(PassWord) && PassWord.length > 0
                    ? SigninStyles.texte
                    : SigninStyles.texte2
                }>
                . Chiffre
              </Text>
            </Text>

            <TouchableOpacity
              disabled={!Email || !PassWord || !reg.test(Email)}
              onPress={Signin1}>
              <Text
                style={[
                  SigninStyles.Btn,
                  {
                    opacity:
                      Email === '' ||
                      PassWord === '' ||
                      !reg.test(Email) ||
                      !number.test(PassWord) ||
                      !letter.test(PassWord) ||
                      PassWord.length <= 6
                        ? 0.6
                        : 1,
                  },
                ]}>
                Enter
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}>
              <Text style={SigninStyles.texte3}>Je n’ai pas de compte</Text>
            </TouchableOpacity>
            <ActivityIndicatorS isLoading={isLoading} />
          </ScrollView>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default Signin;
