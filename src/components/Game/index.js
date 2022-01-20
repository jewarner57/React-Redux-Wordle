import Word from '../Word'
import './style.css';

function Game(props) {
  // get words from redux
  const words = []

  return (
    <div className={`Word`}>
      {words.map((word) => {
        return <Word letters={word} />
      })}
    </div>
  );
}

export default Game;
