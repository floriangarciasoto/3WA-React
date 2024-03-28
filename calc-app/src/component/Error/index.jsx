import { useCalcContext } from "../../context/useCalcContext";
import './style.css'

const Error = () => {
    const {state} = useCalcContext();

    return (
        <>
            {
                state.error !== '' && <div>{state.error}</div>
            }
        </>
    )
}

export default Error;
