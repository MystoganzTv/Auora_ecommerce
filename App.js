import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './src/screens/ProductListScreen';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import BottomTabs from './src/screens/BottomTabs';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {
  }
  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen
          name='BottomTabs'
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='ProductList' component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
