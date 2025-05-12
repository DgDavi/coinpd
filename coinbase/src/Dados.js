import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EmailAdress() {
  const [email, setEmail] = useState('');

const navigation = useNavigation();

return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        {/* Ícone ou símbolo de email */}
        <View style={styles.iconCircle}>
            <Text style={styles.atSymbol}>@</Text>
        </View>

        {/* Título e subtítulo */}
        <Text style={styles.title}>Insira seus dados.</Text>
        <Text style={styles.subtitle}>Digite seu nome abaixo.</Text>

        {/* Input de nome */}
        <TextInput
            style={styles.input}
            placeholder="Insira seu nome"
            value={email}
            onChangeText={setEmail}
            keyboardType="nome-adress"
            autoCapitalize="none"
            autoCorrect={false}
        />

        <Text style={styles.subtitle}>Digite seu nome abaixo.</Text>

        {/* Input de sobrenome */}
         <TextInput
            style={styles.input}
            placeholder="Insira seu sobrenome"
            value={email}
            onChangeText={setEmail}
            keyboardType="sobrenome-adress"
            autoCapitalize="none"
            autoCorrect={false}
        />

        {/* Botão continuar */}
        <TouchableOpacity 
        style={styles.button}>
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
