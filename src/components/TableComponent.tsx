import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Table as RnTable, Row, Rows } from 'react-native-table-component';
import { Pen, Trash2 } from 'lucide-react-native';

const Icons = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Pen size={20} color="orange" />
      <Trash2 size={20} color="red" />
    </View>
  )
}

const tableData = {
  tableHead: ['Crypto Name', 'Value', 'Mkt Cap', 'Teste', 'Actions'],
  tableData: [
    ['Bitcoin', '$44,331', '$839,702,328,904', 'Teste 1', Icons()],
    ['Ethereum', '$3000.9', '$359,080,563,225', 'Teste 2', Icons()],
    ['Tether', '$1', '$79,470,820,738', 'Teste 3', Icons()],
    ['BNB', '$413.44', '$69,446,144,361', 'Teste 4', Icons()],
    ['USD Coin', '$1', '$53,633,260,549', 'Teste 5', Icons()],
  ],
};

export const TableComponent = () => {

  const [data, setData] = useState(tableData);
  return (
    <View style={styles.container}>
      <RnTable>
        <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
        <Rows data={data.tableData} textStyle={styles.text} />
      </RnTable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 10, justifyContent: 'center', backgroundColor: '#fff', borderWidth: 1, borderColor: '#cce', borderRadius: 8, width: '100%' },
  head: { height: 44 },
  headText: { fontSize:16, fontWeight: 'bold' , textAlign: 'center', color: 'black' },
  text: { margin: 6, fontSize: 16, fontWeight: 'semibold' , textAlign: 'center' },
})