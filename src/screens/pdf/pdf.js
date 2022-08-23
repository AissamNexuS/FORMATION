import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Pdf from 'react-native-pdf';
import {ScaledSheet} from 'react-native-size-matters';
import {displayToast} from '../../../lib/interactions';

export default function PdfView({navigation, route}) {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState();

  const {item} = route?.params;

  function fileDownload() {
    console.log('download');

    if (Platform.OS === 'ios') {
      downloadFile();
    } else {
      try {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Important message',
            message: 'Activer la permission de stockage pour telechager',
          },
        ).then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //Once user grant the permission start downloading
            console.log('Storage Permission Granted.');
            downloadFile();
          } else {
            //If permission denied then show alert 'Storage Permission Not Granted'
            Alert.alert(
              'Désolé!',
              'Veuillez activer la permission pour télécharger le document',
            );
          }
        });
      } catch (err) {
        //To handle permission related issue
        console.log('errorerererer', err);
      }
    }
  }

  const downloadFile = async () => {
    const {config, fs} = RNFetchBlob;
    let PictureDir =
      Platform.OS === 'ios' ? fs.dirs.DocumentDir : fs.dirs.DownloadDir;
    let date = new Date();
    let options = {
      fileCache: true,
      path:
        PictureDir +
        '/' +
        item.title +
        ' ' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        '.pdf',
      addAndroidDownloads: {
        //Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/' +
          item.title +
          ' ' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          '.pdf',
        description: 'Risk Report Download',
      },
    };
    config(options)
      .fetch(
        'GET',
        `https://api.formation.flexi-apps.com${item.downloadFileUrl}`,
      )
      .then(res => {
        //Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        if (Platform.OS !== 'ios') {
          displayToast(
            "Merci d'avoir téléchagé le document allez à votre dossier de téléchargement",
          );
        } else {
          RNFetchBlob.ios.openDocument(res.data);
        }
      });
  };

  const {uri} = route?.params;

  const source = {uri: uri, cache: true};

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000000"
        barStyle={'light-content'}
        showHideTransition={'slide'}
        hidden={false}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.Back}
          onPress={() => {
            navigation.navigate('Détails', {item: item});
          }}>
          <Image
            style={styles.Icons}
            source={require('../../../img/pngs/chevronLeft.png')}
          />
        </TouchableOpacity>

        <Text style={styles.NumberPage}>
          {page}/{pages}
        </Text>

        <TouchableOpacity style={styles.Back} onPress={fileDownload}>
          <Image
            style={styles.Icons}
            source={require('../../../img/pngs/download.png')}
          />
        </TouchableOpacity>
      </View>

      <Pdf
        source={source}
        onLoadComplete={numberOfPages => {
          setPages(numberOfPages);
        }}
        onPageChanged={(page, numberOfPages) => {
          setPage(page);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  pdf: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    marginBottom: '50@s',
  },

  Back: {
    height: '50@vs',
    width: '50@s',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '8@s',
    margin: '5@s',
  },
  Icons: {
    height: '30@vs',
    width: '30@s',
  },

  NumberPage: {
    fontSize: '15@s',
    color: 'white',
    fontWeight: '500',
  },
});
