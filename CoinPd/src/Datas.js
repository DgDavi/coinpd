import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const Datas = ({ navigation }) => {
    const [selectedMonth, setSelectedMonth] = useState('Fevereiro');

    const routeAtual = useRoute().name;

    const data = [
        { id: '1', title: 'Lanche no ifood', description: 'Veja os dados do gasto' },
        { id: '2', title: 'Fatura do cartão', description: 'Veja os dados do gasto' },
        { id: '3', title: 'Conta de luz', description: 'Veja os dados do gasto' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.detailsButton}>
                <Text style={styles.detailsButtonText}>Detalhes</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setSelectedMonth('Janeiro')}>
                    <Text style={[styles.month, selectedMonth === 'Janeiro' && styles.selectedMonth]}>Janeiro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedMonth('Fevereiro')}>
                    <Text style={[styles.month, selectedMonth === 'Fevereiro' && styles.selectedMonth]}>Fevereiro</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedMonth('Março')}>
                    <Text style={[styles.month, selectedMonth === 'Março' && styles.selectedMonth]}>Março</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.list}
            />

            <View style={styles.bottomNav}>
                <TouchableOpacity 
                    style={styles.navButton}
                    onPress={() => navigation.navigate('TelaInicial')}
                    >
                    <MaterialIcons 
                    name="home" 
                    size={24} 
                    color={routeAtual === 'TelaInicial' ? '#4F8EF7' : '#777'}
                    />
                    <Text style={[styles.navText, { color: routeAtual === 'TelaInicial' ? '#48EF7' : '#777'}]}>Início</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.navButton}
                >
                    <MaterialIcons
                        name='calendar-today'
                        size={24}
                        color={routeAtual === 'Datas' ? '#4F8EF7' : '#777'}
                    />
                    <Text style={[ styles.navText, { color: routeAtual === 'Datas' ? '#4F8EF7': '#777'}]}>Histórico</Text>
                </TouchableOpacity>
            </View>


        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    month: {
        fontSize: 16,
        color: '#aaa',
    },
    selectedMonth: {
        color: '#4F63AC',
        fontWeight: 'bold',
    },
    list: {
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4F63AC',
    },
    cardDescription: {
        fontSize: 14,
        color: '#aaa',
        marginVertical: 5,
    },
    detailsButton: {
        backgroundColor: '#E8EDFF',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    detailsButtonText: {
        color: '#4F63AC',
        fontWeight: 'bold',
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

export default Datas;