import { useSelector } from "react-redux"
import { selectLoadingState, selectTodos } from "../../store/selector"
import TodoInList from "../../component/TodoInList";

const Home = () => {
  const todos = useSelector(selectTodos);
  const { getTodosFromAPIState } = useSelector(selectLoadingState);

  return (
    <>
      <h3>Liste des tâches :</h3>
      {
        getTodosFromAPIState === 'loading' ?
          <div>Chargement ...</div>
          :
          getTodosFromAPIState === 'error' ?
            <div>Erreur, essaies encore :)</div>
            :
            todos.length > 0 ?
              <ul style={{ textAlign: 'left' }}>
                {
                  todos.map((todo, index) => <TodoInList key={index} todo={todo} />)
                }
              </ul>
              :
              <span>Vous n'avez rien à faire ici !</span>
      }
    </>
  )
}

export default Home