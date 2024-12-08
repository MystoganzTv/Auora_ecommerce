import { SafeAreaView, FlatList, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import ProductCardComponent from "../components/ProductCardComponent";
import LottieView from "lottie-react-native";
import { theme } from "../constants/theme";

const localProductList = [
  {
    id: "1A",
    title: "Colorful Furniture",
    price: "100",
    path: require("../../assets/images/fn3.jpg"),
  },
  {
    id: "1B",
    title: "Comfy sofa",
    price: "200",
    path: require("../../assets/images/fn2.jpg"),
  },
  {
    id: "1C",
    title: "Beautiful Home furniture",
    price: "500",
    path: require("../../assets/images/fn1.jpg"),
  },
];

export default function ProductList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  });

  if (loading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <LottieView
          source={require("../../assets/jsons/Animation.json")}
          autoPlay
          loop
          style={{ width: 300, height: 300 }} // Tamaño ajustado
        />
        <Text
          style={{
            fontFamily: theme.fontFamily.bold700,
            fontSize: theme.sizes.large,
            color: theme.colors.marineBlue,
            marginTop: 20,
          }}
        >
          Loading....
        </Text>
      </View>
    );
  }
  const renderItem = ({ item }) => {
    return <ProductCardComponent item={item} />;
  };
  return (
    <SafeAreaView>
      <FlatList
        data={localProductList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
