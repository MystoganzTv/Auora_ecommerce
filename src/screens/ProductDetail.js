import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/product.style";
import { theme } from "../constants/theme";
import { RatingInput } from "react-native-stock-star-rating";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { decrement, increment } from "../utils/product_helpers";

export default function ProductDetail() {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(1);
  const route = useRoute();

  const item = route.params?.item;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.path} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}> {item.title}</Text>
          <Text style={[styles.price, styles.priceWrapper]}>${item.price}</Text>
        </View>
        {/* This is for title and price */}
        <View style={styles.ratingRow}>
          {/* This is for star rating */}

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

          {/* This is for plus and minus */}
          <View style={styles.rating}>
            <TouchableOpacity onPress={() => decrement(setCount, count)}>
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
            <Text style={styles.textSpace}>{count}</Text>
            <TouchableOpacity onPress={() => increment(setCount, count)}>
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* This is for showing description */}
      <View style={styles.descriptionWrapper}>
        {/* Description title */}
        <Text style={styles.descriptionTitle}>Description</Text>
        {/* Description text */}
        <Text style={styles.descriptionText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          placeat, consequuntur minus dignissimos natus sed tempore dolorum
          harum in suscipit pariatur enim similique magni. Culpa illum nulla
          quasi. Repellendus, reiciendis!
        </Text>

        {/* Show text location */}
        <View style={{ marginHorizontal: theme.sizes.small }}>
          {/* Show icon and location name */}
          <View style={styles.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location-outline" size={18} />
              <View style={{ marginLeft: 10 }}>
                <Text>123 Main Street, Springfield</Text>
              </View>
              {/* Delivery Info */}
              <View >
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={18}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
