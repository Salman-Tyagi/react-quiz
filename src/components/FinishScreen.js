export default function FinishScreen({
  points,
  maxPossiblePoints,
  highScore,
  dispatch,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = '🎖';
  if (percentage <= 99 && percentage >= 81) emoji = '🥇';
  if (percentage <= 80 && percentage >= 61) emoji = '🥈';
  if (percentage <= 60 && percentage >= 41) emoji = '🥉';
  if (percentage <= 40) emoji = '🤦';

  return (
    <>
      <p className='result'>
        <span>{emoji}</span> You scored {points} out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore : {highScore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz!
      </button>
    </>
  );
}
