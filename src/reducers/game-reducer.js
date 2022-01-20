import {
  DELETE_LETTER, SUBMIT_WORD, RESTART, ADD_LETTER
} from '../actions'

const gameReducer = (state = { guesses: [], currentWord: '', answer: 'hello' }, action) => {
  let { guesses, currentWord } = state

  switch (action.type) {
    case RESTART:
      // Clear all guesses
      return state

    case ADD_LETTER:
      // Add a letter to the current word
      let key = action.payload
      let newWord = currentWord

      if (currentWord.length < 5) {
        newWord = `${currentWord}${key}`.toUpperCase()
      }

      return { ...state, currentWord: newWord }

    case DELETE_LETTER:
      // Delete a letter from the current word
      const deleteLetter = currentWord.slice(0, currentWord.length - 1)
      return { ...state, currentWord: deleteLetter }

    case SUBMIT_WORD:
      // Submit the current word
      const newGuesses = guesses
      let clearWord = currentWord

      if (!guesses.includes(currentWord) && currentWord.length === 5) {
        newGuesses.push(currentWord)
        clearWord = ''
      }

      return { ...state, guesses: newGuesses, currentWord: clearWord }

    default:
      return state
  }
}

export default gameReducer