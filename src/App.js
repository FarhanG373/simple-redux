import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {IncNumber, DecNumber} from './actions/index'


function App() {
  const MyState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="quantity">
        <button onClick={() => dispatch(IncNumber())}>Increment</button>
        <input type="text" value={MyState}/>
        <button onClick={() => dispatch(DecNumber())}>Decrement</button>
      </div>
      
    </div>
  );
}

export default App;
