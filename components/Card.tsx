import React from 'react';
import { View, StyleSheet } from 'react-native'

interface CardProps {
  style: any
  children: any
}

const Card = (props: CardProps) => {

  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 2
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;