import { Children, createContext, useContext, useEffect, useState } from "react"
import useRegister from "../hooks/useRegister"
import { useUser } from "@clerk/clerk-react"


const AppContext= createContext()

export const useAppContext = ()=> useContext(AppContext)

const AppContextProvider = ({children})=>{
    const [image , setImage] = useState(null)
    const [authUser, setAuthUser] = useState(null)
    const [resultURL, setResultURL] = useState('')
    const fetchedUser =  useRegister()

    useEffect(()=>{
        if(fetchedUser)
            setAuthUser(fetchedUser)
    },[fetchedUser])


    
    const value = {
        authUser,
        image,setImage  
    }
    
    

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
