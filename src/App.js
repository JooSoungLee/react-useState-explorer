import {useState} from 'react';
import './App.css';
import Box from "./component/Box"

function App() {
  let counter=0;
  // userState의 매개변수는 초기값
  const [counter2, setCounter] = useState(0);
  const increase=() => {
    counter = counter + 1;
    setCounter(counter2+1);
    console.log("counter는", counter, "counter2는", counter2);
  }

  return (
    <div>
      <Box name="리사"></Box> 
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
