import { Link } from "react-router-dom"
import { usePersonnalContext } from "../../context/usePersonnalContext"

const List = () => {

    const {articles} = usePersonnalContext();

    return (
        <>
        <h3>Liste des articles :</h3>
        <ul>
        {
            articles.map((article,index) => <li key={index}><Link to={'./'+article.id}>{article.name}</Link></li>)
        }
        </ul>
        </>
    )
}

export default List
