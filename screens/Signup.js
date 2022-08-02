import React, { useState } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, Image, ScrollView } from 'react-native';
import Userinput from "../component/auth/Userinput";
import { ScaledSheet } from "react-native-size-matters";
import Api from './../source/api'


const Signup = ({ navigation }) => {

    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [TelePhone, setTelePhone] = useState("");
    const [PassWord, setPassWord] = useState("");
    const [loading, setLoading] = useState(false);
    const [HideShowPassWord, setHideShowPassWord] = useState(true);

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const number = /[0-9]/;
    const letter = /[a-z]/;
    const Bletter = /[A-Z]/;



    const Signup1 = (cb) => {
        setLoading(true);
        Api().post("/api/v1/auth/signup", {
            username: Name,
            email: Email,
            telephone: TelePhone,
            password: PassWord,
            oneSignalPlayerId: "",
        })
            .then((res) => {
                // storeData();
                setLoading(false);
                console.log('res', res);
                // cb && cb();
                navigation.replace('Signin');

            })
            .catch((e) => {
                console.log("errrrrror   ", e.message);
                // displayToast(e.message)
                setLoading(false);
            });

    }


    return (
        <View style={styles.con}>


            <View style={{ justifyContent: 'flex-start' }}>
                <Text style={styles.contaire}>
                    S'inscripte
                </Text>
            </View>
            <ScrollView style={styleES.ScrollV}>
                <Userinput
                    name="Nom et Prénom"
                    value={Name}
                    setValue={setName}
                    autoCapitalize="words"
                    autoCorrect={false} />

                <Text style={styles.TxtB}>
                    {letter.test(Name) && Name.length < 3 && (
                        <Text style={styles.contaire98}>❌ Minimum 3 caractére </Text>
                    )}
                    {!Bletter.test(Name) && Name.length > 0 && (
                        <Text style={styles.contaire98}> | 1 en Maguscule </Text>
                    )}
                </Text>


                <Userinput
                    name="E-mail"
                    value={Email}
                    setValue={setEmail}
                    keyboardType="email-address"
                    onChangeText={(text) => [setEmail(text)]}
                />
                {!reg.test(Email) && Email.length > 0 && (
                    <Text style={styles.contaire98}>❌ E-mail non valide</Text>
                )}
                <Userinput
                    name="Téléphone"
                    value={TelePhone}
                    setValue={setTelePhone}
                    keyboardType="numeric"
                />
                {number.test(TelePhone) && TelePhone.length < 10 && (
                    <Text style={styles.contaire98}>❌ Entrez le numéro de téléphone complet </Text>
                )}

                <Userinput
                    name="mot de passe"
                    value={PassWord}
                    setValue={setPassWord}
                    secureTextEntry={HideShowPassWord}
                    autoComplteType="password" />
                <View style={{ top: -60, left: 320 }}>
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
                    disabled={!Email || !PassWord || !Name || !TelePhone || !reg.test(Email) || !number.test(PassWord) || !letter.test(PassWord) || PassWord.length <= 6 || Name.length < 3 || TelePhone.length < 10 || !letter.test(Name) || !Bletter.test(Name)}

                    onPress={Signup1}
                >
                    <Text style={[styles.Btn, { opacity: !Email || !Name || !PassWord || !TelePhone || Name.length < 3 || !reg.test(Email) || !number.test(PassWord) || !letter.test(PassWord) || PassWord.length <= 6 || TelePhone.length < 10 || !letter.test(Name) || !Bletter.test(Name) ? 0.7 : 1 }]}>Suivant
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("Signin") }}>
                    <Text
                        style={styleES.texte3}>
                        J’ai déjà un compte
                    </Text>
                </TouchableOpacity><ActivityIndicator style={styleES.activity} size="large" color="#229764" animating={loading} />
            </ScrollView>
        </View >


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
    contaire98: {
        color: "red",
        fontSize: 14,
        fontWeight: "500",
        alignSelf: "center",

    },
    TxtB: {
        alignSelf: "center",
    },
})
const styleES = ScaledSheet.create({
    texte: {
        color: '#229764',
        fontSize: 18,
        alignItems: 'stretch',
        fontWeight: '600',
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
export default Signup;