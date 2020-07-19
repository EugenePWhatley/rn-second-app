import React, {
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  MutableRefObject,
  useEffect
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert
} from 'react-native'
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card'

type GameScreenProps = {
  userChoice: number
  onGameOver: Function
}

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min) + min)
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNumber;
}

const GameScreen = (props: GameScreenProps) => {
  const { userChoice, onGameOver } = props;

  const [currentGuess, setCurrentGuess]: [number, Dispatch<SetStateAction<number>>] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
  const [rounds, setRounds]: [number, Dispatch<SetStateAction<number>>] = useState(0)

  const currentLow: MutableRefObject<number> = useRef(1);
  const currentHigh: MutableRefObject<number> = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds)
    }
  }, [currentGuess, userChoice, onGameOver]);

  const lowerGuessHandler = () => {
    if (currentGuess < userChoice) {
      Alert.alert(
        'You\'re Lying!',
        'Your number is not lower...',
        [{ text: 'Sorry', style: 'cancel' }]
      )
      return
    }
    currentHigh.current = currentGuess;
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber)
    setRounds(currentRound => currentRound + 1)
  }

  const greaterGuessHandler = () => {
    if (currentGuess > userChoice) {
      Alert.alert(
        'You\'re Lying!',
        'Your number is not higher...',
        [{ text: 'Sorry', style: 'cancel' }]
      )
      return
    }
    currentLow.current = currentGuess;
    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
    setCurrentGuess(nextNumber)
    setRounds(currentRound => currentRound + 1)
  }

  return (
    <View style={styles.screen}>
      <Text>Opponent Guessed</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContiner}>
        <Button title='LOWER' onPress={lowerGuessHandler}></Button>
        <Button title='GREATER' onPress={greaterGuessHandler}></Button>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContiner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})

export default GameScreen;