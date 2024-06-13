import React from "react";
import { useFonts } from "expo-font";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import WelcomeHome from "../components/WelcomeHome/WelcomeHome";

const index = () => {
  const [isFontLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter-VariableFont_slnt,wght.ttf"),
  });
  return (
    <SafeAreaProvider>
      {isFontLoaded && (
        <SafeAreaView style={{ flex: 1 }}>
          <WelcomeHome />
        </SafeAreaView>
      )}
    </SafeAreaProvider>
  );
};

export default index;
