import './App.css';

import {useDispatch, useSelector} from 'react-redux'

import React from 'react';
import { calculate } from './actions'

function App() {
  const dispatch = useDispatch()
  const total = useSelector(state => state.total)

  return (
    <div className="App">
      <h1>total: {total}</h1>


        <div>
          <button onClick={() => dispatch(calculate(5000, 2.5, 5))}>submit</button>
        </div>


    </div>
  );
}

export default App;
// </form>

      // <form>
      //   <div>
      //     <label for="principal">Principal</label>
      //     <input name="principal" placeholder="5000" type="number"/>
      //   </div>
      //
      //   <div>
      //     <label for="rate">Rate</label>
      //     <input name="rate" placeholder="2.5" type="number"/>
      //   </div>
      //
      //   <div>
      //     <label for="years">Years</label>
      //     <input name="years" placeholder="5" type="number"/>
      //   </div>
