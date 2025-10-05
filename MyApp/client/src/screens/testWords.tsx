import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

type Word = {
  Cree: string;
  Pronunciation?: string;
  Meaning?: string;
  AudioUrl?: string;
};

const API_URL = "http://localhost:4000/api/activities/search"; 
// iOS 시뮬레이터 = localhost, Android 에뮬레이터 = 10.0.2.2 로 바꾸세요.

function normalizeWord(raw: any): Word | null {
  if (!raw) return null;

  // 배열이면 첫 요소 사용
  const item = Array.isArray(raw)
    ? raw[0]
    : // 흔한 래핑 형태들 대응
      raw.item ?? raw.result ?? raw.data ?? raw.word ?? raw;

  if (!item) return null;

  return {
    Cree: item.Cree ?? item.cree ?? item.word ?? "",
    Pronunciation: item.Pronunciation ?? item.pronunciation ?? item.pron ?? "",
    Meaning: item.Meaning ?? item.meaning ?? item.translation ?? "",
    AudioUrl: item.AudioUrl ?? item.audioUrl ?? item.audio ?? ""
  };
}

const WordsScreen = () => {
  const [word, setWord] = useState<Word | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWord = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({})
      });
      const data = await res.json();
      console.log("API raw:", data);
      setWord(normalizeWord(data));
    } catch (err) {
      console.error("API error:", err);
      setWord(null);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchWord();
    }, [])
  );

  const playAudio = async () => {
    // react-native-sound 등으로 연결 예정
    console.log("play", word?.AudioUrl);
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" color="#2E3A1C" style={{ marginBottom: 24 }} />}

      {word ? (
        <>
          <Text style={styles.creeText}>{word.Cree}</Text>
          {!!word.Pronunciation && <Text style={styles.pronunciation}>[{word.Pronunciation}]</Text>}

          <TouchableOpacity style={styles.soundButton} onPress={playAudio}>
            <Image source={require("../../assets/images/play.png")} style={styles.soundIcon} />
          </TouchableOpacity>

          {!!word.Meaning && <Text style={styles.meaning}>Meaning: {word.Meaning}</Text>}
        </>
      ) : !loading ? (
        <Text>no data</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:"center", alignItems:"center", backgroundColor:"#FCFCF8", padding:20 },
  creeText:{ fontSize:60, color:"#2E3A1C", marginBottom:10, fontWeight:"600" },
  pronunciation:{ fontSize:20, color:"#555", marginBottom:30 },
  meaning:{ fontSize:18, color:"#333", marginTop:20 },
  soundButton:{ backgroundColor:"#E8F2E2", borderRadius:40, padding:15, shadowColor:"#000", shadowOpacity:0.2, shadowRadius:5 },
  soundIcon:{ width:30, height:30, tintColor:"#2E3A1C" }
});

export default WordsScreen;
