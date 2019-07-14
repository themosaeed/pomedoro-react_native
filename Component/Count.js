import React from "react";
import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  count: {
    fontSize: 48
  }
});

export default function Count({ seconds, minutes }) {
  return (
    <Text style={styles.count}>
      {minutes} : {seconds}
    </Text>
  );
}
