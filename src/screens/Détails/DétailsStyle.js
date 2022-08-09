import {ScaledSheet} from 'react-native-size-matters/extend';

const StylesDetails = ScaledSheet.create({
  V: {
    flex: 1,
    padding: '10@s',
    backgroundColor: '#FFFFFFFF',
  },

  V3: {
    padding: '5@s',
    alignSelf: 'center',
    width: '170@s',
    alignContent: 'center',
    alignItems: 'center',
  },
  V33: {
    alignSelf: 'center',
    borderRadius: '8@s',
    width: '210@s',
    padding: '5@s',
  },

  txt: {
    fontSize: '30@s',
    color: '#268C63',
    fontWeight: 'bold',
    left: '10@s',
  },

  Tel2: {
    color: '#373737',
    fontWeight: '700',
    fontSize: '20@s',
  },
  Tel09: {
    color: '#373737',
    fontWeight: '600',
    fontSize: '10@s',
    left: '10@s',
  },

  Tel5: {
    fontWeight: '500',
    fontSize: '13@s',
    color: '#373737',
  },
  Tel6: {
    fontWeight: '700',
    fontSize: '18@s',
    color: '#373737',
  },

  Btn: {
    backgroundColor: '#268C63',
    color: '#FFF',
    fontSize: '20@s',
    fontWeight: 'bold',
    borderRadius: '8@s',
    padding: '15@s',
    marginVertical: '10@s',
    alignSelf: 'center',
  },
});
export default StylesDetails;
