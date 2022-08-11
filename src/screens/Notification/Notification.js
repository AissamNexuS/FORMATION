import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Notification en mantenece"
        color="error"
        type="solid"
        size="lg"
        icon={{
          name: 'notifications',
          type: 'font-awnsome',
          color: '#000',
          size: 30,
        }}
        buttonStyle={{
          borderRadius: 29,
          backgroundColor: 'rgba(255, 0, 0, 0.7)',
          borderWidth: 10,
          borderColor: 'rgba(255, 0, 0, 0.3)',
        }}
        containerStyle={{
          width: 340,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#E0E0E0',
  },
});
export default Notification;
