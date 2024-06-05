import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { CounterScreen } from './src/presentations/screens/CounterScreen.tsx';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      
      <CounterScreen />

    </SafeAreaView>
  );
};
