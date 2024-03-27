import { useCalcContext } from "../../context/useCalcContext";

const Inputs = () => {

    const {state, dispatch} = useCalcContext();

    const handleChangeNumber1 = (e) => {
        dispatch({
            type: 'changeNumber1',
            payload: e.target.value
        })
    }

    const handleChangeNumber2 = (e) => {
        dispatch({
            type: 'changeNumber2',
            payload: e.target.value
        })
    }

    return (
        <>
        <div>
            <input type="text" value={state.inputValue1} onChange={handleChangeNumber1}/>
            <input type="text" value={state.inputValue2} onChange={handleChangeNumber2}/>
        </div>
        </>
    )
}

export default Inputs;
