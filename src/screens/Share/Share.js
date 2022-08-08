import {Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import ShareStyles from './ShareStyles';
import Share from 'react-native-share';
import filesBase64 from './filesBase64';

const ShareC = navigation => {
  const Myshare = async () => {
    const ShareOptions = {
      message: 'Test message for formation',
      urls: [filesBase64.image1, filesBase64.image2],
    };
    try {
      const shareResponse = await Share.open(ShareOptions);
      console.log(JSON.stringify(shareResponse));
    } catch (err) {
      console.log('errrrrror', err);
    }
  };

  return (
    <View style={ShareStyles.Flx}>
      <TouchableOpacity onPress={Myshare}>
        <View style={ShareStyles.View01}>
          <Text style={ShareStyles.Title}>
            Partager l'image (test image urls)
          </Text>
        </View>
      </TouchableOpacity>
      {/* 
            <TouchableOpacity>
                <View style={ShareStyles.View02}>
                    <Text style={ShareStyles.Title}>Share Apk </Text>
                </View>
            </TouchableOpacity> */}
    </View>
  );
};

export default ShareC;
