import { X } from 'lucide-react-native';
import React, { useState } from 'react'
import { Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Table } from './Table';
import { KmInput } from './KmInput';
import { TextInput } from 'react-native-gesture-handler';
import { Input } from './Input';
import { TextArea } from './TextArea';

interface IProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title: string;
}

export const RoadSectionForm = ({ visible, setVisible, title }: IProps) => {

  const [isEditing, setIsEditing] = useState(false);

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
        }}
      >
        <ScrollView
          style={{
            backgroundColor: 'white',
            borderRadius: 25,
            padding: 20,
            width: '95%',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 30,
            marginTop: 100,
            marginBottom: 30,
          }}
        >

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}
          >
            <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 'bold', color: '#000' }}>
              Editar - {title}
            </Text>

            <X size={28} color="#000" onPress={() => setVisible(false)} />
          </View>

        </ScrollView>
      </View>
    </Modal>
  )
}
