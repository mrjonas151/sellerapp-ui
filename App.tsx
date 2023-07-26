import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native'; 
import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="auto" translucent={false} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}