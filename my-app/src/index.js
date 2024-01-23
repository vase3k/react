import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//const elem = <h2>hello world!</h2>;

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
); */

const text = 'hello world';

const elem = (
  <div>
    <h2>{['asdas', 12, 231]}</h2>
    <button tabIndex={0}>Click</button>
    <button tabIndex="0">Click</button>
  </div>
);

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    elem
  )