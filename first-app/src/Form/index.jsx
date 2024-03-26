import { useReducer } from "react";

const initForm = {
    item: '',
    canSendItem: false,
    list: []
}

const formReducer = (state,action) => {
    switch(action.type) {
        case 'checkItem':
            // if (action.payload.search(/[0-9]/) !== -1) return state;
            return {
                ...state,
                canSendItem: action.payload.length > 0,
                item: action.payload
            }
        
        case 'submit':
            return {
                canSendItem: false,
                item: '',
                list: state.list.concat([state.item])
            }
        
        case 'deleteItem':
            return {
                ...state,
                list: state.list.filter((item,index) => index !== action.payload)
            }

        case 'invertList':
            const newList = [];
            for (var i = state.list.length-1; i >= 0; i--) newList.push(state.list[i]);
            return {
                ...state,
                list: newList
            }
        
            
        default:
            return state
    }
}

const useFormReducer = () => {
    return useReducer(formReducer,initForm)
}

const Form = () => {
    const [formData, setFormData] = useFormReducer();

    const handleChange = (e) => {
        const {value} = e.target
        setFormData({
            type: 'checkItem',
            payload: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            type: 'submit'
        })   
    }

    const handleDelete = (e) => {
        setFormData({
            type: 'deleteItem',
            payload: parseInt(e.target.getAttribute('itemid'))
        })   
    }

    const handleInvert = () => {
        setFormData({
            type: 'invertList'
        })   
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={'text'} name={'item'} placeholder={'Article'} onChange={handleChange} value={formData.item}/>
                <input type={'submit'} value={'ok'} disabled={!formData.canSendItem}/>
            </form>
            <div>Liste de course :</div>
            <ul> { formData.list.map((item,index) => <li key={index}>{item} <button itemID={index} onClick={handleDelete}>X</button></li>) } </ul>
            <button onClick={handleInvert}>Inverser</button>
        </>
    )
}

export default Form
