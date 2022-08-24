import React from 'react';
import { View, SafeAreaView, Image, Text, StatusBar } from 'react-native';

import { styles } from './styles';

export default function Nocnx() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={'light-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <View style={styles.container1}>
        <Image
          style={styles.nowifi}
          source={require('../../../img/pngs/no-signal.png')}
        />
        <Text style={styles.txt1}>Pas de connexion internet</Text>
        <Text style={styles.txt2}>
          Essayez ces étapes suivants vérifiez vous connection :
        </Text>
        <View style={styles.imgTxtView}>
          <View style={styles.imgTxt}>
            <Image
              style={styles.checked}
              source={require('../../../img/pngs/check.png')}
            />
            <Text style={styles.txt3}>
              Vérifiez votre modem pour vous reconnecter
            </Text>
          </View>
          <View style={styles.imgTxt}>
            <Image
              style={styles.checked}
              source={require('../../../img/pngs/check.png')}
            />
            <Text style={styles.txt3}>Reconnectez-vous au 'WI-FI'</Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.btn} onPress={checkConnection}>
          <Text style={styles.btnTxt}>Recharger</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
}
