import React from 'react'
import { Text, View } from 'react-native'

interface IProps {
  id: string;
  title: string;
  onPress: () => void;
}

export const RoadSectionCard = ({ id, title, onPress }: IProps) => {
  return (
    <View
      style={{
        //centralizar itens dentro
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD200',
        height: 130,
        width: 130,
        borderRadius: 10,
      }}
      onTouchEnd={onPress}
    >
      <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
    </View>
  )
}
