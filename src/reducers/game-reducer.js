import {
  CHANGE_WORD, SUBMIT_WORD, RESTART
} from '../actions'

const gameReducer = (state = { guesses: [], currentWord: '' }, action) => {
  const { guessedWords, currentWord } = state

  switch (action.type) {
    case RESTART:
      // Clear all guesses
      return state

    case CHANGE_WORD:
      // Make a change to the current word
      return state

    case SUBMIT_WORD:
      // Submit the current word
      return state

    default:
      return state
  }
}

export default gameReducer