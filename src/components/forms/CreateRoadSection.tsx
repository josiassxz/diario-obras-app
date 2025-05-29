import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import { Button } from '../Button'
import { useAppStore } from '../../store/store'
import { KmInput } from '../KmInput'

export const CreateRoadSection = () => {

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

        <View
          style={{
            width: '100%',
            paddingBottom: 5,
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            Em andamento
          </Text>
        </View>



      </View>

      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
        }}
      >

        <View
          style={{
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >

          <View
            style={{
              width: '50%',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
              marginLeft: 'auto',
            }}
          >

            <KmInput label='Km Inicial' />

          </View>

          <View
            style={{
              width: '50%',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
              marginRight: 'auto',
            }}
          >

            <KmInput label='Km Final' />

          </View>

        </View>


        <Input
          label='Extensão (km)'
          placeholder='Extensão (km)'
        />

        <TextArea
          label='Observações'
        />

        <Button
          title='Salvar'
          type='primary'
        />

        <Button
          title='Cancelar' 
          type='secondary'
          onPress={() => setCurrentScreen('view')}
        />

      </View>
    </>
  )
}
