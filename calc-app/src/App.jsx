import './App.css'
import Error from './component/Error'
import Screen from './component/Screen'
import Pad from './component/Pad'
import { useState, useEffect } from 'react'
import { useCalcContext } from './context/useCalcContext'

function App() {

  const {state} = useCalcContext();
  const [message, setMessage] = useState('');

  useEffect(() => {
    if(state.operations >= 10) {
      setMessage('Vous avez obtenu 10 résultats.')
    }
  }, [state.operations])

  return (
    <>
      {
        message !== '' && <div>{message}</div>
      }
      <Error />
      <Screen />
      <Pad />
    </>
  )
}

export default App
