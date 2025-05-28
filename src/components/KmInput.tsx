import React from 'react'
import { Text, TextInput, View } from 'react-native'

export const KmInput = () => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      width: '50%',
    }}>
      <TextInput
        keyboardType="numeric"
        style={{
          flex: 1,
          borderWidth: 2,
          borderColor: '#9f9f9f',
          borderRadius: 8,
          paddingHorizontal: 5,
          paddingVertical: 6,
          fontSize: 16,
        }}
      />

      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>+</Text>

      <TextInput
        keyboardType="numeric"
        style={{
          flex: 1,
          borderWidth: 2,
          borderColor: '#9f9f9f',
          borderRadius: 8,
          paddingHorizontal: 5,
          paddingVertical: 6,
          fontSize: 16,
        }}
      />
    </View>
  );
};

