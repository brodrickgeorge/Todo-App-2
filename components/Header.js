import React from "react";

import { Text, StyleSheet, SafeAreaView, View } from "react-native";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.item}>Todos</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "coral",
  },
  item: {
    fontSize: 20,
  },
});
