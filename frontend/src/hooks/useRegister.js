import {useUser} from '@clerk/clerk-react'
import { useEffect, useState } from 'react';


const useRegister = ()=>{
    const {user}=useUser();
    const [backendUser, setBackendUser] = useState(null)
  
    useEffect(()=>{
        const registerHandler = async() =>{
            if(!user)
                return null;
            try {
                const req = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`,{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					clerkId: user.id,
					email: user.emailAddresses[0].emailAddress,
					fullName:  user.fullName || user.firstName,
					
				}),
			});
            const data= await req.json();
            if(data)    setBackendUser(data.user);
            } catch (error) {
                console.log(error);
            }
        }

        registerHandler();
    },[user])
        
     

    return backendUser;
}

export default useRegister;