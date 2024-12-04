import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightwhite,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    width: '95%',
    height: 280,
    alignSelf: 'center',
    borderRadius: theme.sizes.small,
  },
  details: {
    backgroundColor: theme.colors.lightWhite,
    width: '95%', // Igual al ancho de la imagen
    alignSelf: 'center', // Asegúrate de centrarlo como la imagen
    borderRadius: 10, // Opcional, para consistencia visual
    padding: 16, // Añade espacio interno
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: theme.sizes.large,
    fontFamily: 'Roboto_700Bold',
    marginLeft: 10,
  },
  ratingRow: {
    flexDirection: 'row', // Organización horizontal
    justifyContent: 'space-between', // Distribución uniforme
    alignItems: 'center', // Alineación vertical
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: theme.sizes.xSmall,
  },
});
export default styles;
