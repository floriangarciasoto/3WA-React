import { useCalcContext } from "../../context/useCalcContext";
import propTypes from "prop-types";

const Num = ({n}) => {

    const {_,dispatch} = useCalcContext();

    const handleNum = (e) => {
        dispatch({
            type: 'changeScreen',
            payload: n 
        })
    }

    return (
        <button onClick={handleNum}>{n}</button>
    )
}

Num.propTypes = {
    n: propTypes.number
}

export default Num;
