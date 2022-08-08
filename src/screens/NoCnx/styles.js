import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#E1FAF6',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
  },
  container1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nowifi: {
    top: 100,
    height: '200@vs',
    width: '200@s',
    marginBottom: '50@vs',
  },
  checked: {
    top: 50,
    height: '19@vs',
    width: '19@s',
  },
  txt1: {
    top: 100,
    fontSize: '18@s',
    fontWeight: '800',
    color: 'red',
  },
  txt2: {
    fontSize: '14@s',
    top: 100,
    fontWeight: '700',
    marginTop: '5@vs',
    color: 'black',
  },
  txt3: {
    top: 50,
    fontSize: '12@s',
    fontWeight: '600',
    marginLeft: '10@s',
    color: 'black',
  },
  imgTxt: {
    top: 100,
    flexDirection: 'row',
    marginBottom: '20@vs',
    alignItems: 'center',
  },
});
