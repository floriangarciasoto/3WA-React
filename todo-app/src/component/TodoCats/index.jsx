import { useTodoContext } from "../../context/useTodoContext";
import TodoCat from "../TodoCat";

const TodoCats = () => {
    
    const {state, dispatch} = useTodoContext();

    const handleChange = (e) => {
        dispatch({
            type: 'uptadeCatFilter',
            payload: e.target.value
        })
    }
    
    return (
        <>
            Afficher : <select onChange={handleChange} value={state.showCats}>
                <option value={-1}>Toutes les catégories</option>
                {
                    state.todoCats.map((todoCat,index) => <option key={index} value={index}>{todoCat.name}</option>)
                }
            </select>
            {
                state.showCats === -1 && state.todoCats.map((todoCat,index) => <TodoCat key={index} catID={index}/>)
            }
            {
                state.showCats ==! -1 && state.todoCats.filter((todoCat,index) => index === state.showCats).map((todoCat,index) => <TodoCat key={index} catID={index}/>)
            }
        </>
    )
}

export default TodoCats;
