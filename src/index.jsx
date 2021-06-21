import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import reportWebVitals from './reportWebVitals';
import Tutorial from './Tutorial.png'
ReactDOM.render(
  <React.StrictMode>
    <div className = "background-image d-flex flex-column min-vh-100 justify-content-center align-items-center">
    <Menu/>
    <div className = "container">
    <div className = "my-5 text-center shadow p-3 mb-5 bg-body rounded">
      <img src= {Tutorial} alt="" />
    </div>
    </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();