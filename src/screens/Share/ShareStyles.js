import {ScaledSheet} from 'react-native-size-matters/extend';

const ShareStyles = ScaledSheet.create({
  Flx: {
    flex: 1,
    backgroundColor: '#E1FAF6',
    justifyContent: 'center',
    padding: '30@s',
  },
  Title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: '10@s',
    marginTop: '10@s',
    color: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  View01: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: '20@s',
    padding: '10@s',
    borderColor: '#373737',
    elevation: '70@s',
  },
  View02: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECECEC',
    borderRadius: '20@s',
    padding: '10@s',
    top: '10@s',
    shadowColor: '#373737',
    elevation: '4@s',
  },
});

export default ShareStyles;
