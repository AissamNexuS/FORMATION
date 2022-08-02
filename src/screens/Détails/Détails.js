import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import moment from 'moment'

export default function Detais({ navigation }) {

    const item = useSelector((state) => state.details.value)



    return (

        <View style={StylesDetails.V}>
            <View style={StylesDetails.V2}>
                <Text style={StylesDetails.txt}>  Détails </Text>
            </View>
            <Text style={StylesDetails.Tel2}>Bannière</Text>
            <View >
                <Image source={{ uri: `https://api.formation.flexi-apps.com${item.imageUrl}` }} style={{ width: 427.5, height: 235, }} />
            </View>
            <View>
                <Text style={StylesDetails.Tel5}> Titles : </Text>
                <View style={StylesDetails.V3}>
                    <Text style={StylesDetails.Tel2}>{item.title}</Text>
                </View>
                <View style={{}}>
                    <Text style={StylesDetails.Tel5}>Date  Time :</Text>
                    <View style={StylesDetails.V3}>
                        <Text style={StylesDetails.Tel2}>{moment(item.created_at).format('MM/D/YYYY  h:mm ')} </Text>
                    </View>

                </View>
                <View style={{}}>
                    <Text style={StylesDetails.Tel5}>Description  :</Text>
                    <View style={StylesDetails.V3}>
                        <Text style={StylesDetails.Tel09}>{item.description}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                <Text style={StylesDetails.Btn}>Retour aux postes</Text>
            </TouchableOpacity>
        </View>

    )
}

const StylesDetails = StyleSheet.create({
    V: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFFFFFFF',
    },
    V2: {

    },
    V3: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 10
    },
    V4: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 20,
        alignSelf: 'flex-start',
    },
    V5: {
        backgroundColor: '#ECECEC',
        borderRadius: 8,
        padding: 20,
        alignSelf: 'flex-end',
        top: -69,
    },
    txt: {
        fontSize: 30,
        color: '#268C63',
        fontWeight: 'bold',
        left: 10,
    },

    Tel2: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 20,
        left: 10,
    },
    Tel09: {
        color: '#373737',
        fontWeight: '600',
        fontSize: 14,
        left: 10,
    },

    Tel5: {
        fontWeight: '500',
        fontSize: 18,
        color: '#373737',
    },

    Btn: {
        backgroundColor: '#268C63',
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
    },
});
