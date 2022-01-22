import {
  DELETE_LETTER, SUBMIT_WORD, SET_ANSWER, ADD_LETTER
} from '../actions'

import { defaultState } from '../utils'

const gameReducer = (state = defaultState(), action) => {
  let { guesses, currentWord, answer, gameOver } = state

  switch (action.type) {
    case SET_ANSWER:
      // Clear all guesses
      return { ...state, answer: action.payload }

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
      if (guesses.length >= 6) return { ...state, gameOver: true }
      // Submit the current word
      const newGuesses = guesses
      let clearWord = currentWord
      let complete = gameOver

      if (!guesses.includes(currentWord) && currentWord.length === 5) {
        complete = currentWord.toLowerCase() === answer.toLowerCase()
        newGuesses.push(currentWord)
        clearWord = ''
      }

      return { ...state, guesses: newGuesses, currentWord: clearWord, win: complete, gameOver: complete }

    default:
      return state
  }
}

export default gameReducer