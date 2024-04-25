import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainTemplate from './component/template/MainTemplate'
import Home from './page/Home'
import Create from './page/Create'
import Detail from './page/Detail'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTodo } from './store/slice/todoSlice'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo())
  }, []);

  return (
    <>
      <Routes>
        <Route element={<MainTemplate />}>
         <Route path={'/'} element={ <Home /> } />
         <Route path={'/create'} element={ <Create /> } />
         <Route path={'/detail/:todoID'} element={<Detail/>}/>

         <Route path={'*'} element={<div>404 Not found.</div> } />
        </Route>

      </Routes>

    </>
  )
}

export default App
