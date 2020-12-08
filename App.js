/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Category } from './src/components/Category';

const App = () => {
  return (
    <NavigationContainer>
      <Category />
    </NavigationContainer>
  );
};

export default App;
