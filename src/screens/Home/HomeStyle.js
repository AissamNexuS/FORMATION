import { ScaledSheet } from 'react-native-size-matters/extend';

const HomeStyles = ScaledSheet.create({
  V: {
    flex: 1,
    paddingHorizontal: '25@s',
    backgroundColor: '#E1FAF6',
  },
  V45: {
    paddingHorizontal: '20@s',
  },
  txt: {
    fontSize: 30,
    color: '#539D48',
    fontWeight: 'bold',

  },
  logop1: {
    width: '34@s',
    height: '34@s',
    left: '90@s',
  },
  logop2: {
    width: '34@s',
    height: '34@s',
    left: '500%',
  },
  logop3: {
    width: '49.92@s',
    height: '40@s',
    top: '12@s',
    left: '-160@s',
  },
  logop4: {
    width: '34@s',
    height: '34@s',
    top: '12@s',
    left: '260@s',
  },
  Tel: {
    color: '#373737',
    fontSize: 20,
    fontWeight: '600',
  },

  Tel2: {
    color: '#373737',
    fontWeight: '600',
    fontSize: 14,
    left: '-3@s',
  },
  Tel3: {
    color: '#AAAAAA',
    fontSize: 14,
  },
  Tel4: {
    color: '#373737',
    fontSize: '14@s',
    left: '10@s',
  },
  logop5: {
    position: 'absolute',
    bottom: '5@s',
    right: '10@s',
  },
  logop6: {
    width: '84@s',
    height: '84@s',
  },
  container: {
    flex: 1,
  },

  modal: {
    height: '290@ms',
    width: '420@s',
    backgroundColor: 'white',
    position: 'absolute',
    top: '270@ms',
    zIndex: 10,
    alignSelf: 'center',
    borderRadius: 21,
  },
  footer: {
    padding: '10@s',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  modalView: {
    flex: 1,
    zIndex: 9,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  sortir: {
    color: '#268C63',
    fontWeight: '700',
    fontSize: '30@s',
    marginTop: '16@vs',
    alignSelf: 'center',
  },
  etes: {
    color: '#373737',
    fontSize: '20@s',
    fontWeight: '600',
    marginLeft: '29@s',
    marginTop: '15@s',
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '60@s',
  },
  nonBtn: {
    width: '160@s',
    height: '74@vs',

    justifyContent: 'center',
    alignItems: 'center',
  },
  nonTxt: {
    fontSize: '24@s',
    fontWeight: '600',
    color: '#268C63',
  },

  confirmeBtn: {
    width: '160@s',
    height: '74@vs',
    backgroundColor: '#268C63',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  confirmeTxt: {
    fontSize: '18@s',
    fontWeight: '600',
    color: 'white',
  },
  whiteDelete: {
    height: '60@s',
    width: '60@s',
  },
  whiteDeleteBtn: {
    height: '70@s',
    width: '70@s',
    position: 'absolute',
    right: '0@s',
    top: '180@mvs',
  },
  endItem: {
    width: '385@s',
    height: '2@vs',
    borderRadius: 40,
    margin: '10@s',
    top: '2@s',
    backgroundColor: '#C6C6C6',
  },
  imgs: {
    width: '100%',
    height: '285@s',
    borderRadius: 10,
  },
});

export default HomeStyles;
