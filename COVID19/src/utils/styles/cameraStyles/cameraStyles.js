import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.o1,
  },
  bottomContainer: {
    flex: 2,
  },
  title: {
    fontSize: 25,
    color: colors.white,
    marginBottom: 60,
  },
  bottomText: {
    fontSize: 16,
    color: colors.o3,
    marginTop: 50,
  },
});

export default styles;
