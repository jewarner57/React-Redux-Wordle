export const SUBMIT_WORD = "SUBMIT_WORD"
export const CHANGE_WORD = "CHANGE_WORD"
export const RESTART = "RESTART"

export const changeWord = () => {
  return { type: CHANGE_WORD }
}

export const submit = () => {
  return { type: SUBMIT_WORD }
}

export const restart = () => {
  return { type: RESTART }
}