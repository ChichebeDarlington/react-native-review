import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import DetailsScreen from "../screens/details";

const HomeStack = () => {
  const Stack = createStackNavigator();

  HomeStack.navigationOptions = {
    title: "My Screen Title",
    headerStyle: {
      backgroundColor: "#eee",
    },
    height: 60,
    headerTintColor: "#444",
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeView" component={HomeScreen} />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: "Details",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
