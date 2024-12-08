import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./src/screens/ProductListScreen";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import BottomTabs from "./src/screens/BottomTabs";
import ProductDetail from "./src/screens/ProductDetail";
import { LoginContext, FavContext } from "./src/contexts/UserContext";
import { useState } from "react";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userLogin, setUserLogin] = useState(true);
  const [reFetchFav, setReFetchFav] = useState("");

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
    Roboto_500Medium,
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
    <LoginContext.Provider value={(userLogin, setUserLogin)}>
      <FavContext.Provider value={{ reFetchFav, setReFetchFav }}>
        <NavigationContainer onReady={onLayoutRootView}>
          <Stack.Navigator>
            <Stack.Screen
              name="BottomTabs"
              component={BottomTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavContext.Provider>
    </LoginContext.Provider>
  );
}
