import React from 'react';
const Results=({score,playAgain})=>{
  return (
    <div className="score-card">
      <div className="score">You scored {score} / 5 correct answers!</div>
      <button className="playBtn" onClick={()=>{playAgain()}}>playAgain</button>
    </div>

  )
}
export default Results;