 import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function CounterScreen() {
  // 1️⃣ Initialiser l'état
  const [count, setCount] = useState(0);

  // 2️⃣ Fonction pour incrémenter
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      {/* 3️⃣ Afficher l'état */}
      <Text style={styles.countText}>Count: {count}</Text>

      {/* 4️⃣ Bouton pour incrémenter */}
      <Button title="Incrémenter" onPress={increment} />
    </View>
  );
}

// 5️⃣ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",  // centre verticalement
    alignItems: "center",      // centre horizontalement
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
});
