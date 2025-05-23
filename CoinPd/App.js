import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/Home.js';
import EmailAdress from './src/EmailAdress';
import AddSenha from './src/AddSenha';
import NomeSobrenome from './src/NomeSobrenome.js';
import TelaInicial from './src/TelaInicial.js';
import Datas from './src/Datas.js';
import AdicionarGasto from './src/AdicionarGasto.js';
import DetalhesDoGasto from './src/DetalhesDoGasto.js';
import Concluido from './src/Concluido.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={Home} 
        options={{
          title: 'CoinBase',
        }}
        />
        <Stack.Screen name="EmailAdress" 
        component={EmailAdress} 
        options={{
          title: 'Voltar',
        }}
        />
        <Stack.Screen name="AddSenha"
        component={AddSenha}
        options={{
          title: 'Voltar',
        }}
        />
        <Stack.Screen name="NomeSobrenome"
        component={NomeSobrenome}
        />
        <Stack.Screen name="TelaInicial"
        component={TelaInicial}
        options={{
          title: 'Voltar',
        }}
        />
        <Stack.Screen name="Datas"
        component={Datas}
        options={{
          title: 'Voltar',
        }}
        />
        <Stack.Screen name="AdicionarGasto"
        component={AdicionarGasto}
        options={{
          title: 'Voltar',
        }}
        />
        <Stack.Screen name="DetalhesDoGasto"
        component={DetalhesDoGasto}
        options={{
          title: 'Voltar',
        }}  
        />
        <Stack.Screen name="Concluido"  
        component={Concluido}
        options={{
          title: 'Voltar',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}