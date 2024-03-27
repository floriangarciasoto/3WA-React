import { useCalcContext } from "../../context/useCalcContext";

const Screen = () => {
    const {state} = useCalcContext();

    return (
        <div>
            <input type="text" value={state.screen} onChange={() => {}} />
        </div>
    )
}

export default Screen;
