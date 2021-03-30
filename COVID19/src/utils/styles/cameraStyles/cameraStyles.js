import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purpleMedium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: colors.white,
    marginBottom: 60,
    fontWeight: 'bold',
  },
  icon: {
    marginBottom: 500,
    marginLeft: 25,
  },
});

export default styles;
