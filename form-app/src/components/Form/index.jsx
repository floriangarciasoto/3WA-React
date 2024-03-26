import useFormReducer from "../../reducers/useFormReducer"
import Item from "../Item";

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
        if (state.item === '' || state.item !== state.item.trim()) return
        dispatch({
            type: 'addItem'
        })
    }

    const handleDelete = (e) => {
        dispatch({
            type: 'deleteItem',
            payload: parseInt(e.target.getAttribute('itemid'))
        })
    }

    const handleInvert = () => {
        dispatch({
            type: 'invertList'
        })   
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="Article" onChange={handleItemChange} value={state.item} />
                <input type="submit" value="OK" disabled={!state.canAddItem}/>
            </form>
            <h3>Liste de course</h3>
            <table>
                <thead></thead>
                <tbody>{ state.list.map((item,index) => <Item key={index} itemID={index} item={item} handle={handleDelete} />) }</tbody>
                <tfoot></tfoot>
            </table>
            <button onClick={handleInvert}>Inverser</button>
        </>
    )

}

export default Form
