import { Link } from "react-router-dom"
import { selectUsers } from "../../store/selector";
import { useSelector } from "react-redux"

const PostInList = ({ post }) => {

    const users = useSelector(selectUsers);

    return (

        <Link to={'/detail/' + post.id}>
            <div className="postlist">

                <div className="postlist-h1">{post.title}</div>
                <div>{users.find(user => user.id === post.userId).name}</div>

            </div>
        </Link>
    )
}

export default PostInList
