import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NomeSobrenome from './NomeSobrenome';


export default function AddSenha() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        {/* Ícone de cadeado */}
        <View style={styles.iconCircle}>
          <Ionicons name="lock-closed-outline" size={28} color="#999" />
        </View>

        {/* Título */}
        <Text style={styles.title}>Criar senha</Text>

        {/* Campo de senha */}
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#666" />
          </TouchableOpacity>
        </View>

        {/* Regras da senha */}
        <View style={styles.rules}>
            <Text style={styles.rule}>Sua senha deve ter:</Text>
          <Text style={styles.rule}>✓ 8-32 caracteres</Text>
          <Text style={styles.rule}>✓ 1 letra minúscula (a-z)</Text>
          <Text style={styles.rule}>✓ 1 letra maiúscula (A-Z)</Text>
          <Text style={styles.rule}>✓ 1 número</Text>
          <Text style={styles.rule}>✓ 1 caractere especial e.g. ! @ # $ %</Text>
        </View>
      </ScrollView>

      {/* Botão fixo */}
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('NomeSobrenome')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 100,
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  passwordInputContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#005DFF',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    paddingRight: 40,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 14,
  },
  rules: {
    marginTop: 10,
  },
  rule: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  fixedButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 30 : 20,
    backgroundColor: '#fff',
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
