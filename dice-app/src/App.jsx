import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Description from './page/Description'
import Results from './page/Results'

function App() {

  const checkIsActive = ({isActive}) => {
    return isActive ? {color: 'orange'} : {}
  }

  return (
    <>
      <nav>
        <NavLink style={checkIsActive} to={'/'}>Home</NavLink>
        {' '}
        <NavLink style={checkIsActive} to={'/desc'}>Description</NavLink>
        {' '}
        <NavLink style={checkIsActive} to={'/results'}>Résultats</NavLink>
      </nav>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/desc' element={<Description/>}/>
          <Route path='/results' element={<Results/>}/>

          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
