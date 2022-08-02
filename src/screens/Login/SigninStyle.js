import { ScaledSheet } from "react-native-size-matters";


const SigninStyles = ScaledSheet.create({
    texte: {
        color: '#229764',
        fontSize: 18,
        alignItems: 'stretch',
        fontWeight: 'bold',
    },
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
        fontSize: 10,
        fontWeight: "500",

        marginVertical: '10@s',

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

export default SigninStyles;