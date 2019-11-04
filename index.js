import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Calculator from './src/components/Calculator';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <h1>Calculator</h1>
    <Calculator />
    <div><p>Made with React by <a href="https://github.com/ofelipechan" target="_blank" id="githublink">Felipe Chan</a></p></div>
  </div>
  , document.getElementById('root'));

