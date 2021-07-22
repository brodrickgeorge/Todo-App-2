import React from "react";
import { View, Text } from "react-native";

export default function TodoItem({ item }) {
  return <Text>{item.text}</Text>;
}
