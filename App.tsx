import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PermissionsProvider} from './src/context/permissionsContext';
import {Navigator} from './src/navigator/Navigator';

export const AppState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}
