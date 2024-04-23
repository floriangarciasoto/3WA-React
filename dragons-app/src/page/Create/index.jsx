// import { useState } from "react";
// import { usePersonnalContext } from "../../context/usePersonnalContext"

import { useDispatch, useSelector } from "react-redux";
import { selectDragon, selectDragons } from "../../store/selector";
import { setPostValue } from "../../store/action";
import { POST_ADD_POST } from "../../store/action-type";

const Create = () => {

    // const {articles, setArticles} = usePersonnalContext();
    // const [articleName, setArticleName] = useState('');
    // const [canSubmit, setCanSubmit] = useState(false);

    const dragon = useSelector(selectDragon);
    const dragons = useSelector(selectDragons);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        // setArticleName(e.target.value);
        // setCanSubmit(articleName !== '');

        const {name, value} = e.target;
        dispatch(setPostValue({name, value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (dragon.name.trim() === "" || dragon.age === 0 || String(dragon.age).search(/^[0-9]+$/) === null || dragons.find(dragonInList => dragonInList.name === dragon.name) !== undefined) return;
        // if (!canSubmit) return;
        // setArticles(
        //     articles.concat({
        //         id: Date.now(),
        //         name: articleName
        //     })
        // );
        // setArticleName('');
        // setCanSubmit(false);
        dispatch({
            type: POST_ADD_POST
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Créer un dragon</legend>
                    Nom : <input type="text" name="name" value={dragon.name} onChange={handleChange} /><br/>
                    Age : <input type="number" name="age" value={dragon.age} onChange={handleChange} /><br/>
                    <input type="submit" value="OK" disabled={false}/>
                </fieldset>
            </form>
        </>
    )
}

export default Create
