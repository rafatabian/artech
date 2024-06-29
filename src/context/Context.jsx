import { createContext } from "react";

export const GeneralContext = createContext()

export const ContextProvider = ({ children }) => {


return (
    <GeneralContext.Provider value={{}}>
       {children}
    </GeneralContext.Provider>
)
}

