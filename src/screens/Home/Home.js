import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import Api from '../../source/api'
import ModalConf2 from '../component/modalglobal2';
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts, setPosts, initial } from './../../Redux/PostSlice';
import moment from 'moment';
import { setDetails } from './../../Redux/DetailsSlice'
import HomeStyles from './HomeStyle';


const Home = ({ navigation }) => {



    const [count, setCount] = useState(0);

    const dispatch = useDispatch()
    const postFromStorage = useSelector(selectPosts)

    useEffect(() => {
        dispatch(initial([]))
        LoadData(0)
        console.log(postFromStorage)


    }, []);


    const { unionBy } = require("lodash");

    const LoadData = (skip) => {

        Api()
            .get(`/api/v1/posts?$skip=${skip}&$top=10`)
            .then(responseJson => {
                if (skip === 0) {
                    dispatch(setPosts(responseJson.value))
                    console.log("postFromStorage:       ", postFromStorage);
                } else {
                    dispatch(setPosts(unionBy(postFromStorage, responseJson.value, '_id')))

                    // console.log("skip diffffff 0")
                }
                setCount(responseJson.count);
            })
            .catch((e) => {
                console.log("errrrrror   ", e);
            });
    }

    const [Show2, setShow2] = useState(false);
    const Item = (props) => {
        // console.log('description', props?.Des);
        return (
            <View>
                <View>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Détails")
                        dispatch(setDetails(props.item))
                    }}>
                        <Image source={{ uri: `https://api.formation.flexi-apps.com${props?.image}` }} style={{ width: 427.5, height: 285, borderRadius: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={HomeStyles.V45}>
                    <Text style={HomeStyles.Tel}>{props?.title}</Text>
                    <Text style={HomeStyles.Tel3}>{moment(props?.date).format('MM/D/YYYY  h:mm ')}</Text>
                    <Text style={HomeStyles.Tel2} > {props?.Des?.length > 44 ? (props?.Des).substring(0, 44) + "..." : props?.Des} </Text>
                </View>
                <View style={HomeStyles.cipar}></View>
            </View>
        )
    };

    const renderItem = ({ item }) => {

        return (
            <Item
                item={item}
                title={item.title}
                Des={item?.description}
                image={item.imageUrl}
                date={item.created_at}
            //moment().format('MMMM Do YYYY, h:mm:ss a')
            />
        )
    };

    return (
        <View style={HomeStyles.V}>
            <Text style={HomeStyles.txt}>  Fil D'actualité
                <View >
                    <TouchableOpacity onPress={() => { setShow2(true) }}>
                        <Image source={require("../../../img/pngs/1.png")} style={HomeStyles.logop2} />
                    </TouchableOpacity>
                    <ModalConf2 modalVisible={Show2} Onclose={() => { setShow2(false); }} OnConf={() => { setShow2(true); }} confirm={() => { navigation.navigate("Signin"); }} />

                </View>
            </Text>
            <SafeAreaView style={HomeStyles.container}>
                <FlatList
                    data={postFromStorage}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
                <View style={HomeStyles.logop5}>
                    <TouchableOpacity onPress={() => { navigation.navigate("AddPost") }}>
                        <Image source={require("../../../img/pngs/addpost.png")} style={HomeStyles.logop6} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}



export default Home;
