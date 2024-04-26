import { useDispatch, useSelector } from 'react-redux';
import { addCommentToPost, setCommentValue } from '../../store/slice/postSlice';
import { selectComment, selectLoadingState } from '../../store/selector';

const AddComment = ({ postId }) => {
    const dispatch = useDispatch();
    const comment = useSelector(selectComment);
    const { addCommentToAPIState } = useSelector(selectLoadingState);

    const handleCommentChange = (e) => {
        const { name, value } = e.target;
        dispatch(setCommentValue({ name, value }));
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.body.trim() !== '') {
            dispatch(addCommentToPost(postId));
        }
    }

    return (
        <form onSubmit={handleCommentSubmit}>
            <input type="text" name="name" value={comment.name} onChange={handleCommentChange} placeholder='Nom du commentaire ...' />
            <textarea
                value={comment.body}
                name="body"
                onChange={handleCommentChange}
                placeholder="Ajouter un commentaire..."
                rows="4"
                cols="170"
            />
            <br />
            <button type="submit">Ajouter</button>
            {
                addCommentToAPIState === 'loading' ?
                    <div>Envoi ...</div>
                    :
                    addCommentToAPIState === 'error' &&
                    <div>Erreur, essaies encore d'envoyer :)</div>
            }
        </form>
    )
}

export default AddComment;