import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

export default function DetailsOperation({ navigation }) {
  const [cartaoSelecionado, setCartaoSelecionado] = useState('');
  const [tipoGasto, setTipoGasto] = useState('');
  const [tipoGastoOutro, setTipoGastoOutro] = useState('');
  const [nomeGasto, setNomeGasto] = useState('');
  const [data, setData] = useState('');

  const cartoes = [
    { id: '1', nomeCartao: 'Cartão 1:      ...3140' },
    { id: '2', nomeCartao: 'Cartão 2:      ...3240' },
    { id: '3', nomeCartao: 'Cartão 3:      ...3340' },
  ];

  const formatDate = (text) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = cleaned;
    if (cleaned.length >= 3 && cleaned.length <= 4) {
      formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2);
    } else if (cleaned.length > 4) {
      formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4) + '/' + cleaned.slice(4, 8);
    }
    return formatted;
  };

  const { valor } = useRoute().params || {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Descrição</Text>
        <Text style={styles.valor}>Valor: R${valor}</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Detalhes da operação</Text>

        {/* Nome do Gasto */}
        <View style={styles.field}>
          <Text style={styles.label}>Nome do Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Lanche no iFood"
            value={nomeGasto}
            onChangeText={setNomeGasto}
          />
        </View>

        {/* Tipo de Gasto */}
        <View style={styles.field}>
          <Text style={styles.label}>Tipo de Gasto</Text>
          <View style={styles.pickerWrapper}>
            {/* Ta feio mesmo e eu não seu estilizar */}
            <Picker
              selectedValue={tipoGasto}
              onValueChange={(itemValue) => setTipoGasto(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione um tipo" value="" />
              <Picker.Item label="Casa" value="Casa" />
              <Picker.Item label="Lazer" value="Lazer" />
              <Picker.Item label="Transporte" value="Transporte" />
              <Picker.Item label="Comida" value="Comida" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
          </View>
        </View>

        {tipoGasto === 'Outro' && (
          <View style={styles.field}>
            <Text style={styles.label}>Descreva o tipo de gasto</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Saúde, Educação..."
              value={tipoGastoOutro}
              onChangeText={setTipoGastoOutro}
            />
          </View>
        )}

        {/* Data */}
        <View style={styles.field}>
          <Text style={styles.label}>Data</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA"
            value={data}
            onChangeText={(text) => setData(formatDate(text))}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
      </ScrollView>

      {/* Botão */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Concluido', { nomeGasto, tipoGasto, tipoGastoOutro, data, valor })}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#F5F7FA',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  field: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F2F3F5',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  pickerWrapper: {
    backgroundColor: '#F2F3F5',
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#3478F6',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
