import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  StyleSheet,
} from "react-native";
import TodoItem from "../components/TodoItem";
import useTodos from "../hooks/useTodos";
import LinearGradient from 'react-native-linear-gradient';

export default function TodoScreen() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();
  const [text, setText] = useState("");
 
  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
    Keyboard.dismiss();
  };
 
  return (
    <LinearGradient
  colors={["#dfe9f3", "#ffffff"]}
  style={styles.safe}
>
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.heading}>Todo List</Text>
 
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Write a task..."
            placeholderTextColor="#7f8c8d"
            style={styles.input}
            value={text}
            onChangeText={setText}
          />
 
          <TouchableOpacity onPress={handleAdd} style={styles.addButton}>
            <Text style={styles.addButtonText}>＋</Text>
          </TouchableOpacity>
        </View>
 
        {todos.length === 0 ? (
          <Text style={styles.empty}>✨ Nothing here — Start adding!</Text>
        ) : (
          <FlatList
            data={todos}
            showsVerticalScrollIndicator={false}
           keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TodoItem
                item={item}
                onToggle={() => toggleTodo(item.id)}
                onDelete={() => removeTodo(item.id)}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
    </LinearGradient>
  );
}
 
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#dfe6e9", // 🌈 soft clean background
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2d3436",
    textAlign: "center",
    marginVertical: 25,
    letterSpacing: 1,
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    height: 50,
    color: "#2d3436",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "#0984e3",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
  addButtonText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  empty: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 18,
    color: "#636e72",
  },
});