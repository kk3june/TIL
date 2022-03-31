import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Authentification from './pages/Authentification/Authentification';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import Hoisting from './pages/Hoisting/Hoisting';
import Function from './pages/Function/Function';
import MachineLearning from './pages/MachineLearning/MachineLearning';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="authentification" element={<Authentification />} />
        <Route path="database" element={<Database />} />
        <Route path="storage" element={<Storage />} />
        <Route path="hoisting" element={<Hoisting />} />
        <Route path="function" element={<Function />} />
        <Route path="machine-learning" element={<MachineLearning />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
