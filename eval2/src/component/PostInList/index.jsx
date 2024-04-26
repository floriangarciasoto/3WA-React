import { Link } from "react-router-dom"
import { selectUsers } from "../../store/selector";
import { useSelector } from "react-redux"

const PostInList = ({ post }) => {

    const users = useSelector(selectUsers);

    return (
        <div className="postlist">
            <li>
                <Link to={'/detail/' + post.id}>{post.title} - {users.find(user => user.id === post.userId).name}</Link>
            </li>
        </div>
    )
}

export default PostInList
