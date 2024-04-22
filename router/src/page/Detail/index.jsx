import { useParams } from "react-router-dom"
import { usePersonnalContext } from "../../context/usePersonnalContext";

const Detail = () => {

    const {articleID} = useParams();
    const {articles} = usePersonnalContext();

    const article = articles.filter(article => article.id == articleID)[0];

    return (
        <>
            <h3>Détail de l'article</h3>
            <div>ID : {article.id} </div>
            <div>Nom : {article.name} </div>
        </>
    )
}

export default Detail
