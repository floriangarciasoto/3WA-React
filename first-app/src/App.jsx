import './App.css'
import { useEffect, useState } from 'react';

const Counter = ({step,limit}) => {

  const [counter, setCounter] = useState(0);
  const [counterBinary, setCounterBinary] = useState(0);
  const [isRunning, setRunningState] = useState(false);
  const [counterIntervalID, setCounterIntervalID] = useState(null);
  const [cycles, setCycles] = useState(0);
  
  const handleStart = () => {
    setRunningState(true);

    if (counter === limit) setCounter(0);
    
    const id = setInterval(() => {
      setCounter((prevCounter) => prevCounter + step);
    }, 1000);

    setCounterIntervalID(id);
  };

  const handleStop = () => {
    setRunningState(false);
    clearInterval(counterIntervalID);
  };

  useEffect(() => {
    setCounterBinary(counter.toString(2));
    if (counter > limit) {
      // clearInterval(counterIntervalID);
      // setRunningState(false);

      setCounter(0);
      setCycles(cycles + 1);
    }
  },[counter]);
  
return (
  <>
      <fieldset>
        <legend>Comtpeur qui s'incrémente de {step}, limité à {limit}</legend>
        <div>Compteur : {counter}</div>
        <div>Compteur en binaire : {counterBinary}</div>
        <div>Cycles : {cycles}</div>
        <button onClick={handleStart} disabled={isRunning}>START</button>
        <button onClick={handleStop} disabled={!isRunning}>STOP</button>
      </fieldset>
  </>
)
};

function App() {

  return (
    <>
    
      <Counter step={1} limit={10}/>
      <Counter step={2} limit={20}/>

    </>
  )
}

export default App
