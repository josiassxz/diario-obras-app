import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import * as Font from 'expo-font';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const loadFonts = () => {
  return Font.loadAsync({
    'Aller-Regular': require('./assets/fonts/aller.regular.ttf'),
    'Aller-Bold': require('./assets/fonts/aller.bold.ttf'),
    'Aller-Italic': require('./assets/fonts/aller.italic.ttf'),
    'Aller-Bold-Italic': require('./assets/fonts/aller.bold-italic.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Função para carregar as fontes
    const loadFontsAsync = async () => {
      try {
        await loadFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn('Erro ao carregar fontes:', e);
        // Em caso de erro, podemos prosseguir sem as fontes
        setFontsLoaded(true);
      }
    };

    loadFontsAsync();
  }, []);

  // Exibir uma tela de carregamento enquanto as fontes estão sendo carregadas
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;