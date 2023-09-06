export default function NextQuestion({ dispatch, answer, numQuestions }) {
  if (answer === null) return null;

  if (numQuestions > 15)
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );
  else
    return (
      <button className='btn btn-finish' onClick={dispatch({ type: 'finish' })}>
        Finish
      </button>
    );
}
