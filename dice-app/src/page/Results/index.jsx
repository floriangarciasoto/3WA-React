import { useDiceContext } from "../../context/useDiceContext"

const Results = () => {
    const {state} = useDiceContext();

    return (
        <>
            <h3>Résultats</h3>
            {
                state.done ? 
                    <>
                        <div>Nombre de brelans </div>
                        <ul>
                            {
                                state.brelans.map((brelansNb,index) => <li key={index}>De {index+1} : {brelansNb} ({brelansNb / state.rolls * 100} %)</li>)
                            }
                        </ul>
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
