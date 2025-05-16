import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Bu } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

            {/* Parte azul superior */}
            <View style={styles.topSection}>

            </View>

            {/* Parte branca inferior */}
            <View style={styles.bottomSection}>
                <View style={styles.textContainer}>
                    <Text style={styles.welcomeText}>Bem vindo ao CoinPd</Text>
                    <Text style={styles.subtitle}>Aplicativo para regular suas finanças</Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('EmailAdress')}
                >
                    <Text style={styles.buttonText}>Vamos Lá</Text>
                </TouchableOpacity>
                </View>

        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topSection: {
    flex: 1,
    backgroundColor: '#005DFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: 'space-between',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 40,
  },
  
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#005DFF',
  },
  button: {
    backgroundColor: '#005DFF',
    paddingVertical: 14,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

