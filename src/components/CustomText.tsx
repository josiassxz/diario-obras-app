import React from 'react'
import { Text } from 'react-native';

interface IProps extends React.ComponentProps<typeof Text> {
  children?: React.ReactNode;
  fontFamily?: string
}

export const CustomText = ({ children, fontFamily, ...rest }: IProps) => {
  return (
    <Text {...rest} style={{
      fontFamily: fontFamily || 'normal'
    }}>{children}</Text>
  )
}
