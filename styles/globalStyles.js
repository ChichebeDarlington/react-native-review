import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});

export const images = {
  ratings: {
    1: require("../assets/rating_1.png"),
    2: require("../assets/rating_2.png"),
    3: require("../assets/rating_3.png"),
    4: require("../assets/rating_4.png"),
    5: require("../assets/rating_5.png"),
  },
};
