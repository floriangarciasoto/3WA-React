import { useCalcContext } from "../../context/useCalcContext";
import Num from "../Num";

const Pad = () => {
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
        dispatch({
            type: 'setResult'
        })
    }
    
    const handleReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    const numPad = [
        [7,8,9],
        [4,5,6],
        [1,2,3],
        [0]
    ]

    return (
        <>
            {
                numPad.map((numArray,numArrayID) => <div key={numArrayID}>{ numArray.map((n,i) => <Num key={i} n={n}/>) }</div>)
            }
            <div>
                <button onClick={() => handlePrepareCalc('add')}>+</button>
                <button onClick={() => handlePrepareCalc('sub')}>-</button>
                <button onClick={() => handlePrepareCalc('mul')}>X</button>
                <button onClick={() => handlePrepareCalc('div')}>/</button>
            </div>
            <div>
              <button onClick={handleEquals}>=</button>
            </div>
            <div>
              <button onClick={handleReset}>RESET</button>
            </div>
        </>
    )
}

export default Pad;
