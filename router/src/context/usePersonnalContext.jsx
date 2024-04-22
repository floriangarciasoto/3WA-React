import { createContext, useContext, useState } from "react";

const PersonnalContext = createContext();

const PersonnalContextProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

    return <PersonnalContext.Provider value={{ articles, setArticles }}>{children}</PersonnalContext.Provider>
}

export const usePersonnalContext = () => useContext(PersonnalContext);
export default PersonnalContextProvider;
