import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';


export default function TelaInicial({ route, navigation }) {
    const { nome } = route.params || {};
    const { sobrenome } = route.params || {};
    const routeAtual = useRoute().name;

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

                <TouchableOpacity 
                    style={styles.addButton}
                    onPress={() => navigation.navigate('AdicionarGasto')}
                    >
                    <Text style={styles.addButtonText}>Adicionar Gasto</Text>
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

            {/* Barra de navegação inferior */}
            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navButton}>
                    <MaterialIcons name="home" size={24} color="#4F8EF7" />
                    <Text style={styles.navText}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.navButton}
                    onPress={() => navigation.navigate('Datas')}
                >
                    <MaterialIcons
                        name='calendar-today'
                        size={24}
                        color={routeAtual === 'Datas' ? '#4F8EF7' : '#777'}
                    />
                    <Text style={[ styles.navText, { color: routeAtual === 'Datas' ? '#4F8Ef7': '#777'}]}>Histórico</Text>
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
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
        paddingVertical: 10,
    },
    navButton: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        color: '#4F8EF7',
        marginTop: 2,
    },
});
