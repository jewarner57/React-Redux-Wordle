import Word from '../Word'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { submit, addLetter, restart, deleteLetter } from '../../actions';
import './style.css';

function Game(props) {
  // get words from redux
  const guesses = useSelector(state => state.game.guesses)
  const currentWord = useSelector(state => state.game.currentWord)
  const dispatch = useDispatch()

  function isAlphaChar(char) {
    return (/[a-zA-Z]/).test(char) && char.length === 1
  }

  useEffect(() => {
    function handleKeyUp(event) {
      if (event.key === 'Backspace') {
        dispatch(deleteLetter())
      }

      if (event.key === 'Enter') {
        dispatch(submit())
      }

      // If it isnt a letter then ignore it
      if (isAlphaChar(event.key)) {
        dispatch(addLetter(event.key))
        console.log(event.key)
      }
    }

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [dispatch]);

  return (
    <div className='game'>
      {guesses.map((word, index) => {
        return <Word letters={word.split('')} submitted={true} key={`${word}${index}`} />
      })}

      <Word letters={currentWord.split('')} />

      {[...Array(5 - guesses.length)].map((x, i) =>
        <Word letters={'     '.split('')} key={`${x}${i}`} />
      )}


    </div>
  );
}

export default Game;
