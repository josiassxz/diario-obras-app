import React from 'react'
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { X } from 'lucide-react-native'

interface IProps {
  visible: boolean
  setVisible: (visible: boolean) => void
  children: React.ReactNode
  title: string
  height?: number
  marginTop?: number
}

export const MainModal = ({ visible, setVisible, children, title, marginTop, height }: IProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={() => setVisible(false)}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 0,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 25,
            padding: 20,
            width: '90%',
            maxHeight: '80%', // <- evita que o modal passe da tela
            height: height || 'auto',
            marginTop: marginTop || 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 20,
          }}
        >

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingBottom: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>
              {title}
            </Text>

            <TouchableOpacity onPress={() => setVisible(false)} style={{ marginLeft: 'auto' }}>
              <X size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <ScrollView
            contentContainerStyle={{
              paddingVertical: 20,
              gap: 50,
            }}
            showsVerticalScrollIndicator={false}
          >


            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>

  )
}