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
class QuizBee extends Component {
    state={
        questionBank:[]
    };
    
    render() { 
        return ( 
            <div className="container">
                <div className="title">Quiz Bee</div>
            </div>
         );
    }
}
 
ReactDOM.render(<QuizBee/>,document.getElementById("root"))
