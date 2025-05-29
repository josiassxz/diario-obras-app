import { Pen, Trash2 } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Table as RnTable, Row, Rows } from 'react-native-table-component';
import { useAppStore } from '../store/store';
import { IRoadSection } from '../types';

interface IProps {
  type: 'Em Andamento' | 'Concluídos';
}

export const Table = ({ type }: IProps) => {
  const data: IRoadSection[] = [
    { id: 1, kmInicial: 1, kmFinal: 10, extensao: 9, observacao: 'Teste 1', status: type },
    { id: 2, kmInicial: 11, kmFinal: 20, extensao: 9, observacao: 'Teste 2', status: type },
    { id: 3, kmInicial: 21, kmFinal: 30, extensao: 9, observacao: 'Teste 3', status: type },
    { id: 4, kmInicial: 31, kmFinal: 40, extensao: 9, observacao: 'Teste 4', status: type }
  ];

  const { currentScreen, setCurrentScreen, setRoadSectionToEdit } = useAppStore()

  const breakWords = (text: string) => text.split(' ').join('\n');

  const Header = () => (
    <View style={{ flexDirection: 'row', width: '100%', padding: 10 }}>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{breakWords('Km Inicial')}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{breakWords('Km Final')}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{breakWords('Extensão')}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{breakWords('Observação')}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}></Text>
      </View>
    </View>
  );


  const renderItem = ({ item }: { item: IRoadSection }) => (
    <View style={{
      flexDirection: 'row',
      width: '100%',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc'
    }}>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.kmInicial}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.kmFinal}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.extensao}</Text>
      </View>
      <View style={{ width: '20%' }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>{item.observacao}</Text>
      </View>
      <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {
          setRoadSectionToEdit(item);
          setCurrentScreen('edit')
        }}>
          <Pen size={20} color="#007bff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Excluir', item)}>
          <Trash2 size={20} color="#dc3545" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View
      style={{
        borderWidth: 3,
        borderColor: '#ccc',
        borderRadius: 15,
        width: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f0f0f0',
          paddingHorizontal: 10,
          paddingVertical: 18,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomWidth: 3,
          borderBottomColor: '#ccc',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
          {type}
        </Text>

      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.kmInicial.toString()}
        ListHeaderComponent={Header}
      />
    </View>
  );
};