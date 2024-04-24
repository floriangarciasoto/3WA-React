import { useDispatch, useSelector } from "react-redux";
import { selectDragon, selectDragons } from "../../store/selector";
import { setDragonValue } from "../../store/action";
import { DRAGON_ADD_DRAGON } from "../../store/action-type";

const Create = () => {
    const dragon = useSelector(selectDragon);
    const dragons = useSelector(selectDragons);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target;
        dispatch(setDragonValue({name, value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dragon.name.trim() === "" || dragon.age === 0 || String(dragon.age).search(/^[0-9]+$/) === null || dragons.find(dragonInList => dragonInList.name === dragon.name) !== undefined) return;
        dispatch({
            type: DRAGON_ADD_DRAGON
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Créer un dragon</legend>
                    Nom : <input type="text" name="name" value={dragon.name} onChange={handleChange} /><br/>
                    Age : <input type="number" name="age" value={dragon.age} onChange={handleChange} /><br/>
                    <input type="submit" value="OK" disabled={false}/>
                </fieldset>
            </form>
        </>
    )
}

export default Create
