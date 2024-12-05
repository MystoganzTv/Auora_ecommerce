import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import styles from '../styles/product.style';
import { theme } from '../constants/theme';
import { RatingInput } from 'react-native-stock-star-rating';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SimpleLineIcons } from '@expo/vector-icons';

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
          <Text style={styles.title}> {item.title}</Text>
          <Text style={[styles.price, styles.priceWrapper]}>${item.price}</Text>
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
            <Text style={styles.ratingScore}>[4.9]</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity>
              <SimpleLineIcons name='plus' size={20} />
            </TouchableOpacity>
            <Text style={styles.textSpace}>3</Text>
            <TouchableOpacity>
              <SimpleLineIcons name='minus' size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
