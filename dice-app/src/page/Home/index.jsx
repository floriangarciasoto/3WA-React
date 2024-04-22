import { useDiceContext } from "../../context/useDiceContext"

const Home = () => {
    const {state, dispatch} = useDiceContext();

    const handleChange = (e) => {
        dispatch({
            type: 'updateRolls',
            payload: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state.rolls <= 0) return;

        dispatch({
            type: 'roll'
        });
    }

    return (
        <>
            <p>Nombre de lancers :</p>
            <form onSubmit={handleSubmit}>
                <input type="number" value={state.rolls} onChange={handleChange}/>
                <input type="submit" value="OK" />
            </form>
            {
                state.done && <p>C'est fait, et vous en aurez pour votre argent.</p>
            }
        </>
    )
}

export default Home
