import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  style: any
}

const Input = (props: InputProps) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10
  }
})

export default Input;