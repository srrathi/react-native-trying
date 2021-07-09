import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState();
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTasks([...tasks, name]);
    setName(null);
  };

  const completeTask = (index) => {
    const newTaskArray = tasks.filter((task) => task !== tasks[index]);
    setTasks(newTaskArray);
  };

  return (
    <View style={styles.container}>
      {/* TODAY'S TASKS */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.item}>
          {/* TASKS LIST */}

          {tasks.map((task, index) => {
            return (
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                <Task text={task} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* CREATE TASK */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor="#c9d1d9"
          placeholder={"Write your Task"}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#090c10",
    color: "#fff",
  },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 10,
    zIndex: 100,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#090c10",
  },
  input: {
    padding: 15,
    width: "70%",
    backgroundColor: "#0d1117",
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 50,
    color: "#c9d1d9",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#0d1117",
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#c9d1d9",
    fontSize: 30,
  },
});
