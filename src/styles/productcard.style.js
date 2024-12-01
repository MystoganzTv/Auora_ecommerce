import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    height: 240,
    borderRadius: theme.sizes.small,
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: theme.sizes.small,
  },
  details: {
    padding: theme.sizes.small,
  },
  price: {
    marginBotton: 10,
  },
  title: {
    fontSize: theme.sizes.medium,
    fontFamily: 'Roboto_700Bold',
  },
});
export default styles;
