import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

const RecordScreen = () => {
  const [recording, setRecording] = useState(false);
  const [filePath, setFilePath] = useState<string | null>(null);

  // Start recording
  const startRecording = async () => {
    try {
      const result = await audioRecorderPlayer.startRecorder();
      setRecording(true);
      console.log('Recording started:', result);
      setFilePath(null); // clear previous file
    } catch (err) {
      console.error('Start recording error:', err);
      Alert.alert('Error', 'Failed to start recording');
    }
  }; 

  // Stop recording
  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      setRecording(false);
      console.log('Recording stopped:', result);
      setFilePath(result); // store file path
    } catch (err) {
      console.error('Stop recording error:', err);
      Alert.alert('Error', 'Failed to stop recording');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Record your pronunciation</Text>

      <TouchableOpacity
        style={[styles.button, recording ? styles.stopButton : styles.startButton]}
        onPress={recording ? stopRecording : startRecording}
      >
        <Text style={styles.buttonText}>
          {recording ? 'Stop Recording' : 'Start Recording'}
        </Text>
      </TouchableOpacity>

      {filePath && (
        <Text style={styles.filePath}>Saved file: {filePath}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FCFCF8', padding: 20 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 40, color: '#2E3A1C' },
  button: { padding: 20, borderRadius: 50, marginBottom: 20, width: 200, alignItems: 'center' },
  startButton: { backgroundColor: '#A2C98F' },
  stopButton: { backgroundColor: '#E57373' },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  filePath: { marginTop: 20, fontSize: 14, color: '#555', textAlign: 'center' },
});

export default RecordScreen;