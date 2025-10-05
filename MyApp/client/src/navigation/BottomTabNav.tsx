// MyApp/client/src/navigation/BottomTabNav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import AlphabetScreen from '../screens/AlphabetScreen';
import WordsScreen from '../screens/WordsScreen';
import DonationScreen from '../screens/DonationScreen';
import RecordScreen from '../screens/RecordScreen';

const Tab = createBottomTabNavigator();

const TAB_TEXT_STYLE = (focused: boolean, highlight?: boolean) => ({
  fontSize:10,
  fontWeight: focused ? '700' : '500',
  color: highlight
    ? focused
      ? '#1a2e05'
      : '#666'
    : focused
    ? '#1e90ff'
    : '#666',
  letterSpacing: 0.5,
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
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={TAB_TEXT_STYLE(focused)}>A</Text>
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
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={TAB_TEXT_STYLE(focused)}>W</Text>
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
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={TAB_TEXT_STYLE(focused)}>R</Text>
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
                  justifyContent: 'center',
                  backgroundColor: focused ? '#a7d58e' : 'transparent',
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 18,
                }}
              >
                <Text style={TAB_TEXT_STYLE(focused, true)}>D</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNav;
