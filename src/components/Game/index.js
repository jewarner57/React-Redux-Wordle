import Word from '../Word'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { submit, addLetter, deleteLetter } from '../../actions';
import AnswerToast from '../AnswerToast';
import Confetti from 'react-dom-confetti';

import './style.css';
import GithubLink from '../GithubLink';

function Game(props) {
  // get words from redux
  const { guesses, currentWord, gameOver, win, answer } = useSelector(state => state.game)
  const dispatch = useDispatch()
  const confetticonfig = {
    spread: 200,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.13,
    duration: 3000,
  };


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
      <AnswerToast answer={answer} visible={guesses.length >= 6} />
      {guesses.map((word, index) => {
        return <Word letters={word.split('')} submitted={true} key={`${word}${index}`} />
      })}

      <Confetti active={gameOver && win} config={confetticonfig} />
      {5 - guesses.length >= 0 ? <Word letters={currentWord.split('')} /> : ''}

      {5 - guesses.length > 0 ? [...Array(5 - guesses.length)].map((x, i) =>
        <Word letters={'     '.split('')} key={`${x}${i}`} />
      ) : ''}

      <div className='githublinkcontainer'>
        <GithubLink link="https://github.com/jewarner57/React-Redux-Wordle" />
      </div>
    </div>
  );
}

export default Game;
