import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({ text, index }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}/>
        <Text style={styles.itemText}>👉{" "}{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#0d1117",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "#30363d",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 25,
    height: 25,
    backgroundColor:"#c9d1d9",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    color: "#c9d1d9",
    maxWidth: "80%",
  },
  circular: {
      width:12,
      height:12,
      borderRadius:10,
      backgroundColor:"#c9d1d9",
      borderColor:"#30363d",
      borderWidth:1
  },
});

export default Task;
