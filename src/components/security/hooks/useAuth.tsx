

import { useEffect, useRef, useState } from "react";

const useAuth = () => {
    const [logged, setLogged] = useState(false);
    const [admin, setAdmin] = useState(false);
    const interval = useRef<any>();

    useEffect(() => {
        if (logged) {
            interval.current = setInterval(() => {
                alert('Session has ended.')
                setLogged(false);
                clearInterval(interval.current)
            }, 120000)
        }else{
            clearInterval(interval.current)
        }
    }, [logged]);

    return { logged, setLogged, admin, setAdmin }
}

export default useAuth;