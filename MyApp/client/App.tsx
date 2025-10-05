// MyApp/client/App.tsx
import React, { useState } from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import BottomTabNav from './src/navigation/BottomTabNav';

export const HomeSplash: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>ᓀᐦᐃᔭᐍᐏᐣ</Text>
      <Text style={styles.subtitle}>Hello Cree!</Text>
      <Button title="Press Me" onPress={() => setMessage("Button pressed!")} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, marginBottom: 16 },
  subtitle: { fontSize: 24, color: 'blue', marginBottom: 16 },
  message: { marginTop: 20, fontSize: 18, color: 'green' },
});



export default function App() {
  return <BottomTabNav />;
}
