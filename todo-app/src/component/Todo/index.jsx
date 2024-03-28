import { useTodoContext } from "../../context/useTodoContext";
import propTypes from 'prop-types';

const Todo = ({catID,todoID,todo}) => {
    const {dispatch} = useTodoContext();

    const handleDelete = () => {
        dispatch({
            type: 'deleteTodo',
            payload: {
                catID,
                todoID
            }
        })
    }

    return (
        <div>
            <h3>{todo.name}</h3>
            <p>{todo.description}</p>
            <div><button onClick={handleDelete}>Supprimer le todo</button></div>
        </div>
    )
}

Todo.propTypes = {
    catID: propTypes.number,
    todo: propTypes.shape({
        name: propTypes.string,
        description: propTypes.string
    })
}

export default Todo;
