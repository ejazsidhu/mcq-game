// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import questionService from './quizService'
import QuestionBox from './components/QuestionBox';
import Results from './components/Result';
class QuizBee extends Component {
    state={
        questionBank:[],
        score:0,
        responses:0

    };

    getQuestions=()=>{
        questionService().then(question=>{
            this.setState({
                questionBank:question
            });
        });
    }
    componentDidMount(){
        this.getQuestions();
    }

    computeResult=(answer,correct)=>{

        if(answer===correct){
            this.setState({
                score:this.state.score+1
            })
        }

        this.setState({
            responses:this.state.responses<5?this.state.responses+1:5
        })
        

    }
    render() { 
        return ( 
            <div className="container">
                <div className="title">Quiz Bee</div>
                {this.state.questionBank && this.state.responses<5?
                    (this.state.questionBank.map(({question,answers,correct,questionId})=>(<QuestionBox question={question} options={answers} key={questionId} selected={answer=>{this.computeResult(answer,correct)}}/>)))
                    :
                    (<Results score={this.state.score} playAgain={()=>{this.setState({score:0,responses:0},this.getQuestions())}}/>)
                }
            </div>
         );
    }
}
 
ReactDOM.render(<QuizBee/>,document.getElementById("root"))
