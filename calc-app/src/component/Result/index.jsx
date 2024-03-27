import { useEffect } from "react";
import { useCalcContext } from "../../context/useCalcContext";

const Result = () => {
    const {state, dispatch} = useCalcContext();

    useEffect(() => {
        if (state.result !== null && state.result !== undefined && state.result !== 0) {
            dispatch({
                type: 'incrementOperations'
            });
        }
    }, [state.result]);

    return (
        <>
            <div>Résultat : {state.result}</div>
            {
                state.operations === 10 && <div>Vous avez fait 10 opérations.</div>
            }
            {
                state.error === true && <div style={{color:'red'}}>Erreur dans la saisie des nombres.</div>
            }
        </>
    );
};

export default Result;
