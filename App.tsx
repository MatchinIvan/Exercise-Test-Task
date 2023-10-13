import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/rootStack';
import { Provider } from 'react-redux';
import { reduxStore } from './src/store';

function App() {
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
