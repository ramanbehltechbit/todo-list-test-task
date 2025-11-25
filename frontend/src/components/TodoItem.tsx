import React from "react";
import { View, Text, Switch, Button, StyleSheet } from "react-native";
import { Todo } from "../types/todo";

interface Props {
  item: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ item, onToggle, onDelete }: Props) {
  return (
    <View style={styles.row}>
      <Switch value={item.completed} onValueChange={onToggle} />
      <Text style={[styles.text, item.completed && styles.completed]}>
        {item.text}
      </Text>
      <Button title="X" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  text: { flex: 1, marginLeft: 10 },
  completed: { textDecorationLine: "line-through", color: "gray" },
});
