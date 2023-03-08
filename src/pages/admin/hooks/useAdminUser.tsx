import { AlertProps } from "components/alerts/Alert";
import { ALERT_TYPES } from "models/enums";
import { useEffect, useState } from "react";
import { makeRamdomPassword } from "utils/utils";

const useAdminUser = () => {

    const [lockedUsers, setLockedUsers ] = useState<Array<{user:string, newPassword:string}>>([])
    const [message, setMessage]= useState<AlertProps>({message:'',type:ALERT_TYPES.INFO});

    useEffect(()=>{
        (async () => { await getListOfLockedUsers ();})();
    },[])


    const getListOfLockedUsers = async () => {
        setMessage({ message: 'Loading...', type: ALERT_TYPES.INFO })
        let baseUrl: string | undefined = process.env.REACT_APP_BASE_URL_API;
        let action: string | undefined = process.env.REACT_APP_ACTION_LOCKED_USERS
        let url: string = '';
        if (baseUrl && action) { url = baseUrl + action }        
        await fetch(url, {method: 'POST'})
            .then(res => res.json())
            .then((result) => {
                if(result.code === 200 && result.message === 'OK' ){
                    setMessage({ message: '', type: ALERT_TYPES.INFO })
                    const list = result.lockedUsers.map( (u:any) => { return {user:u.user, newPassword:makeRamdomPassword(5) } } )
                    setLockedUsers(list)
                }
            })
            .catch((error) => {
                setMessage({ message: 'Error at fetching URL, Try Again. (' + error + ')', type: ALERT_TYPES.ERROR })
            });
    }


    return {lockedUsers,message, setLockedUsers}
}

export default useAdminUser;