import { createContext, useState } from "react";

export const GeneralContext = createContext()

export const ContextProvider = ({ children }) => {
    const [navbarColor, setNavbarColor] = useState("white")


return (
    <GeneralContext.Provider value={{navbarColor, setNavbarColor}}>
       {children}
    </GeneralContext.Provider>
)
}

