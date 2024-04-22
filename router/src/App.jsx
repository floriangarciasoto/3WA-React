import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import List from './page/List'
import Detail from './page/Detail'
import Create from './page/Create'

function App() {

  const checkIsActive = ({isActive}) => {
    return isActive ? {color: 'orange'} : {}
  }

  return (
    <>
      <nav>
        <NavLink style={checkIsActive} to={'/'}>Home</NavLink>
        {' '}
        <NavLink style={checkIsActive} to={'/list'}>Liste</NavLink>
        {' '}
        <NavLink style={checkIsActive} to={'/create'}>Créer</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/list/:articleID' element={<Detail/>}/>
          <Route path='/create' element={<Create/>}/>

          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
