import React, { useState } from "react";

import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");

  const handleChange = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        onChangeText={handleChange}
        style={styles.input}
        placeholder="Add Todo"
      />
      <Button onPress={() => handleSubmit(text)} color="coral" title="Submit" />
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
