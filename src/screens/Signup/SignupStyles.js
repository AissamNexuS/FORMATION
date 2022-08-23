import { ScaledSheet } from 'react-native-size-matters/extend';

const SignupStyles = ScaledSheet.create({
  texte: {
    color: '#229764',
    fontSize: 18,
    fontWeight: '600',
  },
  texte2: {
    color: '#000',
    alignItems: 'stretch',
    fontSize: 18,
  },
  contaire2: {
    color: '#373737',
    fontSize: 18,
    fontWeight: 'bold',
    bottom: '15@s',
    left: '10@s',
  },
  Eye: {
    left: '320@s',
    bottom: '55@s',
  },

  dropDown: {
    borderWidth: '0.4@s',
    elevation: 6,
    backgroundColor: '#FFFFd0',
    width: '344@ms',
    left: '10@s',
    top: '50@s',
  },
  EnterTxt: {
    color: '#FFFFFF',
    fontSize: '24@s',
    fontWeight: '600',
    opacity: '1@s',
  },
  typeInput: {
    height: '74@vs',
    width: '344@ms',
    left: '10@s',
    backgroundColor: '#FFFFF0',
    borderRadius: '8@s',
    color: '#373737',
    fontSize: '18@s',
    fontWeight: '600',
    opacity: '1@s',
    top: '-10@s',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: '0@s',
      height: '5@vs',
    },
    shadowOpacity: '0.25@s',
    shadowRadius: '3.84@s',
    elevation: '5@s',

    borderWidth: '0@s',
  },
  ChifrBottom: {
    bottom: '29@s',
    left: '10@s',
  },
  texte3: {
    fontWeight: '500',
    fontSize: '18@s',
    color: 'blue',
    top: '10@s',

    textDecorationLine: 'underline',
  },
  ScrollV: {
    marginHorizontal: '20@s',
  },
  EmV: {
    bottom: '0@s',
  },
  con: {
    flex: 1,
    padding: '10@s',
    backgroundColor: '#E1FAF6',
  },
  con323: {
    padding: '10@s',
    backgroundColor: '#E1FAF6',
  },
  Btn: {
    backgroundColor: '#268C63',
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: '15@s',
  },

  contaire: {
    color: '#268C63',
    fontSize: 30,
    fontWeight: 'bold',
  },
  contaire98: {
    color: 'red',
    fontSize: 10,
    fontWeight: '500',
  },

  TxtB: {
    left: '13@s',
  },
  NomSt: {
    flexDirection: 'row',
  },
  PrenomS: {
    left: '190@s',
    top: '-15@s',
  },
});

export default SignupStyles;
