import './style.css'

function AnswerToast(props) {
  const { answer, visible } = props

  return (
    <>
      {visible &&
        <div className="AnswerToast">
          {answer}
        </div>
      }
    </>
  );
}

export default AnswerToast;
