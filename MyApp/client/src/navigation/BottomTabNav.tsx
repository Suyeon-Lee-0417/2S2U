// MyApp/client/src/navigation/BottomTabNav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View } from 'react-native';
import AlphabetScreen from '../screens/AlphabetScreen';
import WordsScreen from '../screens/WordsScreen';

const Tab = createBottomTabNavigator();

const ICON_CONTAINER = {
  width: 120,
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
};

const ICON_STYLE = (focused: boolean) => ({
  width: 110,
  height: 40,
  resizeMode: 'contain' as const,
  opacity: focused ? 1 : 0.6,
});

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

        {/* 🅰️ Alphabets */}
        <Tab.Screen
          name="Alphabet"
          component={AlphabetScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={ICON_CONTAINER}>
                <Image
                  source={require('../../assets/images/button_alphabets.png')}
                  style={ICON_STYLE(focused)}
                />
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
              <View style={ICON_CONTAINER}>
                <Image
                  source={require('../../assets/images/button_words.png')}
                  style={ICON_STYLE(focused)}
                />
              </View>
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
