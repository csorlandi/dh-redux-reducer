import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import { depositar, sacar } from './store/actions/conta.actions';

function App() {
  const dispatch = useDispatch();
  const conta = useSelector(state => {
    console.log({ state });
    // @ts-ignore
    return state.conta;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {conta}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <hr />
        <button type="button" onClick={() => {
          dispatch(depositar(Math.round(Math.random() * 1000)))
        }}>Depositar</button>
        <button type="button" onClick={() => {
          dispatch(sacar(Math.round(Math.random() * 1000)))
        }}>Sacar</button>
      </header>
    </div>
  );
}

export default App;
