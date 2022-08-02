import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native'
import Api from '../source/api';
import ModalConf2 from '../component/modalglobal2';
import { useSelector, useDispatch } from 'react-redux'
import { selectPosts, setPosts, initial } from '../src/Redux/PostSlice';
import moment from 'moment';
import { setDetails } from '../src/Redux/DetailsSlice';



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
                <View style={Style001.V45}>
                    <Text style={Style001.Tel}>{props?.title}</Text>
                    <Text style={Style001.Tel3}>{moment(props?.date).format('MM/D/YYYY  h:mm ')}</Text>
                    <Text style={Style001.Tel2} > {props?.Des?.length > 44 ? (props?.Des).substring(0, 44) + "..." : props?.Des} </Text>
                </View>
                <View style={Style001.cipar}></View>
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
        <View style={Style001.V}>
            <Text style={Style001.txt}>  Fil D'actualité
                <View >
                    <TouchableOpacity onPress={() => { setShow2(true) }}>
                        <Image source={require("../img/pngs/1.png")} style={Style001.logop2} />
                    </TouchableOpacity>
                    <ModalConf2 modalVisible={Show2} Onclose={() => { setShow2(false); }} OnConf={() => { setShow2(true); }} confirm={() => { navigation.navigate("Signin"); }} />

                </View>
            </Text>
            <SafeAreaView style={Style001.container}>
                <FlatList
                    data={postFromStorage}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                />
                <View style={Style001.logop5}>
                    <TouchableOpacity onPress={() => { navigation.navigate("AddPost") }}>
                        <Image source={require("../img/pngs/addpost.png")} style={Style001.logop6} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

const Style001 = StyleSheet.create({
    V: {
        flex: 1,
        padding: 10,
        backgroundColor: '#E1FAF6',

    },
    V45: {
        paddingHorizontal: 20,
    },
    txt: {
        fontSize: 30,
        color: '#539D48',
        fontWeight: 'bold',
        left: 10,
    },
    logop1: {
        width: 34,
        height: 34,
        left: 90,
    },
    logop2: {
        width: 34,
        height: 34,
        left: 150,
    },
    logop3: {
        width: 49.92,
        height: 40,
        top: 12,
        left: -160,
    },
    logop4: {
        width: 34,
        height: 34,
        top: 12,
        left: 260,
    },
    Tel: {
        color: '#373737',
        fontSize: 20,
        fontWeight: '600',


    },
    Tel2: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 14,


    },
    Tel3: {
        color: '#AAAAAA',
        fontSize: 14,

    },
    Tel4: {
        color: '#373737',
        fontSize: 14,
        left: 10
    },
    logop5: {
        position: 'absolute',
        bottom: 5,
        right: 10,

    },
    logop6: {
        width: 84,
        height: 84,
    },
    container: {
        flex: 1,
    },
    cipar: {
        backgroundColor: '#AFAFAF',
        borderRadius: 1,
        padding: 1,
        marginVertical: 9,
        opacity: 0.3
    },
});


export default Home;
