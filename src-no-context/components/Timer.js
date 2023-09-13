import { useEffect } from 'react';

export default function Timer({ secondsRemaining, dispatch, highScore }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  //   useEffect(() => {
  //     const id = setInterval(() => dispatch({ type: 'tick' }), 1000);
  //     return () => clearInterval(id);
  //   }, [dispatch]);

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);

      //   CLEAN-UP FUNCTION
      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  return (
    <div className='timer'>
      {mins < 10 && 0}
      {mins}:{seconds < 10 && 0}
      {seconds}
    </div>
  );
}
