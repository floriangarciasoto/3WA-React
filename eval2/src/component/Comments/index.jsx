import { useSelector, useDispatch } from "react-redux";
import Comment from "../../component/Comment";
import { selectComments, selectLoadingState } from "../../store/selector";
import { useEffect } from "react";
import { fetchComments } from "../../store/slice/postSlice";

const Comments = ({ postId }) => {
    const comments = useSelector(selectComments);
    const { getCommentsFromAPIState } = useSelector(selectLoadingState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchComments(postId));
    }, []);

    return (
        <>
            {
                getCommentsFromAPIState === 'loading' ?
                    <div>Chargement ...</div>
                    :
                    getCommentsFromAPIState === 'error' ?
                        <div>Erreur, essaies encore :)</div>
                        :
                        comments.length > 0 ?
                            <ul style={{ textAlign: 'left' }}>
                                {
                                    comments.toReversed().map((comment, index) => <Comment key={index} comment={comment} />)
                                }
                            </ul>
                            :
                            <span>Aucun commentaire. Soyez le premier !</span>
            }
        </>
    )
}

export default Comments
