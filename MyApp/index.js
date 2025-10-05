import React, { useEffect, useRef, useState } from 'react';
import { AppRegistry, View, StyleSheet, Animated, StatusBar } from 'react-native';
import App from './client/App';
import { name as appName } from './app.json';
import { enableScreens } from 'react-native-screens';
enableScreens(true);

const Root = () => {
  const [loading, setLoading] = useState(true);
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, { toValue: 1, duration: 500, useNativeDriver: true }).start(() => {
      setTimeout(() => {
        Animated.timing(opacity, { toValue: 0, duration: 400, useNativeDriver: true }).start(() => {
          setLoading(false);
        });
      }, 1200);
    });
  }, [opacity]);

  if (loading) {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Animated.Image
          source={require('./client/assets/images/cree.png')}
          style={[styles.image, { opacity }]}
        />
      </View>
    );
  }
  return <App />;
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  image: { width: 180, height: 180, resizeMode: 'contain' },
});

AppRegistry.registerComponent(appName, () => Root);
