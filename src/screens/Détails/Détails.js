import React, { useEffect } from 'react';
import { Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import moment from 'moment';
import StylesDetails from './DétailsStyle';
import { useSelector } from 'react-redux';

export default function Detais({ navigation }) {
  const item = useSelector(state => state.details.value);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <View style={StylesDetails.V}>
        <View style={StylesDetails.V2}>
          <TouchableOpacity
            style={StylesDetails.btnBack}
            onPress={() => {
              navigation.navigate('HomeOR');
            }}>
            <Image
              style={StylesDetails.icon}
              source={require('../../../img/pngs/chevronLeft.png')}
            />
          </TouchableOpacity>
          <Image
            source={{
              uri: `https://api.formation.flexi-apps.com${item.imageUrl}`,
            }}
            style={StylesDetails.imag}
          />
        </View>
        <View style={StylesDetails.Vpage}>
          <Text style={StylesDetails.Tel}>{item.title}</Text>
          <View>
            <Text style={StylesDetails.Tel2}>
              {moment(item.created_at).format('MM/D/YYYY  h:mm ')}{' '}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={StylesDetails.btnPdf}
            onPress={() => {
              navigation.navigate('PdfView', {
                item: item,
                uri: `https://api.formation.flexi-apps.com${item.fileUrl}`,
              });
            }}>
            <Image
              style={StylesDetails.iconPdf}
              source={require('../../../img/pngs/pdf.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={StylesDetails.Tel09}>{item.description}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
