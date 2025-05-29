import React from 'react'
import { View } from 'react-native'
import { Table } from './Table'
import { Button } from './Button'
import { useAppStore } from '../store/store'
import { TableComponent } from './TableComponent'

export const OverviewRoadSection = () => {
  
  const { currentScreen, setCurrentScreen } = useAppStore()

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}
      >

        <TableComponent type='Em Andamento' />
        <TableComponent type='Concluídos'/>

        <Button
          title='Novo Registro'
          type='primary'
          onPress={() => setCurrentScreen('create')}
        />

      </View>
    </>
  )
}
