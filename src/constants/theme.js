import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const theme = {
  colors: {
    primary: '#2A4D50',
    secondary: '#DDF0FF',
    tertiary: '#FF7754',
    gray: '#83829A',
    offWhite: '#F3F4F8',
    white: '#FFFFFF',
    black: '#000000',
    marineBlue: '#336699',
    lightWhite: '#FAFAFC',
  },
  sizes: {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 44,
    width,
    height,
  },
  fontFamily: {
    bold700: 'Roboto_700Bold',
    regular400: 'Roboto_400Regular',
    medium500: 'Roboto_500Medium',
  },
};
