import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Detail from './page/Detail'
import Create from './page/Create'
import { useSelector } from 'react-redux'
import { selectDragons } from './store/selector'

function App() {

  const checkIsActive = ({isActive}) => {
    return isActive ? {color: 'orange'} : {}
  }

  const dragons = useSelector(selectDragons);

  return (
    <>
      <nav>
        <NavLink style={checkIsActive} to={'/'}>Home</NavLink>
        {' '}
        <NavLink style={checkIsActive} to={'/list'}>Liste</NavLink>
        {' '}
        <NavLink style={checkIsActive} to={'/create'}>Créer</NavLink>
        {' Nombre de dragons : '+ dragons.length }
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/list/:dragonID' element={<Detail/>}/>
          <Route path='/create' element={<Create/>}/>

          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
