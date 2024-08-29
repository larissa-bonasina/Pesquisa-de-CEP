import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function PesquisaCep() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});
  const [loading, setLoading] = useState(false);

  async function buscarCep() {
    if (cep.length !== 8) {
      setEndereco({ error: 'O CEP deve ter 8 dígitos' });
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setEndereco({ error: 'CEP não encontrado' });
      } else {
        setEndereco(response.data);
      }
    } catch (error) {
      setEndereco({ error: 'Erro ao buscar CEP' });
    }
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite o CEP que queira pesquisar!</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        onChangeText={setCep}
        value={cep}
        maxLength={8}
      />
      <Button title="Buscar" onPress={buscarCep} color="#BEBEBE" />
      {loading && <Text style={styles.text}>Carregando...</Text>}
      {endereco.error ? (
        <Text style={styles.text}>{endereco.error}</Text>
      ) : (
        <View>
          {endereco.logradouro && <Text style={styles.text}>Logradouro: {endereco.logradouro}</Text>}
          {endereco.bairro && <Text style={styles.text}>Bairro: {endereco.bairro}</Text>}
          {endereco.localidade && <Text style={styles.text}>Cidade: {endereco.localidade}</Text>}
          {endereco.uf && <Text style={styles.text}>Estado: {endereco.uf}</Text>}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE91B5', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    color: '#52355', 
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#694963', 
    borderWidth: 1,
    marginBottom: 16,
    width: '80%',
    paddingHorizontal: 10,
    color: '#52355', 
  },
  text: {
    color: '#52355', 
    fontSize: 18,
    marginTop: 10,
  },
});
