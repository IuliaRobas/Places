import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Alert
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import DiscoverSpot from "../../components/discover/DiscoverSport";
import { data } from "../../shared/data";

const DiscoverMainScreen = props => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => {
          return item.id;
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <DiscoverSpot
            rating={item.rating}
            title={item.title}
            img={item.img}
            location={item.location}
          />
        )}
      ></FlatList>
    </SafeAreaView>
  );
};

export default DiscoverMainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 667,
    width: 375,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
