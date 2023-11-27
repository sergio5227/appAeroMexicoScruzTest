import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import NavigationApp from './src/navigation/navigation';
import { StateContextProvider } from './src/context/stateContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      
      <StateDataApp>
        <NavigationApp/>
      </StateDataApp>
    </NavigationContainer>
  );
}

const StateDataApp = ({children}:{children:JSX.Element})=> {
  return (
    <StateContextProvider >
      {children}
    </StateContextProvider>
  )
}

export default App;
