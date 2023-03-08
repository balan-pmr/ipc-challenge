

import { useEffect, useState } from "react";

const useAuth = () => {
    const [logged, setLogged] =useState(false);
    const [admin, setAdmin] =useState(false);
    
    useEffect(()=>{},[])
    return {logged, setLogged , admin, setAdmin}
}

export default useAuth;