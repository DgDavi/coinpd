import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Datas = ({ navigation }) => {
    const [selectedMonth, setSelectedMonth] = useState('Fevereiro');

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
    iconButton: {
        alignItems: 'center',
    },
    iconText: {
        fontSize: 24,
    },
    footerButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
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

export default Datas;