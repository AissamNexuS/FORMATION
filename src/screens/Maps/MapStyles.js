import {ScaledSheet} from 'react-native-size-matters/extend';
import {Platform} from 'react-native';
const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  positionBtn: {
    height: '40@s',
    width: '40@s',
    borderRadius: 200,
    backgroundColor: '#E1FAF6',
    position: 'absolute',
    right: '20@s',
    bottom: '20@s',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  icon: {
    height: '30@s',
    width: '30@s',
  },
  iconShare: {
    height: '20@s',
    width: '20@s',
  },

  mapType1: {
    height: '40@s',
    width: '40@s',

    backgroundColor: 'white',
    position: 'absolute',
    left: '12@s',
    top: '12@s',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  mapType2: {
    height: '40@s',
    width: '40@s',

    backgroundColor: 'white',
    position: 'absolute',
    left: '12@s',
    top: '54@s',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  mapType3: {
    height: '40@s',
    width: '40@s',

    backgroundColor: 'white',
    position: 'absolute',
    left: '12@s',
    top: '98@s',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6,
  },
  PlaceTextInputContainer: {
    width: '90%',
    backgroundColor: 'rgba(111, 111, 110, 0.3)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderWidth: 0,
  },
  PlaceTextInput: {
    height: '60@vs',
    borderRadius: 25,
    color: '#000',
    borderWidth: 1,
    borderColor: 'blue',
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    position: 'absolute',
    top: Platform.OS === 'android' ? '10@s' : '60@s',
    left: '10@s',
    top: '9@s',
    alignItems: 'flex-start',
  },
  specialItemRow: {
    backgroundColor: 'white',
    width: '80%',
  },
  listView: {
    backgroundColor: 'white',

    position: 'absolute',
    top: '65@vs',
  },
});
export default styles;
