import { useDispatch, useSelector } from "react-redux";
import { selectTodos } from "../../store/selector";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {todoID} = useParams();
    const todos = useSelector(selectTodos)

    const todo = todos.find(todo => todo.id == todoID);

    return (
        <>
            <h3>Détail de la tâche</h3>
            <div>ID : {todo.id} </div>
            <div>Nom : {todo.name} </div>
            <div>Descrption : {todo.description} </div>
            <div>Fait : <input type="checkbox" checked={todo.isDone} disabled/></div>
        </>
    )
}

export default Detail