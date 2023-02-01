import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
  useTheme,
} from 'react-native-paper';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';

import Main from './src/routes/Main';
import store from './src/store';

const customDarkTheme = {
  dark: true,
  colors: {
    ...NavigationDarkTheme.colors,
    ...MD3DarkTheme.colors,
    card: MD3DarkTheme.colors.background,
  },
};
const customLightTheme = {
  dark: false,
  colors: {
    ...NavigationLightTheme.colors,
    ...MD3LightTheme.colors,
    card: MD3LightTheme.colors.background,
  },
};
function Container() {
  // Moved this outside App because PaperProvider
  // has to be loaded first to get current device
  // theme
  const theme = useTheme();
  return (
    <SafeAreaProvider
      style={{ backgroundColor: theme.colors.background }}
      initialMetrics={initialWindowMetrics}
    >
      <StatusBar />
      <NavigationContainer theme={theme.dark ? customDarkTheme : customLightTheme}>
        <Main />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Container />
      </PaperProvider>
    </StoreProvider>
  );
}
