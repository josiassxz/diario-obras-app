import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Table as RnTable, Row, Rows } from 'react-native-table-component';
import { Expand, Eye, Pen, PlusCircle, Trash2 } from 'lucide-react-native';
import { IRoadSection } from '../types';
import { MainModal } from './MainModal';
import { Button } from './Button';
import { useAppStore } from '../store/store';

interface IIconsProps {
  isDeleting: boolean;
  setIsDeleting: (value: boolean) => void;
  setItemToDelete: (id: number | null) => void;
  item: IRoadSection
  statusRoadSection?: 'Em Andamento' | 'Concluídos';
}


const Icons = ({ isDeleting, setIsDeleting, setItemToDelete, item, statusRoadSection }: IIconsProps) => {

  const { setCurrentScreen, setRoadSectionToEdit } = useAppStore();

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      {
        statusRoadSection === 'Em Andamento' ?
          (
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', gap: 10 }}>
              <TouchableOpacity onPress={() => {
                setRoadSectionToEdit(item);
                setCurrentScreen('edit')
              }}>
                <Pen size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setIsDeleting(true);
                setItemToDelete(item.id);
              }}>
                <Trash2 size={20} color="#dc3545" />
              </TouchableOpacity>
            </View>
          )
          :
          (
            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {
                setRoadSectionToEdit(item);
                setCurrentScreen('view')
              }}>
                <PlusCircle size={20} color="blue" />
              </TouchableOpacity>
            </View>
          )
      }
    </View>
  )
}

const items: IRoadSection[] = [
  { id: 1, kmInicial: 1, kmFinal: 10, extensao: 9, observacao: 'Teste 1', status: 'Em Andamento' },
  { id: 2, kmInicial: 11, kmFinal: 20, extensao: 9, observacao: 'Teste 2', status: 'Em Andamento' },
  { id: 3, kmInicial: 21, kmFinal: 30, extensao: 9, observacao: 'Teste 3', status: 'Em Andamento' },
  { id: 4, kmInicial: 31, kmFinal: 40, extensao: 9, observacao: 'Teste 4', status: 'Em Andamento' },
  { id: 5, kmInicial: 41, kmFinal: 50, extensao: 9, observacao: 'Teste 5', status: 'Em Andamento' },
];

interface IProps {
  type: 'Em Andamento' | 'Concluídos';
}

export const TableComponent = ({ type }: IProps) => {

  const [isDeleting, setIsDeleting] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);
  const [roadSectionToEdit, setRoadSectionToEdit] = useState<IRoadSection | null>(null);
  const [currentScreen, setCurrentScreen] = useState<string>('list');

  const tableData = {
    tableHead: ['Km Inicial', 'Km Final', 'Extensão', 'Observação', ''],
    tableData: [
      ...items.map(item => [
        item.kmInicial.toString(),
        item.kmFinal.toString(),
        item.extensao.toString(),
        item.observacao,
        <Icons
          key={item.id}
          isDeleting={false}
          setIsDeleting={setIsDeleting}
          setItemToDelete={setItemToDelete}
          item={item}
          statusRoadSection={type}
        />
      ]),
    ],
  };

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
          width: '100%',
        }}
      >

        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>
          {type}
        </Text>

      </View>

      {/* @ts-ignore */}
      <RnTable>

        {/* @ts-ignore */}
        <Row
          data={tableData.tableHead}
          style={styles.head}
          textStyle={styles.headText}
        />

        {/* @ts-ignore */}
        <Rows
          data={tableData.tableData}
          textStyle={styles.text}
          style={{ borderBottomWidth: 1, borderBottomColor: '#ccc' }}
        />

      </RnTable>

      <MainModal visible={isDeleting} setVisible={setIsDeleting} title="Tem certeza que deseja excluir o registro?">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            gap: 10,
          }}
        >

          <Button title="Cancelar" onPress={() => setIsDeleting(false)} type='secondary' width={'50%'} />

          <Button
            title="Excluir"
            onPress={() => {
              if (itemToDelete) {
                console.log('Excluir item', itemToDelete);
              }
              setIsDeleting(false);
            }}
            type='primary'
            width={'50%'}
          />

        </View>
      </MainModal>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#cce',
    borderRadius: 8,
    width: '100%'
  },
  head: {
    height: 44,
    marginTop: 10,
  },
  headText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black'
  },
  text: {
    margin: 6,
    fontSize: 16,
    fontWeight: 'semibold',
    textAlign: 'center'
  },
  cell: {
    marginBottom: 10, // Margem inferior para cada célula
    paddingVertical: 5, // Espaçamento interno
  },
  iconsContainer: {
    marginBottom: 10, // Margem inferior para o container dos ícones
  },
});