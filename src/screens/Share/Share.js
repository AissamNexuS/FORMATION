import {Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import ShareStyles from './ShareStyles';
import Share from 'react-native-share';

const ShareC = () => {
  const url =
    'https://drive.google.com/file/d/1BrQZIawHeZGvvafdwuUHa-l3TCPLQSYU/view?usp=sharing';
  const title = "Lien d'application";
  const message = 'Veuillez vérifier ceci.';

  const options = {
    title,
    url,
    message,
  };

  const share = async (customOptions = options) => {
    try {
      await Share.open(customOptions);
    } catch (err) {
      console.log('error sharing  :', err);
    }
  };
  return (
    <View style={ShareStyles.Flx}>
      <TouchableOpacity
        onPress={async () => {
          await share();
        }}>
        <View style={ShareStyles.View01}>
          <Text style={ShareStyles.Title}>Share Apk</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShareC;
