import { SafeAreaView, FlatList, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import ProductCardComponent from '../components/ProductCardComponent';

const localProductList = [
  {
    id: '1A',
    title: 'Colorful Furniture',
    price: '$100',
    path: require('../../assets/images/fn3.jpg'),
  },
  {
    id: '1B',
    title: 'Comfy sofa',
    price: '$200',
    path: require('../../assets/images/fn2.jpg'),
  },
  {
    id: '1C',
    title: 'Beautiful Home furniture',
    price: '$500',
    path: require('../../assets/images/fn1.jpg'),
  },
];

export default function ProductList() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('use effect is being called');
    const timer = setTimeout(() => {
      setLoading(false);
      console.log('the value of loading is point 2', loading);
    }, 2000);
    return () => clearTimeout(timer);
  });

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const renderItem = ({ item }) => {
    console.log('the value of loading is point 1', loading);
    return <ProductCardComponent item={item} />;
  };
  return (
    <SafeAreaView>
      <FlatList
        data={localProductList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
}
