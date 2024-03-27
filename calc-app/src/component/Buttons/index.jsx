import { useCalcContext } from "../../context/useCalcContext";

const Buttons = () => {

    const {state,dispatch} = useCalcContext();

    const handleAdd = () => {
        // if (state.inputValue1.search(/^[0-9]+$/) === -1 || state.inputValue2.search(/^[0-9]+$/) === -1) {
        //     dispatch({
        //         type: 'setError',
        //         payload: 'Erreur dans la saisie des nombres.'
        //     })
        //     return;
        // }
        // dispatch({
        //     type: 'addNumbers'
        // })
        if (state.screen === '') {
            dispatch({
                type: 'setError',
                payload: 'Champ de saisie vide.'
            });
            return;
        }
        dispatch({
            type: 'prepareAdd'
        })
    }

    const handleMinus = () => {
        if (state.screen === '') {
            dispatch({
                type: 'setError',
                payload: 'Champ de saisie vide.'
            });
            return;
        }
        dispatch({
            type: 'prepareSub'
        })       
    }

    const handleMul = () => {
        // if (state.inputValue1.search(/^[0-9]+$/) === -1 || state.inputValue2.search(/^[0-9]+$/) === -1) {
        //     dispatch({
        //         type: 'setError',
        //         payload: 'Erreur dans la saisie des nombres.'
        //     })
        //     return;
        // }
        // dispatch({
        //     type: 'mulNumbers'
        // })
        if (state.screen === '') {
            dispatch({
                type: 'setError',
                payload: 'Champ de saisie vide.'
            });
            return;
        }
        dispatch({
            type: 'prepareMul'
        })
    }

    const handleReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    const handleNum = (e) => {
        dispatch({
            type: 'changeScreen',
            payload: e.target.getAttribute('num') 
        })
    }

    const handleEquals = () => {
        if (state.operationPrepare === '') {
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
                <button onClick={handleAdd}>+</button>
                <button onClick={handleMinus}>-</button>
                <button onClick={handleMul}>X</button>
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

export default Buttons;
