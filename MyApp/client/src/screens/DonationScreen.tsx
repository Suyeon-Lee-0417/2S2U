// MyApp/client/src/screens/DonationScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView, Image } from 'react-native'; // ✅ Image 추가
// import Icon from 'react-native-vector-icons/Feather'; // ❌ 아이콘 import 제거

const DonationScreen = () => {
  const handleDonationPress = () => {
    Linking.openURL('https://fpcf.ca/take-action/ways-to-give');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 상단 하트 이미지 */}
      <TouchableOpacity style={styles.heartButton} onPress={handleDonationPress}>
        <Image
          source={require('../../assets/images/donation.png')}
          style={{ width: 36, height: 36 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* 메인 텍스트 */}
      <Text style={styles.title}>Support the Community</Text>
      <Text style={styles.subtitle}>
        These are trusted organizations helping Canadian Indigenous communities.{"\n"}
        Your donations support language preservation, education, cultural programs, and advocacy.
      </Text>

      {/* 박스 1 */}
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Image
            source={require('../../assets/images/problem.png')}
            style={styles.cardImage}
            resizeMode="contain"
          />
          <Text style={styles.cardTitle}>Why Donations Matter</Text>
        </View>
        <Text style={styles.cardText}>
          Many Indigenous languages are at risk of extinction. Donations support language education
          programs, cultural events, community resources, and education for younger generations.
        </Text>
      </View>

      {/* 하단 요약 카드 */}
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>70+</Text>
        <Text style={styles.statLabel}>Indigenous Languages</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.statNumber}>600+</Text>
        <Text style={styles.statLabel}>First Nations</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f8f2',
    alignItems: 'center',
    paddingVertical: 40,
  },
  heartButton: {
    backgroundColor: '#a7d58e',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a2e05',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    color: '#3f3f46',
    textAlign: 'center',
    paddingHorizontal: 30,
    marginBottom: 30,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#e9f2e1',
    borderRadius: 12,
    padding: 18,
    width: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    marginBottom: 25,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardImage: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a2e05',
  },
  cardText: {
    fontSize: 14,
    color: '#3f3f46',
    lineHeight: 20,
  },
  statBox: {
    backgroundColor: '#f3f4f0',
    width: '80%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a2e05',
  },
  statLabel: {
    fontSize: 14,
    color: '#3f3f46',
  },
});

export default DonationScreen;
