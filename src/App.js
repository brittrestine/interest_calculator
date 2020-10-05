import './App.css';

import { useDispatch, useSelector } from 'react-redux'

import CalculationForm from './Components/CalculationForm'
import React from 'react';
import { calculate } from './actions'

function App() {
  const dispatch = useDispatch()
  const total = useSelector(state => state.total)

  const submit = values => {
    const {principal, rate, years} = values

    dispatch(calculate(principal, rate, years))
  }

  return (
    <div className="App">
      <h1>Interest calculator</h1>

      <CalculationForm onSubmit={submit} />

      <h2>Total principal plus interest: {total}</h2>
    </div>
  );
}

export default App
