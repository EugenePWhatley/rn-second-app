import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


type GameOverScreenProps = {
  rounds: number,
  userNumber: number | undefined,
  onRestart: Function
}

const GameOverScreen = (props: GameOverScreenProps) => {
  return (
    <View style={styles.screen}>
      <Text>GAME OVER</Text>
      <Text>Number of Rounds: {props.rounds}</Text>
      <Text>Number Was: {props.userNumber}</Text>
      <Button title='New Game' onPress={() => props.onRestart()}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default GameOverScreen