import useFormReducer from "../../reducers/useFormReducer"
import Item from "../Item";
import { useEffect } from "react";

let id = 0;

const Form = () => {

    const [state, dispatch] = useFormReducer();

    const handleItemChange = (e) => {
        dispatch({
            type: 'changeItem',
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.inputValue === '' || state.inputValue !== state.inputValue.trim()) return
        id++;
        dispatch({
            type: 'addItem',
            payload: id
        })
    }

    const handleInvert = () => {
        dispatch({
            type: 'invertList'
        })   
    }

    useEffect(() => {
        dispatch({
            type: 'changeCanAddItem',
            payload: state.inputValue.length > 0 && state.inputValue === state.inputValue.trim()
        })
    },[state.inputValue])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="Article" onChange={handleItemChange} value={state.inputValue} />
                <input type="submit" value="OK" disabled={!state.canAddItem}/>
            </form>
            <h3>Liste de course</h3>
            <table>
                <thead></thead>
                <tbody>{ state.list.map((item,index) => <Item key={index} item={item} dispatch={dispatch} />) }</tbody>
                <tfoot></tfoot>
            </table>
            <button onClick={handleInvert}>Inverser</button>
        </>
    )

}

export default Form
