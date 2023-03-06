import { useEffect, useState } from "react";

const useAuth = () => {

    const [logged, setLogged] =useState(false)
    // implements a valid session for 10 secs
    useEffect(()=>{
        console.log('login for 10 secs')
        setLogged(true)
        /*let interval = setInterval(()=>{
            alert('Session ended. Please login again.')
            clearInterval(interval)
            setLogged(false)
        },30000)*/
    },[])

    return {logged}

}

export default useAuth;