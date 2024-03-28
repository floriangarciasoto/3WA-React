import { createContext, useContext } from "react";
import useTodoReducer from "../reducer/useTodoReducer";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [state, dispatch] = useTodoReducer();

    return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext);
export default TodoContextProvider;
