import { useCalcContext } from "../../context/useCalcContext";
import Equals from "../Equals";
import Key from "../Key";
import Operators from "../Operators";
import './style.css';

const Pad = () => {
    const {_,dispatch} = useCalcContext();

    const handleReset = () => {
        dispatch({
            type: 'reset'
        })
    }

    const numPad = [
        ['7','8','9'],
        ['4','5','6'],
        ['1','2','3']
    ]

    return (
        <>
            <div className="pad">
                <div>
                    {
                        numPad.map((numArray,numArrayID) => <div key={numArrayID}>{ numArray.map((n,i) => <Key key={i} k={n}/>) }</div>)
                    }
                    <div>
                        <Key k={'0'}/>
                        <Key k={'.'}/>
                        <Equals />
                    </div>
                </div>
                <Operators />
            </div>
            <div>
                <button onClick={handleReset}>RESET</button>
            </div>
        </>
    )
}

export default Pad;
