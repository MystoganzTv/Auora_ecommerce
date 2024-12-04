import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../constants/theme';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';
import SearchScreen from './SearchScreen';

const Tabs = createBottomTabNavigator();

const ScreenOptions = {
  tabBarShowLabel: false,
};

export default function BottomTabs() {
  return (
    <Tabs.Navigator ScreenOptions={ScreenOptions}>
      <Tabs.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name='Search'
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name='Cart'
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'cart' : 'cart-outline'}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={theme.sizes.xLarge}
                color={theme.colors.primary}
              />
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}
