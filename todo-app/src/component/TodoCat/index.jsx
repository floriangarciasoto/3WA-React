import { useTodoContext } from "../../context/useTodoContext";
import Todos from "../Todos";
import propTypes from 'prop-types';

const TodoCat = ({catID}) => {
    const {state, dispatch} = useTodoContext();

    const handleDelete = () => {
        dispatch({
            type: 'deleteCat',
            payload: catID
        })
    }
    
    return (
        <>
           <h2>{ state.todoCats[catID].name }</h2>
           <div><button onClick={handleDelete}>Supprimer la catégorie</button></div>
           <Todos catID={catID} todos={state.todoCats[catID].todos} />
        </>
    )
}

TodoCat.protoTypes = {
    catID: propTypes.number
}

export default TodoCat;
