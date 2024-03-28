import { useTodoContext } from '../../context/useTodoContext';
import Error from '../Error';

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
        if (state.formCatName === '') {
            dispatch({
                type: 'setErrorInFormCat',
                payload: 'Champ de saisie vide.'
            });
            return;
        }
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
                    {
                        state.errorInFormCat !== '' && <Error message={state.errorInFormCat} />
                    }
                </fieldset>
            </form>
        </>
    )
}

export default FormTodoCat;
