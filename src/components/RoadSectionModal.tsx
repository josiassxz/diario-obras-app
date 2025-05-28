import { X } from 'lucide-react-native';
import React, { useState } from 'react'
import { Modal, Pressable, ScrollView, Text, View } from 'react-native'
import { Table } from './Table';

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  setFormVisible: (visible: boolean) => void;
  title: string;
}

export const RoadSectionModal = ({ visible, setVisible, title, setFormVisible }: IProps) => {

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
          backgroundColor: 'rgba(0,0,0,0.5)', // fundo escuro transparente
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 0,

        }}
      >
        <ScrollView
          style={{
            backgroundColor: 'white',
            borderRadius: 25,
            padding: 20,
            width: '95%',
            height: '80%',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 20,
            marginTop: 100,
            marginBottom: 30,
          }}
          contentContainerStyle={{ paddingBottom: 100 }}
        >

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}
          >
            <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold', color: '#000' }}>
              {title}
            </Text>

            <X size={28} color="#000" onPress={() => setVisible(false)} />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}
          >

            <Table type='Em Andamento' setFormVisible={setFormVisible} />

            <Table type='Concluídos' setFormVisible={setFormVisible} />

          </View>

        </ScrollView>
      </View>
    </Modal>
  )
}
