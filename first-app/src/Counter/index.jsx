import propTypes from 'prop-types'
import { useEffect, useState, useRef } from 'react';
import useCounterReducer from './reducer';

function Counter({step,limit}) {

  // const [counter, setCounter] = useState(0);
  // const [counterBinary, setCounterBinary] = useState(0);
  // const [isRunning, setRunningState] = useState(false);
  // const counterIntervalID = useRef(null);
  // const [cycles, setCycles] = useState(0);

  const [state, dispatch] = useCounterReducer();
  
  const handlePlus = () => {
    dispatch({type: 'increment',payload: step})
  }

  const handleMinus = () => {
    dispatch({type: 'decrement',payload: step})
  }

  const handleReset = () => {
    dispatch({type: 'reset'})
  }

  // const handleStart = () => {
  //   setRunningState(true);

  //   if (counter === limit) setCounter(0);
    
  //   const id = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + step);
  //   }, 1000);

  //   counterIntervalID.current = id;
  // };

  // const handleStop = () => {
  //   setRunningState(false);
  //   clearInterval(counterIntervalID.current);
  // };

  useEffect(() => {
    // setCounterBinary(counter.toString(2));
    if (state.counter > limit) {
      // clearInterval(counterIntervalID);
      // setRunningState(false);

      dispatch({type: 'addCycle'})
    }
  },[state.counter]);
  
  return (
    <>
        <fieldset>
          <legend>Comtpeur qui s'incrémente de {step}, limité à {limit}</legend>
          <div>Compteur : {state.counter}</div>
          {/* <div>Compteur en binaire : {counterBinary}</div> */}
          <div>Cycles : {state.cycle}</div>
          <button onClick={handleMinus}>-1</button>
          <button onClick={handlePlus}>+1</button>
          <button onClick={handleReset}>RESET</button>
          {/* <button onClick={handleStart} disabled={isRunning}>START</button> */}
          {/* <button onClick={handleStop} disabled={!isRunning}>STOP</button> */}
        </fieldset>
    </>
  )
}

Counter.propTypes = {
    step: propTypes.number,
    limit: propTypes.number
}

export default Counter
