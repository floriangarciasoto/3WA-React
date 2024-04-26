import { useDispatch, useSelector } from 'react-redux'
import { selectLoadingState, selectPost } from '../../store/selector'
import { addPostToAPI, setPostValue } from '../../store/slice/postSlice'

const Add = () => {
  const dispatch = useDispatch()
  const { title, body } = useSelector(selectPost)
  const { addPostToAPIState } = useSelector(selectLoadingState)

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setPostValue({ name, value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;
    dispatch(addPostToAPI({ title, body }));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Création d'un post</legend>
          <input type="text" name="title" placeholder="Nom ..." value={title} onChange={handleChange} /><br />
          <textarea name="body" placeholder="Body ..." cols="30" rows="10" value={body} onChange={handleChange} /><br />
          <button type="submit">OK</button>
        </fieldset>
      </form>
      {
        addPostToAPIState === 'loading' ?
          <div>Envoi ...</div>
          :
          addPostToAPIState === 'error' &&
          <div>Erreur, essaies encore d'envoyer :)</div>
      }
    </>
  )
}

export default Add
