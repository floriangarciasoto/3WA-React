const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <li>
                <div>Nom : {comment.name}</div>
                <div>Body : {comment.body}</div>
                <div>Email : {comment.email}</div>
            </li>
        </div>
    )
}

export default Comment
