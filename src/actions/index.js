export const SUBMIT_WORD = "SUBMIT_WORD"
export const ADD_LETTER = "ADD_LETTER"
export const DELETE_LETTER = "DELETE_LETTER"
export const SET_ANSWER = "SET_ANSWER"

export const addLetter = (key) => {
  return { type: ADD_LETTER, payload: key }
}

export const deleteLetter = () => {
  return { type: DELETE_LETTER }
}

export const submit = () => {
  return { type: SUBMIT_WORD }
}

export const setAnswer = (answer) => {
  return { type: SET_ANSWER, payload: answer }
}