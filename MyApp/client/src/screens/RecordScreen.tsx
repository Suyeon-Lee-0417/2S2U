import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const RecordScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.center}>
        <Text style={styles.title}>Record</Text>
        <Text style={styles.sub}>Coming soon…</Text>
      </View>
      
      {/* 🔽 저작권 표시 (Copyright) */}
    <Text style={styles.copyright}>© 2025 Cree. All rights reserved.</Text>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f7f8f2' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: '#1a2e05' },
  sub: { marginTop: 8, fontSize: 14, color: '#666' },
  copyright: {
  fontSize: 12,
  color: '#6b7280', // 회색톤
  marginTop: 20,
  marginBottom: 30,
  textAlign: 'center',
},

});

export default RecordScreen;
