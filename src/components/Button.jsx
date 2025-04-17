import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import theme from '../theme/theme';

const Button = ({ title, variant = 'primary', style, textStyle, ...rest }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        style
      ]} 
      {...rest}
    >
      <Text 
        style={[
          styles.buttonText, 
          variant === 'primary' ? styles.primaryText : styles.secondaryText,
          textStyle
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.medium,
    padding: theme.spacing.medium,
    alignItems: 'center',
    marginBottom: theme.spacing.medium,
  },
  primaryButton: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  primaryText: {
    color: theme.colors.textDark,
  },
  secondaryText: {
    color: theme.colors.background,
  },
});

export default Button;