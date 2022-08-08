import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';
import StylesDetails from './DétailsStyle';
import {useSelector} from 'react-redux';

export default function Detais({navigation}) {
  const item = useSelector(state => state.details.value);

  return (
    <View style={StylesDetails.V}>
      <View style={StylesDetails.V2}>
        <Text style={StylesDetails.txt}> Détails </Text>
      </View>
      <Text style={StylesDetails.Tel2}>Bannière</Text>
      <View>
        <Image
          source={{uri: `https://api.formation.flexi-apps.com${item.imageUrl}`}}
          style={{width: 427.5, height: 235}}
        />
      </View>
      <View>
        <Text style={StylesDetails.Tel5}> Titles : </Text>
        <View style={StylesDetails.V3}>
          <Text style={StylesDetails.Tel2}>{item.title}</Text>
        </View>
        <View>
          <Text style={StylesDetails.Tel5}>Date Time :</Text>
          <View style={StylesDetails.V33}>
            <Text style={StylesDetails.Tel2}>
              {moment(item.created_at).format('MM/D/YYYY  h:mm ')}{' '}
            </Text>
          </View>
        </View>
        <View>
          <Text style={StylesDetails.Tel5}>Description :</Text>
          <View>
            <Text style={StylesDetails.Tel09}>{item.description}</Text>
          </View>
        </View>
      </View>

      <View>
        <TouchableOpacity
          style={{alignContent: 'center', alignItems: 'center', left: -3}}
          onPress={() => {
            navigation.navigate('PdfView', {
              item: item,
              uri: `https://api.formation.flexi-apps.com${item.fileUrl}`,
            });
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../../img/pngs/pdf.png')}
          />
          <Text style={StylesDetails.Tel6}>Telecharger le document</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={StylesDetails.Btn}>Retour aux postes</Text>
      </TouchableOpacity>
    </View>
  );
}
