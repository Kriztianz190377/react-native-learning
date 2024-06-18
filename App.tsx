import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView, Text, View } from 'react-native';
import { CounterScreen } from './src/presentations/screens/CounterScreen.tsx';
import { Counter3Mcreen } from './src/presentations/index.tsx';

import IonIcon from 'react-native-vector-icons/Ionicons'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: (props) => (<IonIcon{...props} />)
      }}
    >
      <SafeAreaProvider>

        <SafeAreaView style={{ flex: 1 }}>

          {/* <CounterScreen /> */}
          <Counter3Mcreen />

        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>


  );
};
