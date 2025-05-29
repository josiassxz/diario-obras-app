import { forwardRef } from 'react';
import { DimensionValue, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
  type: 'primary' | 'secondary' | 'tertiary';
  width?: DimensionValue;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, type, width, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.6} 
      {...touchableProps}
      style={{
        backgroundColor: type === 'primary' ? '#FFD200' : type === 'secondary' ? '#6C757D' : '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: width || '100%',
      }}
    >
      <Text style={{ 
        color: type === 'primary' ? '#000000' : type === 'secondary' ? '#FFFFFF' : '#000000',
        fontSize: 16,
        fontWeight: 'bold',
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFD200', // Indigo 500
    borderRadius: 28,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    height: 48 // Full width
  },
  buttonText: {
    color: '#FFFFFF', // White
    fontSize: 18,
    fontWeight: '600', // Semi-bold
    textAlign: 'center',
  },
});