import { useDiceContext } from "../../context/useDiceContext"

const Results = () => {
    const {state} = useDiceContext();

    return (
        <>
            <h3>Résultats</h3>
            {
                state.done ? 
                    <>
                        <div>Nombre de brelan de 6 : {state.brelans6} ({state.brelans6 / state.rolls * 100} %)</div>
                        <div>Liste des lancers :</div>
                        <ul>
                            {
                                state.result.map((roll,index) => <li key={index}>{roll.join(', ')}</li>)
                            }
                        </ul>
                    </> :
                    <p>Va d'abord falloir lancer les dés.</p>
            }
        </>
    )
}

export default Results
