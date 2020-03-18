import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";
import { Rating, AirbnbRating, Icon } from "react-native-elements";
import React from "react";

const DiscoverSpot = props => (
  <View style={styles.container}>
    <TouchableOpacity
      onPress={() => {
        props.onImagePress();
      }}
    >
      <Image
        style={styles.imageContainer}
        resizeMode="cover"
        source={require("../../assets/mountain.png")}
      />
    </TouchableOpacity>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.infoDetails}>
        <Rating
          imageSize={10}
          //readonly
          type="custom"
          //ratingImage={IMAGE}
          startingValue={props.rating}
        />
        <Text style={styles.ratingText}>{props.rating}/5.0</Text>
        <Text style={styles.location}>{props.location} km nearby</Text>
      </View>
    </View>
  </View>
);

export default DiscoverSpot;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  imageContainer: {
    width: 335,
    height: 160,
    borderRadius: 2
  },
  header: {
    height: 74,
    width: "100%"
  },
  title: { fontSize: 17, lineHeight: 17, letterSpacing: 0 },
  infoContainer: {
    width: 335,
    height: 80,
    borderRadius: 2,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  infoDetails: {
    flex: 1,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  ratingText: {
    fontSize: 11,
    lineHeight: 11,
    letterSpacing: 1,
    color: "#b2b0c0",
    marginLeft: 8
  },
  location: {
    textTransform: "uppercase",
    fontSize: 11,
    lineHeight: 11,
    letterSpacing: 1.1,
    color: "#b2b0c0",
    marginLeft: 21
  }
});
