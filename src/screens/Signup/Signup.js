import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import Userinput from '../component/auth/Userinput';
import SignupStyles from './SignupStyles';
import Api from '../../../src/source/api';

const Signup = ({navigation}) => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [TelePhone, setTelePhone] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [HideShowPassWord, setHideShowPassWord] = useState(true);

  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const number = /[0-9]/;
  const letter = /[a-z]/;
  const Bletter = /[A-Z]/;

  const Signup1 = cb => {
    setLoading(true);
    Api()
      .post('/api/v1/auth/signup', {
        username: Name,
        email: Email,
        telephone: TelePhone,
        password: PassWord,
        oneSignalPlayerId: '',
      })
      .then(res => {
        // storeData();
        setLoading(false);
        console.log('res', res);
        // cb && cb();
        navigation.replace('Signin');
      })
      .catch(e => {
        console.log('errrrrror   ', e.message);
        // displayToast(e.message)
        setLoading(false);
      });
  };

  return (
    <View style={SignupStyles.con}>
      <View style={{justifyContent: 'flex-start'}}>
        <Text style={SignupStyles.contaire}>S'inscripte</Text>
      </View>
      <ScrollView style={SignupStyles.ScrollV}>
        <Userinput
          name="Nom et Prénom"
          value={Name}
          setValue={setName}
          autoCapitalize="words"
          autoCorrect={false}
        />

        <Text style={SignupStyles.TxtB}>
          {letter.test(Name) && Name.length < 3 && (
            <Text style={SignupStyles.contaire98}>❌ Minimum 3 caractére </Text>
          )}
          {!Bletter.test(Name) && Name.length > 0 && (
            <Text style={SignupStyles.contaire98}> | 1 en Maguscule </Text>
          )}
        </Text>

        <Userinput
          name="E-mail"
          value={Email}
          setValue={setEmail}
          keyboardType="email-address"
          onChangeText={text => [setEmail(text)]}
        />
        {!reg.test(Email) && Email.length > 0 && (
          <Text style={SignupStyles.contaire98}>❌ E-mail non valide</Text>
        )}
        <Userinput
          name="Téléphone"
          value={TelePhone}
          setValue={setTelePhone}
          keyboardType="numeric"
        />
        {number.test(TelePhone) && TelePhone.length < 10 && (
          <Text style={SignupStyles.contaire98}>
            ❌ Entrez le numéro de téléphone complet{' '}
          </Text>
        )}

        <Userinput
          name="mot de passe"
          value={PassWord}
          setValue={setPassWord}
          secureTextEntry={HideShowPassWord}
          autoComplteType="password"
        />
        <View style={{top: -60, left: 320}}>
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
              PassWord.length >= 6 ? SignupStyles.texte : SignupStyles.texte2
            }>
            {' '}
            Minimum 6 caractére{' '}
          </Text>
          <Text
            style={
              letter.test(PassWord) && PassWord.length > 0
                ? SignupStyles.texte
                : SignupStyles.texte2
            }>
            . Lettre
          </Text>
          <Text
            style={
              number.test(PassWord) && PassWord.length > 0
                ? SignupStyles.texte
                : SignupStyles.texte2
            }>
            . Chiffre
          </Text>
        </Text>
        <TouchableOpacity
          disabled={
            !Email ||
            !PassWord ||
            !Name ||
            !TelePhone ||
            !reg.test(Email) ||
            !number.test(PassWord) ||
            !letter.test(PassWord) ||
            PassWord.length <= 6 ||
            Name.length < 3 ||
            TelePhone.length < 10 ||
            !letter.test(Name) ||
            !Bletter.test(Name)
          }
          onPress={Signup1}>
          <Text
            style={[
              SignupStyles.Btn,
              {
                opacity:
                  !Email ||
                  !Name ||
                  !PassWord ||
                  !TelePhone ||
                  Name.length < 3 ||
                  !reg.test(Email) ||
                  !number.test(PassWord) ||
                  !letter.test(PassWord) ||
                  PassWord.length <= 6 ||
                  TelePhone.length < 10 ||
                  !letter.test(Name) ||
                  !Bletter.test(Name)
                    ? 0.7
                    : 1,
              },
            ]}>
            Suivant
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signin');
          }}>
          <Text style={SignupStyles.texte3}>J’ai déjà un compte</Text>
        </TouchableOpacity>
        <ActivityIndicator
          style={SignupStyles.activity}
          size="large"
          color="#229764"
          animating={loading}
        />
      </ScrollView>
    </View>
  );
};

export default Signup;
