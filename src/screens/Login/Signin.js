import React, { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, ActivityIndicator, ScrollView, Image } from 'react-native';
import Api from '../../../source/api'
import { ScaledSheet } from "react-native-size-matters";
import { displayToast } from "../../../lib/interactions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ navigation }) => {

    const [Email, setEmail] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [HideShowPassWord, setHideShowPassWord] = useState(true);

    const [loading, setLoading] = useState(false);

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const number = /[0-9]/;
    const letter = /[a-zA-Z]/;



    useEffect(() => {
        getEmail()
        getPassword()
    }, []);

    function setEmail2(email) {
        var promise = new Promise((resolve) => {
            try {
                AsyncStorage.setItem('email', Email);
                resolve();
            } catch (error) {
                //reportError("set session error", error);
            }
        });

        return promise;
    }

    function setPassWord2(password) {
        var promise = new Promise((resolve) => {
            try {
                AsyncStorage.setItem('password', PassWord);
                resolve();
            } catch (error) {
                //reportError("set session error", error);
            }
        });

        return promise;
    }

    function getEmail() {
        var promise = new Promise(async (resolve, reject) => {
            try {
                const result = await AsyncStorage.getItem(
                    'email'
                );
                resolve(result);
                console.log("email:   ", result);
                if(result){
                    setEmail(result);

                }
                
            } catch (error) {
                //reportError("get already in error", error);
                reject(error);
            }
        });
        return promise;
    }
    function getPassword() {
        var promise = new Promise(async (resolve, reject) => {
            try {
                const result = await AsyncStorage.getItem(
                    'password'
                );
                resolve(result);
                console.log("password:   ", result);
                if(result){
                    setPassWord(result);
                }
                
            } catch (error) {
                //reportError("get already in error", error);
                reject(error);
            }
        });
        return promise;
    }

    const Signin1 = () => {
        setEmail2(Email);
        setPassWord2(PassWord);

        setLoading(true);
        Api().post("/api/v1/auth/signin", {

            username: Email,
            password: PassWord,
            oneSignalPlayerId: "",
        })
            .then((res) => {
                // storeData();
                setLoading(false);
                console.log('res', res);
                navigation.replace('HomeOR');

            })
            .catch((e) => {
                console.log("errrrrror   ", e.message);
                displayToast(e.message)
                setLoading(false);
            });
    }



    return (

        <View style={styles.con}>



            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={styles.contaire}>
                    Se Connecter
                </Text>
            </View>
            <ScrollView style={styleES.ScrollV}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={require("../img/logo.png")} style={{ width: 300, height: 300, }} />
                </View>

                <Text style={styles.contaire2}>E-mail</Text>
                <TextInput
                    style={styles.bord}
                    autoCorrect={false}
                    keyboardType={"email-address"}
                    value={Email}
                    onChangeText={(text) => setEmail(text)}
                />
                {!reg.test(Email) && Email.length > 0 && (
                    <Text style={styles.contaire98}>❌ E-mail non valide </Text>
                )}



                <Text style={styles.contaire2}>mot de passe</Text>
                <TextInput
                    style={styles.bord}
                    autoCorrect={false}
                    secureTextEntry={HideShowPassWord}
                    value={PassWord}
                    onChangeText={(text) => setPassWord(text)}

                />
                <View style={{ top: -56, left: 330 }}>
                    <TouchableOpacity onPress={() => setHideShowPassWord(!HideShowPassWord)}>
                        <Image source={HideShowPassWord ? require("../img/pngs/show.png") : require("../img/pngs/hide.png")} />
                    </TouchableOpacity>
                </View>
                <Text >
                    <Text style={PassWord.length >= 6 ? styleES.texte : styleES.texte2}> Minimum 6 caractére </Text>
                    <Text style={letter.test(PassWord) && PassWord.length > 0 ? styleES.texte : styleES.texte2}>. Lettre</Text>
                    <Text style={number.test(PassWord) && PassWord.length > 0 ? styleES.texte : styleES.texte2}>. Chiffre</Text>
                </Text>

                <TouchableOpacity
                    disabled={!Email || !PassWord || !reg.test(Email)}

                    onPress={Signin1}
                >
                    <Text style={[styles.Btn, { opacity: Email === '' || PassWord === '' || !reg.test(Email) || !number.test(PassWord) || !letter.test(PassWord) || PassWord.length <= 6 ? 0.6 : 1 }]}>
                        Enter
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text
                        style={styleES.texte3}>
                        Je n’ai pas de compte
                    </Text>
                </TouchableOpacity>
                <ActivityIndicator style={styleES.activity} size="large" color="#229764" animating={loading} />
            </ScrollView>
        </View>


    )
}


const styles = ScaledSheet.create({
    con: {
        flex: 1,
        padding: '10@s',
        backgroundColor: "#E1FAF6"

    },
    Btn: {
        backgroundColor: '#268C63',
        color: "#FFF",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 8,
        padding: '15@s',
        marginVertical: '10@vs',


    },
    contaire: {
        color: "#539D48",
        fontSize: 34,
        fontWeight: "bold"
    },
    bord: {
        fontSize: 25,
        color: '#373737',
        backgroundColor: '#fffff0',
        shadowColor: '#999999',
        padding: '17@s',
        paddingHorizontal: '5@ms',
        marginVertical: '1@s',
        borderRadius: 8,

    },
    contaire2: {
        color: "#373737",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: '10@s',

    },
    contaire98: {
        color: "red",
        fontSize: 16,
        fontWeight: "500",
        alignSelf: "center",
        marginVertical: '10@s',

    }
})
const styleES = ScaledSheet.create({
    texte: {
        color: '#229764',
        fontSize: 18,
        alignItems: 'stretch',
        fontWeight: 'bold',
    },
    texte2: {
        color: '#000',
        alignItems: 'stretch',
        fontSize: 18,
    },
    texte3: {
        color: "#7d7d7d",
        alignItems: "stretch",
        fontSize: 18,
        marginVertical: '10@s',
    },

    ScrollV: {
        marginHorizontal: '20@s',
    },
    activity: {
        position: 'absolute',
        top: '40%',
        left: '45%',
    },
})
export default Signin;







