import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface IProps extends React.ComponentProps<typeof TextInput> {
  label: string;
  placeholder?: string;
}

export const TextArea = ({ label, placeholder = '', ...props }: IProps) => {
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
        placeholder={placeholder}
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        {...props}
        style={{
          borderWidth: 2,
          borderColor: '#9f9f9f',
          borderRadius: 8,
          width: '100%',
          padding: 10,
          fontSize: 16,
          height: 120,
          paddingVertical: 10,
          paddingLeft: 10,
          fontWeight: 'bold',
        }}
      />
    </View>
  );
};
