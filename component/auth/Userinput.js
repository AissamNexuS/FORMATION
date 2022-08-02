import React from "react";
import { Text, View, StyleSheet, TextInput } from 'react-native';

const Userinput = ({
    name,
    value,
    setValue,
    autoCapitalize = "none",
    keyboardType = "default",
    secureTextEntry = false,
}) => {
    return (
        <View style={styles.con}>
            <Text style={styles.contaire2}>{name}</Text>
            <TextInput
                style={styles.bord}
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}

                value={value}
                onChangeText={(text) => setValue(text)}
            />

        </View>

    );
};


const styles = StyleSheet.create({
    con: {
        padding: 10,
        backgroundColor: "#E1FAF6"

    },
    bord: {
        fontSize: 25,
        color: '#373737',
        backgroundColor: '#fffff0',
        shadowColor: '#999999',
        padding: 17,
        paddingHorizontal: 5,
        marginVertical: 1,
        borderRadius: 8,

    },
    contaire2: {
        color: "#373737",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,

    }
})


export default Userinput; 