import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useState } from "react";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Form from "./form";
import { TouchableWithoutFeedback } from "react-native";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    {
      title: "Yuppy! I am a dev pro, hit me up",
      rating: 5,
      body: "You gonna love it",
      key: "1",
    },
    {
      title: "Yuppy! I am a dev pro, hit me up",
      rating: 4,
      body: "You gonna love it",
      key: "2",
    },
    {
      title: "Yuppy! I am a dev pro, hit me up",
      rating: 3,
      body: "You gonna love it",
      key: "3",
    },
    {
      title: "Yuppy! I am a dev pro, hit me up",
      rating: 2,
      body: "You gonna love it",
      key: "4",
    },
    {
      title: "Yuppy! I am a dev pro, hit me up",
      rating: 1,
      body: "You gonna love it",
      key: "5",
    },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((prev) => {
      return [review, ...prev];
    });
    setOpenModal(false);
  };

  const deleteReview = (key) => {
    setReviews((prev) => {
      return prev.filter((item) => item.key != key);
    });
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setOpenModal(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />

            <Form addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setOpenModal(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", item, {
                screenTitle: "Dynamic Title",
              })
            }
          >
            <Card>
              <View style={styles.card}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <MaterialIcons
                  name="delete"
                  size={18}
                  color="crimson"
                  onPress={() => deleteReview(item.key)}
                />
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
