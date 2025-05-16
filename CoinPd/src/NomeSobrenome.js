import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TelaInicial from './TelaInicial';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Datas from './Datas';



export default function NomeSobrenome() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

const navigation = useNavigation();

return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        {/* Ícone de identidade usando react-native-vector-icons */}

        <View style={styles.iconCircle}>
          <Icon name="person" size={28} color="#999" />
        </View>

        {/* Título e subtítulo */}
        <Text style={styles.title}>Insira seus dados.</Text>
        <Text style={styles.subtitle}>Digite seu nome e sobrenome abaixo.</Text>

        {/* Input de nome */}
        <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            keyboardType="nome-adress"
            autoCapitalize="none"
            autoCorrect={false}
        />


        {/* Input de sobrenome */}
         <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            value={sobrenome}
            onChangeText={setSobrenome}
            keyboardType="sobrenome-adress"
            autoCapitalize="none"
            autoCorrect={false}
        />

        {/* Botão continuar */}
        <TouchableOpacity 
          style={styles.button}
            onPress={() => navigation.navigate('TelaInicial', {nome, sobrenome})}
        >
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  backButton: {
    color: '#005DFF',
    marginBottom: 20,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  atSymbol: {
    fontSize: 24,
    color: '#999',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#005DFF',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#005DFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
