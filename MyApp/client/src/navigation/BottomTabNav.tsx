// MyApp/client/src/navigation/BottomTabNav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AlphabetScreen from '../screens/AlphabetScreen';
import WordsScreen from '../screens/WordsScreen';
import { Image } from 'react-native';

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
          },
        }}
      >
        {/* 🅰️ Alphabet Page */}
        <Tab.Screen
          name="Alphabet"
          component={AlphabetScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/images/button_alphabets.png')}
                style={{
                  width: 120,
                  height: 45,
                  resizeMode: 'contain',
                  opacity: focused ? 1 : 0.6, // 비활성일 때 살짝 흐리게
                }}
              />
            ),
          }}
        />

        {/* 📖 Words Page */}
        <Tab.Screen
          name="Words"
          component={WordsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('../../assets/images/button_words.png')}
                style={{
                  width: 120,
                  height: 45,
                  resizeMode: 'contain',
                  opacity: focused ? 1 : 0.6,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
