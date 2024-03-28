import propTypes from 'prop-types';
import './style.css'

const Error = ({message}) => {
    return (
        <div className="error">{message}</div>
    )
}

Error.propTypes = {
    message: propTypes.string
}

export default Error;
