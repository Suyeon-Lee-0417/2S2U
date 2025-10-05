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

        
      {/* Floating refresh Button */}
    <TouchableOpacity style={styles.refreshButton}>
      <Image
        source={require('../../assets/images/refresh.png')}
        style={styles.refreshIcon}
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
    marginBottom: 20, // 버튼 간 간격
  },
  soundIcon: {
    width: 30,
    height: 30,
    tintColor: '#2E3A1C',
  },
  refreshButton: {
    position: 'absolute',
    bottom: 80, // 탭 네비게이션 위 위치
    alignSelf: 'center',
    backgroundColor: '#A2C98F',
    borderRadius: 50,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  refreshIcon: {
    width: 28,
    height: 28,
    tintColor: '#fff',
  },
});

export default WordsScreen;

