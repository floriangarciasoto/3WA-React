import propTypes from 'prop-types'

const Item = ({itemID,item,handle}) => (
    <tr>
        <td>{ item }</td>
        <td><button itemID={itemID} onClick={handle}>X</button></td>
    </tr>
)

Item.propTypes = {
    itemID: propTypes.number,
    item: propTypes.string,
    handle: propTypes.func
}

export default Item
