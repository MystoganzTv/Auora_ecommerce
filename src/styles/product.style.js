import { StyleSheet } from "react-native";
import { theme } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.lightwhite,
  },
  image: {
    marginTop: 10,
    marginBottom: 10,
    width: "95%",
    height: 280,
    alignSelf: "center",
    borderRadius: theme.sizes.small,
  },
  details: {
    backgroundColor: theme.colors.lightWhite,
    width: "95%", // Igual al ancho de la imagen
    alignSelf: "center", // Asegúrate de centrarlo como la imagen
    borderRadius: 10, // Opcional, para consistencia visual
    padding: 16, // Añade espacio interno
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: theme.sizes.large,
    fontFamily: "Roboto_700Bold",
  },
  ratingScore: {
    fontSize: theme.sizes.large,
    fontFamily: "Roboto_700Bold",
    marginLeft: 10,
  },
  ratingRow: {
    flexDirection: "row", // Organización horizontal
    justifyContent: "space-between", // Distribución uniforme
    alignItems: "center", // Alineación vertical
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: theme.sizes.xSmall,
  },
  priceWrapper: {
    backgroundColor: theme.colors.secondary,
    borderRadius: theme.sizes.large,
    paddingHorizontal: 10,
  },
  price: {
    fontSize: theme.sizes.large,
    fontFamily: theme.fontFamily.medium500,
  },

  textSpace: {
    marginHorizontal: theme.sizes.xSmall,
    fontFamily: theme.fontFamily.medium500,
    color: theme.colors.gray,
  },
  descriptionWrapper: {
    marginTop: theme.sizes.large * 2,
    marginHorizontal: theme.sizes.large,
  },
  descriptionTitle: {
    fontFamily: "Roboto_700Bold",
    fontSize: theme.sizes.large - 2,
  },
  descriptionText: {
    fontFamily: "Roboto_400Regular",
    textAlign: "justify",
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Asegura alineación vertical
    backgroundColor: theme.colors.secondary,
    padding: 5,
    borderRadius: theme.sizes.large,
  },
  cartRow: {
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: theme.sizes.large,
  },
  cartTitle: {
    marginLeft: theme.sizes.small,
    alignItems: "center",
    fontFamily: "Roboto_500Medium",
    fontSize: theme.sizes.medium,
  },
  addCart: {
    width: 37,
    height: 37,
  },
});
export default styles;
