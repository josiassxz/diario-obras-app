import { forwardRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      style={{
        backgroundColor: '#FFD200',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Text style={{ color: '#000', fontSize: 16 }}>
        Novo Registro
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