import { useCalcContext } from "../../context/useCalcContext";

const Buttons = () => {

    const {state,dispatch} = useCalcContext();

    const handleAdd = () => {
        if (state.inputValue1.search(/^[0-9]+$/) === -1 || state.inputValue2.search(/^[0-9]+$/) === -1) {
            dispatch({
                type: 'setError'
            })
            return;
        }
        dispatch({
            type: 'addNumbers'
        })
    }

    const handleMul = () => {
        if (state.inputValue1.search(/^[0-9]+$/) === -1 || state.inputValue2.search(/^[0-9]+$/) === -1) {
            dispatch({
                type: 'setError'
            })
            return;
        }
        dispatch({
            type: 'mulNumbers'
        })
    }

    const handleReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    return (
        <>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMul}>X</button>
            <button onClick={handleReset}>RESET</button>
        </>
    )
}

export default Buttons;
