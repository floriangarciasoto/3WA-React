import { Link } from "react-router-dom"

const PostInList = ({ post }) => {

    return (
        <li>
            <Link to={'/detail/' + post.id}>{post.title}</Link>
        </li>
    )
}

export default PostInList
