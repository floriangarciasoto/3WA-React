import { useSelector } from "react-redux"
import { selectDragons, selectKnights } from "../../store/selector"
import { Link } from "react-router-dom";

const Home = () => {
    const dragons = useSelector(selectDragons);
    const knights = useSelector(selectKnights);

    return (
        <>
            <h3>Liste des dragons :</h3>
            <ul>
            {
                dragons.map((dragon,index) => <li key={index}><Link to={'./'+dragon.id}>{dragon.name}</Link></li>)
            }
            </ul>
            <h3>Liste des chevaliers :</h3>
            <ul>
            {
                knights.map((knight,index) => <li key={index}><Link to={'./'+knight.id}>{knight.name}</Link></li>)
            }
            </ul>
        </>
    )
}

export default Home
