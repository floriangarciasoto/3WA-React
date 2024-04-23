// import { Link } from "react-router-dom"
// import { usePersonnalContext } from "../../context/usePersonnalContext"

import { useSelector } from "react-redux"
import { selectDragons } from "../../store/selector"
import { Link } from "react-router-dom";

const List = () => {

    // const {dragons} = usePersonnalContext();

    const dragons = useSelector(selectDragons)

    return (
        <>
        <h3>Liste des dragons :</h3>
        <ul>
        {
            dragons.map((dragon,index) => <li key={index}><Link to={'./'+dragon.id}>{dragon.name}</Link></li>)
        }
        </ul>
        </>
    )
}

export default List
