import { Link } from "react-router-dom"
import { toggleTodoCompleted } from "../../store/slice/todoSlice";
import { useDispatch } from "react-redux";

const TodoInList = ({ todo }) => {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(toggleTodoCompleted(todo.id));
    }

    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={handleCheck} />
            <Link to={'/detail/' + todo.id}>{todo.title}</Link>
        </li>
    )
}

export default TodoInList
