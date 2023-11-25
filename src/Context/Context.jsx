import { createContext ,  useContext,  useState } from "react";

const Context = createContext()

const  ContextProvider = ({children}) =>{
    const [refresh , setRefresh] = useState(false)
    return(
        <Context.Provider value={{refresh , setRefresh}} >
            {children}
        </Context.Provider>
    )
}

export {Context , ContextProvider}