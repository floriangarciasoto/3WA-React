import { useSelector } from "react-redux"
import { selectTodos } from "../../store/selector"
import { Link } from "react-router-dom";
// import { setTodoIsDone } from "../../store/slice/todoSlice";

const Home = () => {

  const todos = useSelector(selectTodos);
  // const dispatch = useDispatch()

  // const handleIsCheckedChange = (e) => {
  //   const { checked } = e.target;
  //   dispatch(setTodoIsDone(checked));
  // }


  return (
    <>
      <h3>Liste des tâches :</h3>
      <ul>
        {
          todos.map((todo, index) => <li key={index}><Link to={'/detail/' + todo.id}>{todo.name}</Link></li>)
        }
      </ul>
    </>
  )
}

export default Home