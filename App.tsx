import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigation/rootStack';
import { Provider } from 'react-redux';
import { store } from './src/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
