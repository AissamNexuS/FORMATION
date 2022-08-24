import { ScaledSheet } from 'react-native-size-matters/extend';

const styles = ScaledSheet.create({

  container: {
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#E1FAF6',
    marginBottom: '12@s',
    borderRadius: '10@s',
    padding: '10@s',
  },
  flat: {
    flex: 1,
    paddingHorizontal: '20@s',
  },

  titre: {
    fontSize: '14@s',
    fontWeight: '500',
    color: '#373737',
  },
  text: {
    fontSize: '14@s',
    fontWeight: '500',
    color: '#373737',
  },
});

export default styles;
