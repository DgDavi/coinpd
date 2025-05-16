import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Datas from './Datas';


export default function TelaInicial({ route, navigation }) {
    const { nome } = route.params || {};
    const { sobrenome } = route.params || {};

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.name}>
                    {nome} {sobrenome}
                </Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Gastos da semana</Text>
                    <Text style={styles.cardSubtitle}>Último gasto há 2hrs</Text>
                    <View style={styles.cardDetails}>
                        <Text style={styles.cardDate}>15 de fevereiro</Text>
                        <Text style={styles.cardTime}>07:30AM - Agora</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Gasto</Text>
                </TouchableOpacity>

                <Text style={styles.recentTitle}>Gastos Recentes:</Text>
                <View style={styles.recentCard}>
                    <Text style={styles.recentText}>Compra de R$:50,00</Text>
                    <Text style={styles.recentDescription}>
                        Você adicionou esse gasto à compras.
                    </Text>
                    <Text style={styles.recentTime}>2hrs</Text>
                </View>
            </View>

            
            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('TelaInicial')}>
                    <View style={styles.footerIconContainer}>
                        <MaterialIcons name="home" size={24} color="#2563eb" />
                        <Text style={styles.footerLabel}>Início</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Datas')}>
                    <View style={styles.footerIconContainer}>
                        <MaterialIcons name="calendar-today" size={24} color="#94a3b8" />
                        <Text style={styles.footerLabel}>Histórico</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        
    },
    greeting: {
        fontSize: 18,
        color: '#000',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    card: {
        backgroundColor: '#4F8EF7',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    cardTitle: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#fff',
        marginTop: 5,
    },
    cardDetails: {
        marginTop: 10,
    },
    cardDate: {
        fontSize: 14,
        color: '#fff',
    },
    cardTime: {
        fontSize: 14,
        color: '#fff',
    },
    addButton: {
        backgroundColor: '#A0E7A0',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    addButtonText: {
        fontSize: 16,
        color: '#000',
    },
    recentTitle: {
        fontSize: 18,
        color: '#000',
        marginTop: 20,
    },
    recentCard: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
    },
    recentText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    recentDescription: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
    },
    recentTime: {
        fontSize: 14,
        color: '#000',
        marginTop: 5,
    },
    footerIcon: {
        fontSize: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 5, // para Android
        shadowColor: '#000', // para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    footerButton: {
        alignItems: 'center',
        justifyContent: 'center',},
        footerIconContainer: {
        backgroundColor: '#e0e7ff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerLabel: {
        color: '#2563eb',
        fontSize: 16,
        marginLeft: 8,
        fontWeight: '500',
    },

});