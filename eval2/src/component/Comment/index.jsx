const Comment = ({ comment }) => {
    return (
        <li>
            <div>Nom : {comment.name}</div>
            <div>Body : {comment.body}</div>
            <div>Email : {comment.email}</div>
        </li>
    )
}

export default Comment
