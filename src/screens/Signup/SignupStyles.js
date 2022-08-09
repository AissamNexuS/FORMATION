import {ScaledSheet} from 'react-native-size-matters/extend';

const SignupStyles = ScaledSheet.create({
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
    color: '#7d7d7d',
    alignItems: 'stretch',
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
  con: {
    flex: 1,
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
    marginVertical: '10@vs',
  },

  contaire: {
    color: '#539D48',
    fontSize: 34,
    fontWeight: 'bold',
  },
  contaire98: {
    color: 'red',
    fontSize: 10,
    fontWeight: '500',
  },
  TxtB: {
    left: 10,
  },
});

export default SignupStyles;
