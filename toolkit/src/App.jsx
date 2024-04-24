import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { selectCount, selectText } from './store/selector'
import { setMessage } from './store/slice/messageSlice';
import { increment } from './store/slice/countSlice';


function App() {

  const text = useSelector(selectText);
  const count = useSelector(selectCount);
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const {value} = e.target;
    dispatch(setMessage(value));
  }

  const handleClick = () => {
    dispatch(increment());
  }

  return (
    <>

      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleClick}>{count}</button>
  
    </>
  )
}

export default App
