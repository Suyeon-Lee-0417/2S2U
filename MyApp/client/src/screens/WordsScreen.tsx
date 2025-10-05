// MyApp/client/src/screens/WordsScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const WordsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Cree word */}
      <Text style={styles.creeText}>ᑕᓂᓯ</Text>

      {/* Pronunciation */}
      <Text style={styles.pronunciation}>[Tanisi]</Text>

      {/* Play button */}
      <TouchableOpacity style={styles.soundButton}>
        <Image
          source={require('../../assets/images/play.png')}
          style={styles.soundIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FCFCF8',
  },
  creeText: {
    fontSize: 60,
    color: '#2E3A1C',
    marginBottom: 10,
    fontWeight: '600',
  },
  pronunciation: {
    fontSize: 20,
    color: '#555',
    marginBottom: 30,
  },
  soundButton: {
    backgroundColor: '#E8F2E2',
    borderRadius: 40,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  soundIcon: {
    width: 30,
    height: 30,
    tintColor: '#2E3A1C',
  },
});

export default WordsScreen;

