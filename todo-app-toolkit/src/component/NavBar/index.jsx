import {NavLink} from "react-router-dom";

const NavBar = () => {

    const checkIsActive = ({isActive}) => {
        return isActive ? {color: 'orange'} : {}
      }
    
    return (
        <nav>
            <NavLink style={checkIsActive} to={'/'}>Accueil</NavLink>
            {' '}
            <NavLink style={checkIsActive} to={'/create'}>Créer</NavLink>
        </nav>
    )
}

export default NavBar