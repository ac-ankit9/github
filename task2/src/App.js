import { useState, React} from 'react'
import './App.css';

function App() {
  const [count,setcount] = useState(0)
  function updateCount(){
    setcount(count + 1)
  }
  return (
    <>
      <h1>Button clicked {count}</h1>
      <button onClick={updateCount}>click me</button>
    </>
  );
}

export default App;
