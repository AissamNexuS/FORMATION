import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import Userinput from './Userinput';
import SignupStyles from './SignupStyles';
import Api from '../../../src/source/api';
import DropDownPicker from 'react-native-dropdown-picker';

const Signup = ({ navigation }) => {
  const [MShow, setMshow] = useState(false);
  const [Name, setName] = useState('');
  const [Prenom, setPrenom] = useState('');
  const [Email, setEmail] = useState('');
  const [TelePhone, setTelePhone] = useState('');
  const [PassWord, setPassWord] = useState('');
  const [HideShowPassWord, setHideShowPassWord] = useState(true);
  const [type, setType] = useState('user');
  const [ouvrer, setouvrer] = useState(false);
  const [dropDown, setdropDown] = useState([
    { label: 'Parent', value: 'parent' },
    { label: 'Etudiant', value: 'user' },
  ]);
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const number = /[0-9]/;
  const letter = /[a-z]/;
  const Bletter = /[A-Z]/;

  const Signup1 = cb => {
    setMshow(true);
    Api()
      .post('/api/v1/auth/signup', {
        name: {
          first: Prenom,
          last: Name,
        },
        email: Email,
        telephone: TelePhone,
        password: PassWord,
        oneSignalPlayerId: '',
      })
      .then(res => {
        // storeData();
        setMshow(false);
        console.log('res', res);
        // cb && cb();
        navigation.replace('Signin');
      })
      .catch(e => {
        console.log('errrrrror   ', e.message);
        displayToast(e.message);
        setMshow(false);
      });
  };

  return (
    <>
      <View style={SignupStyles.con}>
        <View>
          <Text style={SignupStyles.contaire}>S'inscripte</Text>
        </View>
        <ScrollView style={SignupStyles.ScrollV}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Userinput
              name="Nom                    "
              value={Name}
              setValue={setName}
              autoCapitalize="words"
              autoCorrect={false}
            />

            <Userinput
              name="Prénom                 "
              value={Prenom}
              setValue={setPrenom}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>
          <View style={SignupStyles.NomSt}>
            <Text style={SignupStyles.TxtB}>
              {letter.test(Name) && Name.length < 3 && (
                <Text style={SignupStyles.contaire98}>❌ 3 caractére </Text>
              )}
              {!Bletter.test(Name) && Name.length > 0 && (
                <Text style={SignupStyles.contaire98}> | 1 en Maguscule </Text>
              )}
            </Text>
          </View>
          <View style={SignupStyles.PrenomS}>
            <Text style={SignupStyles.TxtB}>
              {letter.test(Prenom) && Prenom.length < 3 && (
                <Text style={SignupStyles.contaire98}>❌ 3 caractére </Text>
              )}
              {!Bletter.test(Prenom) && Prenom.length > 0 && (
                <Text style={SignupStyles.contaire98}> | 1 en Maguscule </Text>
              )}
            </Text>
          </View>
          <Text style={SignupStyles.contaire2}>Choisir t'on type</Text>
          <DropDownPicker
            open={ouvrer}
            value={type}
            items={dropDown}
            setOpen={setouvrer}
            setValue={setType}
            setItems={setdropDown}
            listMode="SCROLLVIEW"
            scrollViewProps={{
              nestedScrollEnabled: true,
            }}
            dropDownContainerStyle={SignupStyles.dropDown}
            style={SignupStyles.typeInput}
          />
          <View style={SignupStyles.EmV}>
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
          </View>
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
          <View style={SignupStyles.Eye}>
            <TouchableOpacity
              onPress={() => setHideShowPassWord(!HideShowPassWord)}>
              <Image
                source={
                  HideShowPassWord
                    ? require('../../../img/pngs/openEye.png')
                    : require('../../../img/pngs/closedEye.png')
                }
              />
            </TouchableOpacity>
          </View>
          <View style={SignupStyles.ChifrBottom}>
            <Text>
              <Text
                style={
                  PassWord.length >= 6
                    ? SignupStyles.texte
                    : SignupStyles.texte2
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
          </View>
          <TouchableOpacity
            disabled={
              !Email ||
              MShow ||
              !PassWord ||
              !Name ||
              !Prenom ||
              Prenom.length < 3 ||
              !letter.test(Prenom) ||
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
            onPress={Signup1}
            style={[
              SignupStyles.Btn,
              {
                backgroundColor:
                  !Email ||
                    MShow ||
                    !Name ||
                    !Prenom ||
                    !PassWord ||
                    !TelePhone ||
                    Name.length < 3 ||
                    Prenom.length < 3 ||
                    !reg.test(Email) ||
                    !number.test(PassWord) ||
                    !letter.test(PassWord) ||
                    PassWord.length <= 6 ||
                    TelePhone.length < 10 ||
                    !letter.test(Name) ||
                    !Bletter.test(Name)
                    ? '#80CDC1'
                    : '#268C63',
              },
            ]}>
            {MShow ? (
              <ActivityIndicator
                style={{ marginLeft: 10 }}
                color="#000"
                size="large"
              />
            ) : (
              <Text style={SignupStyles.EnterTxt}>Enter</Text>
            )}
          </TouchableOpacity>

          <View style={SignupStyles.con323}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signin');
              }}>
              <Text style={SignupStyles.texte3}>J’ai déjà un compte</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Signup;
