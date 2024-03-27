import { useCalcContext } from "../../context/useCalcContext";

const Pad = () => {
    const {state,dispatch} = useCalcContext();

    const handleNum = (e) => {
        dispatch({
            type: 'changeScreen',
            payload: e.target.getAttribute('num') 
        })
    }

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

    return (
        <>
            <div>
                <button onClick={handleNum} num={7}>7</button>
                <button onClick={handleNum} num={8}>8</button>
                <button onClick={handleNum} num={9}>9</button>
            </div>
            <div>
                <button onClick={handleNum} num={4}>4</button>
                <button onClick={handleNum} num={5}>5</button>
                <button onClick={handleNum} num={6}>6</button>
            </div>
            <div>
                <button onClick={handleNum} num={1}>1</button>
                <button onClick={handleNum} num={2}>2</button>
                <button onClick={handleNum} num={3}>3</button>
            </div>
            <div>
                <button onClick={handleNum} num={0}>0</button>
            </div>
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
