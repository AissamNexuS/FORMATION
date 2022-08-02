import React, { useState } from 'react'
import { Text, View, Platform, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { ScaledSheet } from "react-native-size-matters";
import ModalConf from '../component/modalglobal';
import StylesDetails from './AddPostStyle'

export default function Detais({ navigation }) {

    const [Show2, setShow2] = useState(false);
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const [Tm, setTm] = useState('');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime = tempDate.getHours() + ':' + tempDate.getMinutes();
        setText(fDate);
        setTm(fTime);

        console.log(fDate + '(' + fTime + ')')
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };


    return (
        <ScrollView>
            <View style={StylesDetails.V}>

                <Text style={StylesDetails.Tel2}>Bannière</Text>
                <View style={StylesDetails.Vp} >
                    <TouchableOpacity>
                        <Image source={require('../../../img/pngs/addp.png')} style={{ top: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ right: -13 }}>
                    <TouchableOpacity><Text style={StylesDetails.Tel3}> Modifier
                        <View>
                            <TouchableOpacity>
                                <Image source={require("../../../img/pngs/Modifie.png")} style={StylesDetails.logop1} />
                            </TouchableOpacity>
                        </View>
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ top: -10 }}>
                    <Text style={StylesDetails.Tel5}>Titre :</Text>
                    <View style={StylesDetails.V3}>
                        <TextInput style={StylesDetails.Tel2}></TextInput>
                    </View>
                    <View>
                        <Text style={StylesDetails.Tel5}>  Date :                                       Time :</Text>
                        <View style={StylesDetails.V4}>

                            <TouchableOpacity style={StylesDetails.Tel32} onPress={() => showMode('date')}>
                                <Text style={StylesDetails.Tel09}>{text}</Text>
                            </TouchableOpacity>
                        </View>
                        {show && (
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='default'
                                onChange={onChange} />
                        )}
                        <View style={StylesDetails.V5}>
                            <TouchableOpacity style={StylesDetails.Tel33} onPress={() => showMode('time')}>
                                <Text style={StylesDetails.Tel08}>{Tm}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ top: -70 }}>
                        <Text style={StylesDetails.Tel5}>Description :</Text>
                        <View style={StylesDetails.V43}>
                            <TextInput style={StylesDetails.Tel2}></TextInput>
                        </View>
                    </View>
                    <View style={{ top: -20 }}>
                        <Text style={StylesDetails.Tel6}> Can be liked</Text>
                        <View style={StylesDetails.V8}></View>
                        <View style={StylesDetails.V9}></View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => { setShow2(true); }}>
                    <Text style={StylesDetails.Btn}>Suivant </Text>
                </TouchableOpacity>
                <ModalConf modalVisible={Show2} Onclose={() => { setShow2(false); }} OnConf={() => { setShow2(true); }} confirm={() => { navigation.navigate("Home"); }} />

            </View></ScrollView>

    )
}


