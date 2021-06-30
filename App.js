import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Text} from 'react-native-ui-lib' ;
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <AppNavigator/>
          <StatusBar style="auto" />
      </PersistGate>
    </Provider>
  );
}

