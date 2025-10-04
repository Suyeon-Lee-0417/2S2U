// MyApp/client/src/screens/WordsScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../style/WordsStyle';

const WordsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Cree words */}
      <Text style={styles.creeText}>ᑕᓂᓯ</Text>

      {/* Pronunciation */}
      <Text style={styles.pronunciation}>[Tanisi]</Text>

      {/* Play button */}
      <TouchableOpacity style={styles.soundButton}>
        <Image
          source={require('../../assets/icons/play.png')}
          style={styles.soundIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default WordsScreen;
