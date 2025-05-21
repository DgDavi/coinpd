import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Concluido({ navigation, route }) {
    const { nomeGasto, valor, data } = route.params || {};

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.iconCircle}>
                    <Ionicons name="checkmark" size={40} color="#fff" />
                </View>
                <Text style={styles.title}>Concluído</Text>
                <Text style={styles.amount}>R${valor}</Text>
                <Text style={styles.subtitle}>{nomeGasto} compra realizada na data de {data}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('TelaInicial')}
                >
                    <Text style={styles.buttonText}>Concluir</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F8FB',
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
        marginTop: 60,
    },
    iconCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4CB050',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 18,
        color: '#222',
        marginBottom: 4,
        marginTop: 8,
        fontWeight: '400',
    },
    amount: {
        fontSize: 32,
        color: '#222',
        fontWeight: '500',
        marginBottom: 16,
    },
    subtitle: {
        fontSize: 13,
        color: '#888',
        marginTop: 8,
    },
    footer: {
        padding: 24,
        backgroundColor: '#F6F8FB',
    },
    button: {
        backgroundColor: '#3B6EF6',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '400',
    },
});