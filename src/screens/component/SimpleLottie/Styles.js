import {ScaledSheet} from 'react-native-size-matters/extend';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: '100@s',
    height: '100@s',
  },
  merci: {
    color: '#000',
    fontSize: '24@s',
    fontWeight: '700',
    marginBottom: '40@vs',
  },
  delete: {
    height: '60@vs',
    width: '60@s',
    position: 'absolute',
    top: 10,
    right: 0,

    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteIcon: {
    height: '40@vs',
    width: '40@s',
  },
});

export default styles;
