import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import NavigationApp from './src/navigation/navigation';
import { StateContextProvider } from './src/context/stateContext';
import { store } from './src/store/store';

function App(): JSX.Element {
  return (
    <NavigationContainer>
       <Provider store={store}>
      <StatusBar backgroundColor="white" barStyle="light-content" />
      
      <StateDataApp>
        <NavigationApp/>
      </StateDataApp>
      </Provider>
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
