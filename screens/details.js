import { View, Text, Button, StyleSheet, Image } from "react-native";
import { globalStyles, images } from "../styles/globalStyles";
import Card from "../shared/card";

const Details = ({ navigation, route }) => {
  const { title, rating, body } = route.params;

  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.textTitle}>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Rating:</Text>
          <Image source={images.ratings[rating]} style={globalStyles.image} />
        </View>
      </Card>
      <Button title="Back home" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  textTitle: {
    fontWeight: "bold",
  },
});

export default Details;
