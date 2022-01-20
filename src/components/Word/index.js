import Letter from '../Letter';
import './style.css';

function Word(props) {
  const { letters } = props

  return (
    <div className={`Word`}>
      {letters.map((letter) => {
        return <Letter val={letter.char} color={letter.color} />
      })}
    </div>
  );
}

export default Word;
