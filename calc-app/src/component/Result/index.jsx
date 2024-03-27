import { useEffect, useState } from "react";
import { useCalcContext } from "../../context/useCalcContext";

const Result = () => {

    const {state} = useCalcContext();
    const [operations, setOperations] = useState(0);

    useEffect(() => {
        setOperations(prev => prev + 1);
    },[state.result])

    return (
        <>
            <div>Résultat : {state.result}</div>
            {
                operations === 10 && <div>Vous avez fait 10 opérations.</div>
            }
            {
                state.error === true && <div style={{color:'red'}}>Erreur dans la saisie des nombres.</div>
            }
        </>
    )
}

export default Result;
