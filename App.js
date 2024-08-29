import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import PageCep from './src/PageCep/Index';
import PesquisaCep from './src/PesquisaCep/Index';

const iconPath = require('./assets/icon.png');

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#BE91B5' }}>
      <Text style={{ color: '#523552', fontSize: 18, marginBottom: 30 }}>Oi, esse é um App de pesquisa de CEP!</Text>
      <Button
        title="Ver CEP estático"
        onPress={() => navigation.navigate('CEP')}
        color="#BEBEBE" 
      />
      <View style={{ height: 20 }} /> {}
      <Button
        title="Pesquisa de CEP"
        onPress={() => navigation.navigate('Pesquisa')}
        color="#BEBEBE" 
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#E6C9EB' }, 
          headerTitleStyle: { color: '#523552' }, 
          headerRight: () => (
            <Image
              source={iconPath}
              style={{ width: 30, height: 30, marginRight: 10 }}
            />
          ),
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Pesquisa" component={PesquisaCep} options={{ title: 'Pesquisa CEP' }} />
        <Stack.Screen name="CEP" component={PageCep} options={{ title: 'Meu CEP' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
