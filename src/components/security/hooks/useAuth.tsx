

import { useEffect, useState } from "react";

const useAuth = () => {
    const [logged, setLogged] =useState(false);
    useEffect(()=>{},[])
    return {logged, setLogged }
}

export default useAuth;