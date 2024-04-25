import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../../store/selector";
import { useParams } from "react-router-dom";
import { toggleTodoCompleted } from "../../store/slice/todoSlice";

const Detail = () => {
    const {todoID} = useParams();
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()

    const todo = todos.find(todo => todo.id == todoID);

    const handleCheck = () => {
        dispatch(toggleTodoCompleted(parseInt(todoID)));
    }

    return (
        <>
            <h3>Détail de la tâche</h3>
            <div>ID : {todo.id} </div>
            <div>Nom : {todo.title} </div>
            <div>Descrption : {todo.content} </div>
            <div>Fait : <input type="checkbox" checked={todo.completed} onChange={handleCheck}/></div>
        </>
    )
}

export default Detail