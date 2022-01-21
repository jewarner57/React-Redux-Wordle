import wordlewords from '../wordlewords.js'

// Gets a random word from the wordle list
export const getRandomWord = () => {
  const allWords = wordlewords.split('\n')
  const answer = allWords[Math.ceil(Math.random() * allWords.length)]
  console.log(answer)
  return answer
}

const answer = getRandomWord()
// Returns the default starting state
export const defaultState = () => {
  return { guesses: [], currentWord: '', answer: answer, gameOver: false }
}