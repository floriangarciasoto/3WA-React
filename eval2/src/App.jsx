import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainTemplate from './component/template/MainTemplate'
import Home from './page/Home'
import Add from './page/Add'
import Detail from './page/Detail'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchPostsAndUsers } from './store/slice/postSlice'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAndUsers())
  }, []);

  return (
    <>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'/add'} element={<Add />} />
          <Route path={'/detail/:postId'} element={<Detail />} />

          <Route path={'*'} element={<div>404 Not found.</div>} />
        </Route>

      </Routes>

    </>
  )
}

export default App
