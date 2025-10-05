/*

References : 

https://thecanadianencyclopedia.ca/en/article/aboriginal-people-languages
https://www.statcan.gc.ca/o1/en/plus/3920-canadas-indigenous-population
https://fpcf.ca/take-action/ways-to-give
*/




// MyApp/client/src/screens/DonationScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, ScrollView, Image } from 'react-native';

const DonationScreen = () => {
  const handleDonationPress = () => {
    Linking.openURL('https://fpcf.ca/take-action/ways-to-give');
  };

  // ✅ 문화 설명 링크 오픈 핸들러 (추가)
  const handleCulturePress = async () => {
    const url = 'https://online.flippingbook.com/view/3524645/';
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) await Linking.openURL(url);
    } catch (e) {
      console.warn('Cannot open url:', e);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 제목 */}
      <Text style={styles.title}>Support the Community {"\n"}</Text>

      {/* 상단 하트 이미지 (도네이션 버튼) */}
      <TouchableOpacity style={styles.heartButton} onPress={handleDonationPress} activeOpacity={0.8}>
        <Image
          source={require('../../assets/images/donation.png')}
          style={{ width: 36, height: 36 }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* 안내 텍스트 */}
      <Text style={styles.subtitle}>↑ Click to Donate ↑</Text>

      {/* 카드 1 */}
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
          For Indigenous peoples, intergenerational giving is a way of life.
          Elders and Knowledge Keepers pass on language, arts, and traditions to the next generation.
          Your support helps these cultural legacies thrive for years to come.
        </Text>
      </View>

      {/* 섹션 타이틀 */}
      <View>
        <Text style={styles.cardTitle}>We could support{"\n"}</Text>
      </View>

      {/* 통계 박스들 */}
      <View style={styles.statBox}>
        <Text style={styles.statNumber}>70+</Text>
        <Text style={styles.statLabel}>Indigenous Languages</Text>
      </View>

      <View style={styles.statBox}>
        <Text style={styles.statNumber}>1.8 million +</Text>
        <Text style={styles.statLabel}>Indigenous People</Text>
      </View>
{/* 🔗 문화 설명 보기 (맨 아래 링크 카드) */}
<TouchableOpacity style={styles.linkCard} onPress={handleCulturePress} activeOpacity={0.85}>
  <View style={styles.linkRow}>
    <View>
      <Text style={styles.linkTitle}>Learn about Indigenous culture</Text>
      <Text style={styles.linkCTA}>{"\n"}Clink Here</Text> {/* ✅ 아래 줄로 이동 */}
    </View>
  </View>

</TouchableOpacity>

{/* 🔽 저작권 표시 (Copyright) */}
<Text style={styles.copyright}>© 2025 Cree. All rights reserved.</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f8f2',
    alignItems: 'center',
    paddingVertical: 40,
    paddingTop: 150,     // 위 여백 유지
    paddingBottom: 48,   // ✅ 맨 아래 카드가 잘리지 않도록 하단 여백 추가
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
    marginBottom: 12,
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
    paddingBottom: 50,
    textDecorationLine: 'underline',
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
    textAlign: 'left',
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
    paddingBottom: 7,
  },
  statLabel: {
    fontSize: 14,
    color: '#3f3f46',
  },

  // ✅ 아래 추가된 스타일들
  linkCard: {
    backgroundColor: '#e9f2e1',
    width: '85%',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a2e05',
  },
  linkCTA: {
    fontSize: 14,
    fontWeight: '600',
    color: '#638b0eff',
    textAlign: 'left',
    marginLeft: 10,
  },
  linkDesc: {
    fontSize: 13,
    color: '#374151',
    lineHeight: 18,
  },
  copyright: {
  fontSize: 12,
  color: '#6b7280', // 회색톤
  marginTop: 20,
  marginBottom: 30,
  textAlign: 'center',
},

});

export default DonationScreen;
