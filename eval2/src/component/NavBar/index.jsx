import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <nav>
            <NavLink className={'borderNav'} to={'/'}>Accueil</NavLink>
            {' '}
            <NavLink className={'borderNav'} to={'/detail'}>Détail</NavLink>
            {' '}
            <NavLink className={'borderNav'} to={'/add'}>Ajout de Post</NavLink>
        </nav>
    )
}

export default NavBar