import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { initDatabase, insertDefaultData } from './database';
import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  useEffect(() => {
    const setup = async () => {
      await initDatabase();
      await insertDefaultData();
    };
    setup();
  }, []);

  return (
    <SafeAreaProvider>
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
