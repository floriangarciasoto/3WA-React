import { useDispatch, useSelector } from 'react-redux'
import { selectTodo } from '../../store/selector'
import { addTodo, setTodoIsDone, setTodoValue } from '../../store/slice/todoSlice'

const Create = () => {
    const dispatch = useDispatch()
    const {name, description, isDone} = useSelector(selectTodo)
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      dispatch(setTodoValue({ name, value }));
    }
  
    const handleIsCheckedChange = (e) => {
      const { checked } = e.target;
      dispatch(setTodoIsDone(checked));
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name.trim() === '') return;
      dispatch(addTodo());
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Créer une tâche</legend>
                <input type="text" name="name" placeholder="Nom ..." value={name} onChange={handleChange}/><br/>
                <textarea name="description" placeholder="Description ..." cols="30" rows="10" value={description} onChange={handleChange}/><br/>
                <label>
                    Fait : 
                    <input type="checkbox" value={isDone} onChange={handleIsCheckedChange} />
                </label><br />
                <button type="submit">OK</button>
                </fieldset>
            </form>
        </>
    )
}

export default Create
