import { useDispatch, useSelector } from "react-redux"
import { selectLogs } from "../../store/selector"
import { resetLogs } from "../../store/slice/logSlice";

const LogsList = () => {
    const logs = useSelector(selectLogs);
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(resetLogs())
    }

    return (
        <div>
            <h4>Logs :</h4>
            <ul style={{ maxHeight: '10em', overflow: 'scroll', textAlign: 'left', whiteSpace: 'nowrap' }}>
                {
                    logs.toReversed().map((log, index) => <li className="logs" key={index}>{log.date}, {log.name}, {JSON.stringify(log.payload)}</li>)
                }
            </ul>
            <button onClick={handleClick}>RESET</button>
        </div>
    )
}

export default LogsList
