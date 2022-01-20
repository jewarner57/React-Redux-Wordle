import './style.css';

function Letter(props) {
  const { val, color } = props

  return (
    <div className={`Letter letter-${color}`}>
      {val}
    </div>
  );
}

export default Letter;
