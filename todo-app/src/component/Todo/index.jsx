import { useTodoContext } from "../../context/useTodoContext";
import propTypes from 'prop-types';

const Todo = ({catID,todoID,todo}) => {
    const {dispatch} = useTodoContext();

    const handleDoneChange = (e) => {
        dispatch({
            type: 'toggleTodoCheck',
            payload: {
                catID,
                todoID
            }
        })
    }

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
        <fieldset>
            <legend>{todo.name}</legend>
            <label><input type="checkbox" checked={todo.done} onChange={handleDoneChange}/> Fait</label>
            <p>{todo.description}</p>
            <div><button onClick={handleDelete}>Supprimer le todo</button></div>
        </fieldset>
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
