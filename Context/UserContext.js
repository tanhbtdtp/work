import { useState,useEffect,createContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [userinfo,setUserinfo] = useState('');

    return(

       <UserContext.Provider value={{userinfo,setUserinfo}}>
                {children}
       </UserContext.Provider>
    )   
}

export default UserContext;


