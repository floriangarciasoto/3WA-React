import { useCalcContext } from "../../context/useCalcContext";
import './style.css';

const Operators = () => {
    const {state,dispatch} = useCalcContext();
    
    const handlePrepareCalc = (calcType) => {
        if (state.screen === '') {
            dispatch({
                type: 'setError',
                payload: 'Champ de saisie vide.'
            });
            return;
        }
        dispatch({
            type: 'prepareCalc',
            payload: calcType
        })
    }

    return (
        <div className="operators">
            <button onClick={() => handlePrepareCalc('div')}>/</button>
            <button onClick={() => handlePrepareCalc('mul')}>X</button>
            <button onClick={() => handlePrepareCalc('sub')}>-</button>
            <button onClick={() => handlePrepareCalc('add')}>+</button>
        </div>
    )
}

export default Operators;
