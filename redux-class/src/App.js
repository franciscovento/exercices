import './App.css';
import { useSelector, useDispatch, useStore } from 'react-redux'
import {decrement, increment} from './redux/actions'

function App() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const store = useStore();

  console.log(store)

  return (
     <div className="App">
       <div>{counter}</div>
       <button onClick={()=>{dispatch(increment())}}>+</button>
       <button onClick={()=> {dispatch(decrement())}}>-</button>
     </div>
 
  );
}

export default App;
