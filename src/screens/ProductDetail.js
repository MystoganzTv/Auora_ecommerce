import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/product.style';
import { theme } from '../constants/theme';
import { RatingInput } from 'react-native-stock-star-rating';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function ProductDetail() {
  const [rating, setRating] = useState(0);
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
          <Text style={{ fontSize: theme.sizes.medium }}> {item.title}</Text>
          <Text style={{ fontSize: theme.sizes.medium }}>${item.price}</Text>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            <RatingInput
              rating={rating}
              setRating={setRating}
              sizes={25}
              maxStar={5}
              color={theme.colors.primary}
            />
            <Text style={styles.title}>[4.9]</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
