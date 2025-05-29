import React from 'react'
import { Text, TextInput, View } from 'react-native'

interface IProps extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label: string;
}

export const KmInput = ({ label, ...rest }: IProps) => {
  return (

    <View
      style={{
        flexDirection: 'column',
        gap: 5,
      }}
    >

      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{label}</Text>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        width: '80%',
      }}>



        <TextInput
          keyboardType="numeric"
          {...rest}
          style={{
            borderWidth: 2,
            borderColor: '#9f9f9f',
            borderRadius: 8,
            width: 65,
            height: 50,
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        />

        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+</Text>

        <TextInput
          keyboardType="numeric"
          style={{
            borderWidth: 2,
            borderColor: '#9f9f9f',
            borderRadius: 8,
            width: 65,
            height: 50,
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        />
      </View>

    </View>

  );
};

