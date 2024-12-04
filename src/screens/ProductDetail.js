import { View, Text, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/productcard.style';

export default function ProductDetail() {
  const route = useRoute();

  const item = route.params?.item;

  // if (!item) {
  //   <View>Error: No product details available </View>;
  // }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.path} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text> {item.title}</Text>
          <Text> {item.price}</Text>
        </View>
      </View>
    </View>
  );
}
