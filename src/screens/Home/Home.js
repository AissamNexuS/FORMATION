import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  BackHandler,
  Image,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Api from '../../source/api';
import ActivityIndicatorS from '../component/indicator/ActivityIndicatorS';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectPosts,
  setPosts,
  initial,
  initializeList,
} from './../../Redux/PostSlice';
import moment from 'moment';
import {setDetails} from './../../Redux/DetailsSlice';
import HomeStyles from './HomeStyle';
import storage from '../../source/storage';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [ShowModel, setShowModel] = useState(false);
  const [load, setLoad] = useState(true);
  const [count, setCount] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const postFromStorage = useSelector(selectPosts);
  const [MShow, setMshow] = useState(false);

  useEffect(() => {
    dispatch(initial([]));
    LoadData(0);

    console.log(postFromStorage);
  }, []);

  // const backAction = () => {
  //   BackHandler.exitApp();
  // };
  // useEffect(() => {
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //   return () => backHandler.remove();
  // }, []);

  const onRefresh = () => {
    setLoad(false);
    dispatch(initializeList([]));
    LoadData(0);
  };

  const onEndReached = () => {
    setLoad(true);
    if (postFromStorage?.length < count) {
      LoadData(postFromStorage?.length);
    } else {
      setLoad(false);
    }
  };
  const LoadMore = () => {
    return (
      //Footer View with Load More button
      <View style={HomeStyles.footer}>
        <ActivityIndicator color="black" size="small" animating={load} />
      </View>
    );
  };

  const {unionBy} = require('lodash');

  const LoadData = skip => {
    Api()
      .get(`/api/v1/posts?$skip=${skip}&$top=10`)
      .then(responseJson => {
        setIsFetching(false);
        if (skip === 0) {
          dispatch(setPosts(responseJson.value));
          console.log('postFromStorage:       ', postFromStorage);
        } else {
          dispatch(
            setPosts(unionBy(postFromStorage, responseJson.value, '_id')),
          );

          // console.log("skip diffffff 0")
        }
        setCount(responseJson.count);
      })
      .catch(e => {
        console.log('errrrrror   ', e);
      });
  };
  const Logout = () => {
    setMshow(true);
    Api()
      .get('/api/v1/auth/signout')
      .then(res => {
        navigation.replace('Signin');
        storage.setSession('');
        console.log('looooooggggg ouuutututu', res);
        setMshow(false);
      })
      .catch(e => {
        console.log('loooooooggggg eerror   ', e);
        displayToast(e.message);
        setMshow(false);
      });
  };

  const Item = props => {
    // console.log('description', props?.Des);
    return (
      <SafeAreaView>
        <StatusBar
          animated={true}
          backgroundColor="#E1FAF6"
          barStyle={'dark-content'}
          showHideTransition={'slide'}
          hidden={false}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              //   HandleNotification(props);
              navigation.navigate('Détails');
              dispatch(setDetails(props.item));
            }}>
            <Image
              source={{
                uri: `https://api.formation.flexi-apps.com${props?.image}`,
              }}
              style={HomeStyles.imgs}
            />
          </TouchableOpacity>
        </View>
        <View style={HomeStyles.V45}>
          <Text style={HomeStyles.Tel}>{props?.title}</Text>
          <Text style={HomeStyles.Tel3}>
            {moment(props?.date).format('MM/D/YYYY  h:mm ')}
          </Text>
          <Text style={HomeStyles.Tel2}>
            {' '}
            {props?.Des?.length > 44
              ? (props?.Des).substring(0, 44) + '...'
              : props?.Des}{' '}
          </Text>
        </View>
        <View style={HomeStyles.endItem} />
      </SafeAreaView>
    );
  };

  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        title={item.title}
        Des={item?.description}
        image={item.imageUrl}
        date={item.created_at}
        //moment().format('MMMM Do YYYY, h:mm:ss a')
      />
    );
  };

  return (
    <SafeAreaView style={HomeStyles.V}>
      <Text style={HomeStyles.txt}>
        {' '}
        Fil D'actualité
        <View>
          <TouchableOpacity
            onPress={() => {
              setShowModel(true);
            }}>
            <Image
              source={require('../../../img/pngs/1.png')}
              style={HomeStyles.logop2}
            />
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={ShowModel}
            onRequestClose={() => {
              setShowModel(!ShowModel);
            }}>
            <View style={HomeStyles.modalView}>
              <TouchableOpacity
                style={HomeStyles.whiteDeleteBtn}
                onPress={() => {
                  setShowModel(false);
                }}>
                <Image
                  style={HomeStyles.whiteDelete}
                  source={require('../../../img/pngs/whiteDelete.png')}
                />
              </TouchableOpacity>
              <View style={HomeStyles.modal}>
                <Text style={HomeStyles.sortir}>Sortir</Text>
                <Text style={HomeStyles.etes}>
                  Êtes-vous sûr de vouloir vous déconnecter ?
                </Text>
                <View style={HomeStyles.buttonsView}>
                  <TouchableOpacity
                    style={HomeStyles.nonBtn}
                    onPress={() => {
                      setShowModel(false);
                    }}>
                    <Text style={HomeStyles.nonTxt}>Non</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    disabled={MShow}
                    style={[
                      HomeStyles.confirmeBtn,
                      {
                        backgroundColor: MShow ? '#80CDC1' : '#268C63',
                      },
                    ]}
                    onPress={Logout}>
                    {MShow ? (
                      <ActivityIndicator
                        style={{marginLeft: 10}}
                        color="#000"
                        size="large"
                      />
                    ) : (
                      <Text style={HomeStyles.confirmeTxt}>Je confirme</Text>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </Text>
      <SafeAreaView style={HomeStyles.container}>
        <FlatList
          data={postFromStorage}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          refreshing={isFetching}
          onRefresh={onRefresh}
          ListFooterComponent={LoadMore}
          progressViewOffset={100}
          onEndReached={onEndReached}
        />

        {/* <View style={HomeStyles.logop5}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddPost');
            }}>
            <Image
              source={require('../../../img/pngs/addpost.png')}
              style={HomeStyles.logop6}
            />
          </TouchableOpacity>
        </View> */}
        <ActivityIndicatorS isLoading={isLoading} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Home;
