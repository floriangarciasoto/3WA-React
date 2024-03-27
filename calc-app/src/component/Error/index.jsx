import { useCalcContext } from "../../context/useCalcContext";

const Error = () => {
    const {state} = useCalcContext();

    return (
        <>
            {
                state.error !== '' && <div style={{color:'red'}}>{state.error}</div>
            }
        </>
    )
}

export default Error;
