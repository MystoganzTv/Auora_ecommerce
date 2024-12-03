import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import fetchHomeProduct from '../hooks/fetchHomeProduct';
import ProductCardComponent from '../components/ProductCardComponent';

export default function HomeProductListScreen() {
  const { isLoading, data, error } = fetchHomeProduct();
  return (
    <View>
      {isLoading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <LottieView
            source={require('../../assets/jsons/Animation2.json')}
            autoPlay
            loop
            style={{ width: 300, height: 300 }} // Tamaño ajustado
          />
        </View>
      ) : error ? (
        <Text>We have an error</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ProductCardComponent item={item} />}
          numColumns={2}
        />
      )}
    </View>
  );
}
