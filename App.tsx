import React, { useState, Dispatch, SetStateAction } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber]: [number | undefined, Dispatch<SetStateAction<number | undefined>>] = useState();
  const [numberOfRounds, setNumberOfRounds]: [number, Dispatch<SetStateAction<number>>] = useState(0);

  const startGameHandler = (number: number) => {
    setUserNumber(number)
  }

  const gameOverHandler = (numberOfRounds: number) => {
    setNumberOfRounds(numberOfRounds)
  }

  const restartGameHandler = () => {
    setUserNumber(undefined)
    setNumberOfRounds(0)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && !numberOfRounds) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (numberOfRounds) {
    content = <GameOverScreen rounds={numberOfRounds} userNumber={userNumber} onRestart={restartGameHandler} />
  }


  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
