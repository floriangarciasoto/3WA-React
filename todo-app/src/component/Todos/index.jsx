import Todo from "../Todo";
import propTypes from 'prop-types';

const Todos = ({catID,todos}) => {
    return (
        <>
            {
                todos.map((todo,index) => <Todo key={index} catID={catID} todoID={index} todo={todo}/>)
            }
        </>
    )
}

Todos.protoTypes = {
    catID: propTypes.number,
    todos: propTypes.arrayOf(propTypes.shape({
        name: propTypes.string,
        description: propTypes.string
    }))
}

export default Todos;
