import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../styles/productcard.style';
import { useNavigation } from '@react-navigation/native';

export default function ProductCardComponent({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ flex: 1 }}
      onPress={() => navigation.navigate('ProductDetail', { item })}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item.path} />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
