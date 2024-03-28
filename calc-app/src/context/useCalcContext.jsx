import { createContext, useContext } from "react";
import useCalcReducer from "../reducers/useCalcReducer";

const CalcContext = createContext();

const CalcContextProvider = ({ children }) => {
  
    const [state, dispatch] = useCalcReducer();

    return (
        <CalcContext.Provider value={{ state, dispatch }}>{children}</CalcContext.Provider>
    )
}

export const useCalcContext = () => useContext(CalcContext)
export default CalcContextProvider
