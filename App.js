import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Importações corretas das telas
import MenuScreen from './components/menu';
import AlfabetoScreen from './components/alfabetobraille';
import NumerosScreen from './components/digitenumero';
import PalavrasScreen from './components/palavrasbraille';
import ConfiguracoesScreen from './components/configuracoes';
import SobreScreen from './components/sobreapp';
import PalavrasBraille from './components/palavrasbraille'; 
import DigitarPalavra from './components/digitepalavra'; 
import HistoricoPalavras from './components/historicopalavras'; 
import ExercicioLeitura from './components/exerciciosleitura'; 

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack de Palavras
function PalavrasStack() {
  return (
    <Stack.Navigator initialRouteName="PalavrasBraille">
      <Stack.Screen name="PalavrasBraille" component={PalavrasBraille} />
      <Stack.Screen name="DigitarPalavra" component={DigitarPalavra} />
      <Stack.Screen name="HistoricoPalavras" component={HistoricoPalavras} />
    </Stack.Navigator>
  );
}

// Stack de Exercícios
function ExerciciosStack() {
  return (
    <Stack.Navigator initialRouteName="ExerciciosBraille">
      <Stack.Screen name="ExerciciosBraille" component={ExerciciosScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExercicioLeitura" component={ExercicioLeitura} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#a9c2e7', paddingBottom: 5, height: 70 },
          tabBarLabelStyle: { fontSize: 20, fontWeight: 'bold' },
          headerShown: false,
        }}
      >
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Alfabeto" component={AlfabetoScreen} />
        <Tab.Screen name="Números" component={NumerosScreen} />
        <Tab.Screen name="Palavras" component={PalavrasStack} />
        <Tab.Screen name="Exercícios" component={ExerciciosStack} />
        <Tab.Screen name="Configurações" component={ConfiguracoesScreen} />
        <Tab.Screen name="Sobre" component={SobreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



