import { Text, Image, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './ShareStyles'
import Share from 'react-native-share';


const ShareC = () => {
  const url =
    'https://drive.google.com/file/d/1BrQZIawHeZGvvafdwuUHa-l3TCPLQSYU/view?usp=sharing';
  const title = "Lien pour telecharger  l'application";
  const message = "merci de telecharger et partager l'app.";
  const options = {
    title,
    url,
    message,
  };

  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TouchableOpacity
      style={[styles.touch]}
      onPress={async () => {
        await share();
      }}>
      <View style={styles.semi}>
        <Image
          style={styles.iconPartage}
          source={require('../../../img/pngs/partager.png')}
        />
      </View>
      <Text style={{ color: 'black' }}>Share</Text>
    </TouchableOpacity>
  );
};
export default ShareC;
