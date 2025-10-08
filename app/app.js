import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, Pressable, StatusBar } from 'react-native';

export default function App() {
  const [msg, setMsg] = useState('Hello, React Native!');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>{msg}</Text>
      <Pressable style={styles.button} onPress={() => setMsg('You tapped the button!')}>
        <Text style={styles.buttonText}>Tap me</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 12 },
  button: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: 8, borderWidth: 1 },
  buttonText: { fontSize: 16 }
});