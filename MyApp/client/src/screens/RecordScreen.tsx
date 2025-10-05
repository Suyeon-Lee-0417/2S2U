import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const RecordScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.center}>
        <Text style={styles.title}>Record</Text>
        <Text style={styles.sub}>Coming soon…</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f7f8f2' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: '#1a2e05' },
  sub: { marginTop: 8, fontSize: 14, color: '#666' },
});

export default RecordScreen;
