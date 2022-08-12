import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import React from 'react';
import {Notifs} from './notif';
import styles from './NotificationStyles';

const Notification = ({navigation}) => {
  const Itmss = ({item, titre, text}) => (
    <TouchableOpacity style={styles.item} onPress={() => {}}>
      <View style={styles.titreTxtView}>
        <Text style={styles.titre}>{titre}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  const Render = ({item}) => {
    return (
      <Itmss item={item} id={item.id} titre={item.titre} text={item.text} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        hidden={false}
      />

      <View style={styles.flat}>
        <FlatList
          data={Notifs}
          renderItem={Render}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          progressViewOffset={100}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;
