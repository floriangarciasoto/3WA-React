import { createContext, useContext } from "react";
import useDiceReducer from "../reducers/useDiceReducer";

const DiceContext = createContext();

const DiceContextProvider = ({ children }) => {
    const [state, dispatch] = useDiceReducer();

    return <DiceContext.Provider value={{ state, dispatch }}>{children}</DiceContext.Provider>
}

export const useDiceContext = () => useContext(DiceContext);
export default DiceContextProvider;
