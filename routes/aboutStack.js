import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "../screens/about";

const AboutStack = () => {
  const Stack = createStackNavigator();

  AboutStack.navigationOptions = {
    title: "About Stack",
    headerStyle: {
      backgroundColor: "#eee",
    },
    height: 60,
    headerTintColor: "#444",
  };

  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="AboutView" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default AboutStack;
