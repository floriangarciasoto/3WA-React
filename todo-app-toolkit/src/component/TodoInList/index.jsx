import { Link } from "react-router-dom"

const TodoInList = ({ todo }) => {
    const handleCheck = (e) => {
        const { checked } = e.target;
        // dispatch(setTodoCompleted(checked));
    }

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={handleCheck} />
            <Link to={'/detail/' + todo.id}>{todo.title}</Link>
        </li>
    )
}

export default TodoInList
