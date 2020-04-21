import React, {useState} from 'react';
const QuestionBox=({question,options,selected})=>{
  const [answers,setAnswer]=useState(options);

  return (
    <div className="questionBox">
      <div className="question">{question}</div>
  {answers?answers.map((text,index)=>(<button className="answerBtn" key={index} onClick={()=>{
    setAnswer([text]);
    selected([text])
  }}>{text}</button>)):null}
    </div>
  )

}

export default QuestionBox;