import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Add Todo"
        onChangeText={handleChange}
        style={styles.input}
      />
      <Button onPress={() => handleSubmit(text)} title="Submit" color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
