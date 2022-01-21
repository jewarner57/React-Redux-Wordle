import Word from '../Word'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { submit, addLetter, deleteLetter } from '../../actions';
import './style.css';

function Game(props) {
  // get words from redux
  const { guesses, currentWord, gameOver } = useSelector(state => state.game)
  const dispatch = useDispatch()

  function isAlphaChar(char) {
    return (/[a-zA-Z]/).test(char) && char.length === 1
  }

  useEffect(() => {
    function handleKeyUp(event) {
      if (!gameOver) {
        if (event.key === 'Backspace') {
          dispatch(deleteLetter())
        }

        if (event.key === 'Enter') {
          dispatch(submit())
        }

        // If it isnt a letter then ignore it
        if (isAlphaChar(event.key)) {
          dispatch(addLetter(event.key))
        }
      }
    }

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [dispatch, gameOver]);

  return (
    <div className='game'>
      {guesses.map((word, index) => {
        return <Word letters={word.split('')} submitted={true} key={`${word}${index}`} />
      })}

      {5 - guesses.length >= 0 ? <Word letters={currentWord.split('')} /> : ''}

      {5 - guesses.length > 0 ? [...Array(5 - guesses.length)].map((x, i) =>
        <Word letters={'     '.split('')} key={`${x}${i}`} />
      ) : ''}
    </div>
  );
}

export default Game;
