import { useState } from "react";
import { usePersonnalContext } from "../../context/usePersonnalContext"

const Create = () => {

    const {articles, setArticles} = usePersonnalContext();
    const [articleName, setArticleName] = useState('');
    const [canSubmit, setCanSubmit] = useState(false);

    const handleChange = (e) => {
        setArticleName(e.target.value);
        setCanSubmit(articleName !== '');
    }

    const handleSubmit = (e) => {
        if (!canSubmit) return;
        e.preventDefault();
        setArticles(
            articles.concat({
                id: Date.now(),
                name: articleName
            })
        );
        setArticleName('');
        setCanSubmit(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Créer un article</legend>
                    <input type="text" placeholder="Nom de l'article" name="article" value={articleName} onChange={handleChange} />
                    <input type="submit" value="OK" disabled={!canSubmit}/>
                </fieldset>
            </form>
        </>
    )
}

export default Create
