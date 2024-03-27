import propTypes from 'prop-types'
import './style.css'

const Item = ({item,dispatch}) => {
    
    const handleDelete = (e) => {
        dispatch({
            type: 'deleteItem',
            payload: item.id
        })
    }

    const handleCheck = () => {
        dispatch({
            type: 'toogleChecked',
            payload: item.id
        })
    }

    return (
        <tr>
            <td><input type="checkbox" checked={item.isChecked} onChange={handleCheck}/></td>
            <td className={ item.isChecked ? 'ischecked' : '' }>{ item.name }</td>
            <td><button onClick={handleDelete}>X</button></td>
        </tr>
    )
}

Item.propTypes = {
    item: propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        isChecked: propTypes.bool
    }),
    dispatch: propTypes.func
}

export default Item
