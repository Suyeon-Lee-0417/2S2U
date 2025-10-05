// MyApp/client/src/navigation/BottomTabNav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import AlphabetScreen from '../screens/AlphabetScreen';
import WordsScreen from '../screens/WordsScreen';
import DonationScreen from '../screens/DonationScreen';
//import RecordScreen from '../screens/RecordScreen'; // ✅ 새로 추가된 Record 페이지
import Icon from 'react-native-vector-icons/Feather'; // 아이콘 세트

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopColor: '#eee',
            height: 70,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          },
        }}
      >

        {/* 🅰️ Alphabet */}
        <Tab.Screen
          name="Alphabet"
          component={AlphabetScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Icon name="type" size={20} color={focused ? '#1e90ff' : '#666'} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: focused ? '700' : '500',
                    color: focused ? '#1e90ff' : '#666',
                    marginTop: 4,
                  }}
                >
                  Alphabet
                </Text>
              </View>
            ),
          }}
        />

        {/* 📖 Words */}
        <Tab.Screen
          name="Words"
          component={WordsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Icon name="book" size={20} color={focused ? '#1e90ff' : '#666'} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: focused ? '700' : '500',
                    color: focused ? '#1e90ff' : '#666',
                    marginTop: 4,
                  }}
                >
                  Words
                </Text>
              </View>
            ),
          }}
        />

        {/* 🎙️ Record */}
        <Tab.Screen
          name="Record"
          component={RecordScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center' }}>
                <Icon name="mic" size={20} color={focused ? '#1e90ff' : '#666'} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: focused ? '700' : '500',
                    color: focused ? '#1e90ff' : '#666',
                    marginTop: 4,
                  }}
                >
                  Record
                </Text>
              </View>
            ),
          }}
        />

        {/* 💚 Donate */}
        <Tab.Screen
          name="Donation"
          component={DonationScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: 'center',
                  backgroundColor: focused ? '#a7d58e' : 'transparent',
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  borderRadius: 16,
                }}
              >
                <Icon name="heart" size={20} color={focused ? '#1a2e05' : '#666'} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: focused ? '700' : '500',
                    color: focused ? '#1a2e05' : '#666',
                    marginTop: 4,
                  }}
                >
                  Donate
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
