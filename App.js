import "react-native-gesture-handler";
import { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/rootStack";
import { NavigationContainer } from "@react-navigation/native";

const getFonts = () => {
  return Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-medium": require("./assets/fonts/Nunito-Medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return <Navigator />;
  } else {
    return <AppLoading startAsync={getFonts} onFinish={setFontLoaded(true)} />;
  }
}
