import { useCalcContext } from "../../context/useCalcContext";
import './style.css';

const Equals = () => {
    const {state,dispatch} = useCalcContext();

    const handleEquals = () => {
        if (state.prepare.operation === '') {
            dispatch({
                type: 'setError',
                payload: 'Aucune opération entrée avant.'
            });
            return;
        }
        if (state.screen === '') {
            dispatch({
                type: 'setError',
                payload: 'Champ de saisie vide.'
            });
            return;
        }
        if (state.prepare.operation === 'div' && parseInt(state.screen) === 0) {
            dispatch({
                type: 'setError',
                payload: 'Attention: division par 0 ! Recommencez le calcul.'
            });
            dispatch({
                type: 'resetCalc'
            });
            return;
        }
        dispatch({
            type: 'setResult'
        })
    }
    
    return (
        <button className="equals" onClick={handleEquals}>=</button>
    )
}

export default Equals;
