import { Picker, PickerProps } from '@react-native-picker/picker';
import { useState } from 'react';
import { View } from 'react-native';

interface IProps {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
  items: { label: string; value: string }[];
}

export default function Select({ selectedValue, setSelectedValue, items }: IProps) {

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
        height: 55,
      }}
    >
      <Picker
        selectedValue={selectedValue}
        style={{
          height: '100%',
        }}
        onValueChange={(itemValue) => {
          console.log(`Valor selecionado: ${itemValue}`);
          setSelectedValue(itemValue)
        }}>
        <Picker.Item label="Selecione o trecho" value="" />
        {items.map(item => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
}