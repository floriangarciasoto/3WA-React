import { useCalcContext } from "../../context/useCalcContext";
import propTypes from "prop-types";

const Key = ({k}) => {
    const {_,dispatch} = useCalcContext();

    const handleKey = () => {
        dispatch({
            type: 'changeScreen',
            payload: k
        })
    }

    return (
        <button onClick={handleKey}>{k}</button>
    )
}

Key.propTypes = {
    k: propTypes.string
}

export default Key;
