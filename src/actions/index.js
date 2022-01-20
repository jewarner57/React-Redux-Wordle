export const SUBMIT_WORD = "SUBMIT_WORD"
export const ADD_LETTER = "ADD_LETTER"
export const DELETE_LETTER = "DELETE_LETTER"
export const RESTART = "RESTART"

export const addLetter = (key) => {
  return { type: ADD_LETTER, payload: key }
}

export const deleteLetter = () => {
  return { type: DELETE_LETTER }
}

export const submit = () => {
  return { type: SUBMIT_WORD }
}

export const restart = () => {
  return { type: RESTART }
}