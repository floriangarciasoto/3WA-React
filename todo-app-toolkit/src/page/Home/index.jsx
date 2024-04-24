import { useSelector } from "react-redux"
import { selectTodos } from "../../store/selector"
import { Link } from "react-router-dom";

const Home = () => {

  const todos = useSelector(selectTodos);
  
    return (
        <>
            <h3>Liste des tâches :</h3>
            <ul>
            {
              todos.map((todo,index) => <li key={index}><Link to={'/detail/'+todo.id}>{todo.name}</Link></li>)
            }
            </ul>
        </>
    )
}

export default Home