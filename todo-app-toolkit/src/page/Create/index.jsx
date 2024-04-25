import { useDispatch, useSelector } from 'react-redux'
import { selectLoadingState, selectTodo } from '../../store/selector'
import { addTodoToAPI, setTodoValue } from '../../store/slice/todoSlice'

const Create = () => {
  const dispatch = useDispatch()
  const { title, content } = useSelector(selectTodo)
  const { addTodoToAPIState } = useSelector(selectLoadingState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setTodoValue({ name, value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(addTodoToAPI({ title, content }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Créer une tâche</legend>
          <input type="text" name="title" placeholder="Nom ..." value={title} onChange={handleChange} /><br />
          <textarea name="content" placeholder="Content ..." cols="30" rows="10" value={content} onChange={handleChange} /><br />
          <button type="submit">OK</button>
        </fieldset>
      </form>
      {
        addTodoToAPIState === 'loading' ?
          <div>Envoi ...</div>
          :
          addTodoToAPIState === 'error' &&
          <div>Erreur, essaies encore d'envoyer :)</div>
      }
    </>
  )
}

export default Create
