import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { selectDragons } from "../../store/selector";
// import { usePersonnalContext } from "../../context/usePersonnalContext";

const Detail = () => {

    const {dragonID} = useParams();
    // const {dragons} = usePersonnalContext();
    const dragons = useSelector(selectDragons);

    const dragon = dragons.find(dragon => dragon.id == dragonID);



    return (
        <>
            <h3>Détail du dragon</h3>
            <div>ID : {dragon.id} </div>
            <div>Nom : {dragon.name} </div>
            <div>Age : {dragon.age} </div>
        </>
    )
}

export default Detail
