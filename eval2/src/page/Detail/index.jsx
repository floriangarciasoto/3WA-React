import { useSelector } from "react-redux";
import { selectPosts } from "../../store/selector";
import { useParams, Navigate } from "react-router-dom";
import AddComment from "../../component/AddComment";
import Comments from "../../component/Comments";
import { selectUsers } from "../../store/selector";
import { useEffect } from "react";

const Detail = () => {
    const { postId } = useParams();
    const users = useSelector(selectUsers);

    const posts = useSelector(selectPosts);
    const post = posts.find(post => post.id == postId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {
                post !== undefined ?
                    <>
                        <div className="detailpost">
                            <h3>Détail du post</h3>
                            <div>ID : {post.id} </div>
                            <div>Nom : {post.title} </div>
                            <div>Auteur : {users.find(user => user.id === post.userId).name}</div>
                            <div>Contenu : {post.body} </div>
                        </div>
                        <h4>Commentaires :</h4>
                        <AddComment postId={postId} />
                        <Comments postId={postId} />
                    </>
                    :
                    <Navigate to="/" />
            }
        </>
    )
}

export default Detail