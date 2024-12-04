import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightwhite,
  },
  image: {
    marginVertical: 10,
    width: '95%',
    height: 280,
    alignSelf: 'center',
    borderRadius: theme.sizes.small,
  },
  details: {
    backgroundColor: theme.colors.lightWhite,
    width: theme.sizes.width,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
export default styles;
