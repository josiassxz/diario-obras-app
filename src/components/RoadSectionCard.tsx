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
        backgroundColor: '#ffff0d',
        height: 130,
        width: 130,
        borderRadius: 10,
      }}
      onTouchEnd={onPress}
    >
      <Text style={{ textAlign: 'center' }}>{title}</Text>
    </View>
  )
}
