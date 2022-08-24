import { ScaledSheet } from 'react-native-size-matters/extend';
const SigninStyles = ScaledSheet.create({
  texte: {
    color: '#229764',
    fontSize: 16,
    alignItems: 'stretch',
    fontWeight: 'bold',
  },
  con: {
    flex: 1,
    padding: '10@s',
    backgroundColor: '#E1FAF6',
  },
  EnterTxt: {
    color: '#FFFFFF',
    fontSize: '24@s',
    fontWeight: '600',
    opacity: '1@s',
  },
  Eye: {
    bottom: '17.6%',
    left: '90%',
  },

  text: {
    bottom: 30,
  },

  Btn: {
    height: '74@vs',
    width: '100%',
    color: '#FFFFFF',
    fontSize: '24@s',
    fontWeight: '600',
    opacity: '1@s',
    alignContent: 'center',
    backgroundColor: '#268C63',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8@s',
    marginTop: '35@s',
    marginVertical: '28@s',

    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '5@vs',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
    bottom: 40,
  },
  contaire: {
    color: '#539D48',
    fontSize: '30@s',
    fontWeight: '700',
    left: '20@s',
  },
  icon: {
    height: '211@vs',
    width: '234.44@s',
    marginTop: '20@s',
    alignSelf: 'center',
  },
  bord: {
    fontSize: 25,
    color: '#373737',
    backgroundColor: '#fffff0',
    shadowColor: '#999999',
    padding: '17@s',
    marginVertical: '10@s',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '5@vs',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',
  },
  contaire2: {
    color: '#373737',
    fontSize: 18,
    fontWeight: 'bold',
    top: 6,
  },
  contaire98: {
    color: 'red',
    fontSize: 10,
    fontWeight: '500',
    marginVertical: '10@s',
  },
  PASWV: {
    bottom: '-10@s',
  },
  texte2: {
    color: '#000',
    alignItems: 'stretch',
    fontSize: 18,
  },
  texte3: {
    fontWeight: '500',
    fontSize: '18@s',
    color: 'blue',
    textDecorationLine: 'underline',
    bottom: '30@s',
  },

  ScrollV: {
    padding: 20,
  },
  activity: {
    position: 'absolute',
    top: '40%',
    left: '45%',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#E1FAF6',
    paddingHorizontal: '22@s',
    alignItems: 'center',
  },
});

export default SigninStyles;
