// MyApp/client/src/navigation/BottomTabNav.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import AlphabetScreen from '../screens/AlphabetScreen';
import WordsScreen from '../screens/WordsScreen';
import DonationScreen from '../screens/DonationScreen';

const Tab = createBottomTabNavigator();

// 1) TabIcon now receives `color` and applies it as tintColor
const TabIcon = ({
  source,
  focused,
  color,
}: {
  source: ImageSourcePropType;
  focused: boolean;
  color: string; // keep required
}) => (
  <View style={[styles.iconContainer, focused && styles.focusedBackground]}>
    <Image
      source={source}
      style={[styles.icon, { tintColor: color, opacity: focused ? 1 : 0.7 }]}
      resizeMode="contain"
    />
  </View>
);

const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
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

          // 2) Provide colors so `tabBarIcon` receives `color`
          tabBarActiveTintColor: '#000',     // black when focused
          tabBarInactiveTintColor: '#000',   // black when unfocused (change to '#8B8B8B' if you want gray)

          // 3) Pass `color` down to TabIcon
          tabBarIcon: ({ focused, color }) => {
            let src: ImageSourcePropType;
            switch (route.name) {
              case 'Alphabet':
                src = require('../../assets/images/navAlphabet.png');
                break;
              case 'Words':
                src = require('../../assets/images/navWords.png');
                break;
              case 'Donation':
              default:
                src = require('../../assets/images/navDonation.png');
            }
            return <TabIcon source={src} focused={focused} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Alphabet" component={AlphabetScreen} />
        <Tab.Screen name="Words" component={WordsScreen} />
        <Tab.Screen name="Donation" component={DonationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 18,
  },
  icon: {
    width: 28,
    height: 28,
  },
  focusedBackground: {
    backgroundColor: '#a7d58e',
  },
});

export default BottomTabNav;
