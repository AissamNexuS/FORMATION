

import React, { useState } from "react";
import { Alert, Modal, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters"
const ModalConf2 = ({ modalVisible, Onclose, confirm }) => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Onclose(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.txt}>Sortir</Text>
                        <Text style={styles.txt}></Text>
                        <Text style={styles.Tel6}>Text: "Êtes-vous sûr de vouloir vous déconnecter ?" </Text>
                        <Text style={styles.txt}></Text>
                        <View style={styles.Voi}>
                            <TouchableOpacity style={[styles.button2,]} onPress={() => Onclose(false)}>
                                <Text style={styles.textStyle2}>    Non     </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={() => confirm()}>
                                <Text style={styles.textStyle}>Je confirme</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = ScaledSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    Voi: {
        flexDirection: "row",
    },
    Tel6: {
        fontWeight: '500',
        fontSize: 20,
        color: '#373737',
        top: -30,
    },

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 21,
        padding: 35,
        alignItems: "center",
    },
    button: {
        borderRadius: 8,
        padding: 10,
        elevation: 2,
        backgroundColor: "#539D48",
    },
    button2: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: "#FFF",
    },

    txt: {
        fontSize: 30,
        color: '#539D48',
        fontWeight: 'bold',
        top: -10
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24

    },
    textStyle2: {
        color: "#539D48",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24

    },

});

export default ModalConf2;




