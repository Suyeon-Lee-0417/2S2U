import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Audio } from "expo-av";
import { useFocusEffect } from "@react-navigation/native";

const WordsScreen = () => {
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = "http://10.0.2.2:4000/api/activities/search"; 
  // ⚠️ For Android emulator. Use http://localhost:4000 if iOS simulator.

  // Fetch API data when screen is focused
  const fetchWord = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      });
      const data = await res.json();
      console.log("API response:", data);
      setWord(data); // adjust depending if it's array or single object
    } catch (err) {
      console.error("API error:", err);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchWord(); // runs every time screen is focused
    }, [])
  );

  // Play audio
  const playAudio = async () => {
    if (!word?.AudioUrl) return;
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: word.AudioUrl });
      await sound.playAsync();
    } catch (err) {
      console.error("Audio error:", err);
    }
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#2E3A1C" style={{ marginTop: 20 }} />}

      {word && (
        <>
          <Text style={styles.creeText}>{word.Cree}</Text>
          <Text style={styles.pronunciation}>[{word.Pronunciation}]</Text>

          <TouchableOpacity style={styles.soundButton} onPress={playAudio}>
            <Image source={require("../../assets/images/play.png")} style={styles.soundIcon} />
          </TouchableOpacity>

          <Text style={styles.meaning}>Meaning: {word.Meaning}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FCFCF8",
    padding: 20
  },
  creeText: {
    fontSize: 60,
    color: "#2E3A1C",
    marginBottom: 10,
    fontWeight: "600"
  },
  pronunciation: {
    fontSize: 20,
    color: "#555",
    marginBottom: 30
  },
  meaning: {
    fontSize: 18,
    color: "#333",
    marginTop: 20
  },
  soundButton: {
    backgroundColor: "#E8F2E2",
    borderRadius: 40,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  soundIcon: {
    width: 30,
    height: 30,
    tintColor: "#2E3A1C"
  }
});

export default WordsScreen;