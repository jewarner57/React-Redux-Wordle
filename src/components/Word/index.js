import Letter from '../Letter';
import './style.css';

function Word(props) {
  const { letters } = props

  return (
    <div className='word'>
      {letters.map((letter, index) => {
        return <Letter val={letter} color={''} key={`${letter}${index}`} />
      })}
      {[...Array(5 - letters.length)].map((x, i) =>
        <Letter val={' '} color={''} key={`${x}${i}`} />
      )}
    </div>
  );
}

export default Word;
