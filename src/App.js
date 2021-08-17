 
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement} from './actions/index'

function App() {
  const counter = useSelector(state =>state.counter);
  const isLogged = useSelector(state =>state.isLogged)
  const dispatch =useDispatch();
  return (
    <div className="App">
    <h1>Counter {counter}</h1>


       {isLogged ? <h3>You're Loggedin </h3> : ''}
    <button onClick={() => dispatch(increment(2))}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>

    </div>
  );
}

export default App;  
