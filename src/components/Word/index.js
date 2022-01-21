import Letter from '../Letter';
import './style.css';
import { useSelector } from 'react-redux';

function Word(props) {
  const answer = useSelector(state => state.game.answer)
  const { letters, submitted } = props

  const getLetterColor = (letter, index) => {
    const answerArr = answer.toLowerCase().split('')
    const testLetter = letter.toLowerCase()

    if (!submitted) return ''
    if (answerArr[index] === testLetter.toLowerCase()) return 'green'
    if (answerArr.includes(testLetter.toLowerCase())) return 'yellow'
    return 'gray'
  }

  return (
    <div className='word'>
      {letters.map((letter, index) => {
        return <Letter val={letter} color={getLetterColor(letter, index)} key={`${letter}${index}`} />
      })}
      {[...Array(5 - letters.length)].map((x, i) =>
        <Letter val={' '} color={''} key={`${x}${i}`} />
      )}
    </div>
  );
}

export default Word;
