import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/rootStack';
import { SafeAreaView, StatusBar } from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'}/>
        <NavigationContainer>
          <RootStack/>
        </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
