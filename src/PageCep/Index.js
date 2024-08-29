import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PageCep() {
  const [MeuEnd, setMeuEnd] = useState({});

  useEffect(() => {
    getCep();
  }, []);

  async function getCep() {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/78555000/json/`);
      setMeuEnd(response.data);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Meu endereço é: {MeuEnd.logradouro || 'Carregando...'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BE91B5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#52355',
    fontSize: 18

  },
});
