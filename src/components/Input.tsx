import React from 'react'
import { Text, TextInput, View } from 'react-native';

interface IProps extends React.ComponentProps<typeof TextInput> {
  label: string;
  placeholder?: string;
  
}

export const Input = ({ label, placeholder = '', ...props }: IProps) => {
  return (
    <View
      style={{
        width: '100%',
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
        {label}
      </Text>
      <TextInput
        keyboardType="numeric"
        placeholder={placeholder}
        {...props}
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
  )
}
