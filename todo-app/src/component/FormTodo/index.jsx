import { useTodoContext } from '../../context/useTodoContext'

const FormTodo = () => {

    const {state, dispatch} = useTodoContext();

    const handleCatChange = (e) => {
        dispatch({
            type: 'updateFormTodoCat',
            payload: e.target.value
        })
    }

    const handleNameChange = (e) => {
        dispatch({
            type: 'updateFormTodoName',
            payload: e.target.value
        })
    }

    const handleDescriptionChange = (e) => {
        dispatch({
            type: 'updateFormTodoDescription',
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addTodo'
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset style={{display:'flex',flexDirection:'column'}}>
                    <legend>Création d'un todo</legend>
                    <select onChange={handleCatChange} value={state.formTodoCat}>
                        <option value="-1">- Catégorie -</option>
                        {
                            state.todoCats.map((todoCat,index) => <option key={index} value={index}>{todoCat.name}</option>)
                        }
                    </select>
                    <input type="text" placeholder="Nom ..." onChange={handleNameChange} value={state.formTodoName}/>
                    <textarea cols="30" rows="10" placeholder="Description ... (optionel)" onChange={handleDescriptionChange} value={state.formTodoDescription}/>
                    <input type="submit" value="Ajouter" />
                </fieldset>
            </form>
        </>
    )
}

export default FormTodo;
