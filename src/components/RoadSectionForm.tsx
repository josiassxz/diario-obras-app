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
                  marginBottom: 10,
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
              marginTop: 20,
              gap: 10,
            }}
          >

            <View
              style={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 40,
                flexDirection: 'row',
                gap: 10,
              }}
            >
              {/* <KmInput />
              <KmInput /> */}

              <View
                style={{
                  width: '50%',
                  height: 100,
                  paddingBottom: 5,
                  marginTop: 20,
                }}
              >

                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    marginBottom: 10,
                    fontWeight: 'bold',
                  }}
                >
                  Km Inicial
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Km Inicial"
                  style={{
                    flex: 1,
                    borderWidth: 2,
                    borderColor: '#9f9f9f',
                    borderRadius: 8,
                    width: '100%',
                    paddingVertical: 10,
                    fontSize: 16,
                  }}
                />
              </View>

              <View
                style={{
                  width: '50%',
                  height: 100,
                  paddingBottom: 5,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: '#000',
                    marginBottom: 10,
                    fontWeight: 'bold',
                  }}
                >
                  Km Final
                </Text>
                <TextInput
                  keyboardType="numeric"
                  placeholder="Km Final"
                  style={{
                    flex: 1,
                    borderWidth: 2,
                    borderColor: '#9f9f9f',
                    borderRadius: 8,
                    width: '100%',
                    paddingVertical: 10,
                    fontSize: 16,
                  }}
                />
              </View>

            </View>

            <Input
              label='Extensão (km)'
              placeholder='Extensão (km)'
            />

            <TextArea
              label='Observações'
            />

            <TouchableOpacity
              style={{
                backgroundColor: '#d8e619',
                padding: 15,
                borderRadius: 10,
                alignItems: 'center',
                width: '100%',
              }}
              onPress={() => console.log('Botão pressionado')}
            >
              <Text style={{ color: '#000', fontSize: 16 }}>Salvar</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    </Modal>
  )
}
