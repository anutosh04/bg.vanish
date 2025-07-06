import { Children, createContext, useContext, useEffect, useState, useMemo } from "react"
import useRegister from "../hooks/useRegister"
import  {useNavigate} from 'react-router-dom'
import axios from "axios"

const AppContext= createContext()

export const useAppContext = ()=> useContext(AppContext)

const AppContextProvider = ({children})=>{
    const navigate = useNavigate();
    const [image , setImage] = useState(null)
    const [authUser, setAuthUser] = useState(null)
    const [resultImage, setResultImage] = useState('')
    const fetchedUser =  useRegister()
    const [alert, setAlert] = useState('')
    useEffect(()=>{
        if(fetchedUser)
            setAuthUser(fetchedUser)
        
        
    },[fetchedUser])


    const removeBg = async(imageFile) =>{   
        navigate('/loading')     
        try {        
            const formdata= new FormData()
            formdata.append('image',imageFile);
            formdata.append('clerkId',authUser.clerkId)          
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/bg/remove`,formdata,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            if(data){
                setResultImage(data.resultImage)
                setAuthUser({...data.updatedUser})
                setImage(imageFile)
            }
            navigate('/result')
        } catch (error) {
            setAlert('something went wrong')
            navigate('/')
        }
    }
    const value = useMemo(() => ({
  authUser,
  image,
  setImage,
  resultImage,
  setResultImage,
  removeBg,
  alert,
  setAlert,
  setAuthUser, // include this too!
}), [authUser, image, resultImage, alert]);
    
    

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
