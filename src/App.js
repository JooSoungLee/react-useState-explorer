import {useState,useEffect} from 'react';
import './App.css';
import Box from "./component/Box"

function App() {
  let counter=0;
  // userState의 매개변수는 초기값
  const [counter2, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  const increase=() => {
    counter = counter + 1;
    setCounter(counter2+1);
    setValue(value + 2);
    console.log("counter는", counter, "counter2는", counter2);
  }

  useEffect(()=>{
    console.log("useEfect firee");
  }, []);


  // counter2나 value 값이 변경되면 감지됨 
  // 두 값이 모두 변경되어도 한 번만 실행된다.
  useEffect(()=>{
    console.log("useEfect2 firee", counter2, "value : ", value);
  }, [counter2,value]);


  useEffect(()=>{
    console.log("value값이 변경될때만 액션 하고싶어요", value);
  }, [value]);

  return (
    <div>
      {console.log("render")}
      <div><Box></Box></div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
