import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters/extend';

function Userinput({ name, value, setValue, autoCapitalize = 'none', keyboardType = 'default', secureTextEntry = false, }) {
  return (
    <View style={styles.con}>
      <Text style={styles.contaire2}>{name}</Text>
      <TextInput
        style={styles.bord}
        autoCorrect={false}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={text => setValue(text)} />
    </View>
  );
}
const styles = ScaledSheet.create({
  con: {
    padding: 10,
    backgroundColor: '#E1FAF6',
  },
  bord: {
    fontSize: 25,
    color: '#373737',
    backgroundColor: '#fffff0',
    shadowColor: '#999999',
    padding: '16@s',

    borderRadius: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '5@vs',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
  },
  contaire2: {
    color: '#373737',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Userinput;
