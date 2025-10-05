// MyApp/client/src/navigation/BottomTabNav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AlphabetScreen from '../screens/AlphabetScreen';
import WordsScreen from '../screens/WordsScreen';
import { Text, View } from 'react-native';

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
            height: 60,
          },
        }}
      >
        {/* Alphabet pg*/}
        <Tab.Screen
          name="Alphabet"
          component={AlphabetScreen}
          options={{
            tabBarIcon: () => (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 10, color: '#2E3A1C' }}>Alphabet</Text>
              </View>
            ),
          }}
        />

        {/* Words Pg */}
        <Tab.Screen
          name="Words"
          component={WordsScreen}
          options={{
            tabBarIcon: () => (
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 10, color: '#2E3A1C' }}>Words</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
