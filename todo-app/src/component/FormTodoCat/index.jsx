import { useTodoContext } from '../../context/useTodoContext'

const FormTodoCat = () => {
    const {state, dispatch} = useTodoContext();

    const handleChange = (e) => {
        dispatch({
            type: 'updateFormCatName',
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addCat'
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Création d'une catégorie</legend>
                    <input type="text" name="cat" placeholder="Catégorie ..." onChange={handleChange} value={state.formCatName}/>
                    <input type="submit" value="Ajouter" />
                </fieldset>
            </form>
        </>
    )
}

export default FormTodoCat;
