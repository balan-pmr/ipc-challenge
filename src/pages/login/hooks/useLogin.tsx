import { AlertProps } from "components/alerts/Alert";
import { ALERT_TYPES } from "models/enums";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = ( setLogged:any) =>{

    const[message, setMessage]= useState<AlertProps>({message:'',type:ALERT_TYPES.INFO});
    const[user, setUser] = useState<string>('');
    const[password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const onSubmit = async (e:any) => {
        e.preventDefault();
        //console.log({user,password})
        if(user === '' || password === '' ){
            setMessage({ message: 'No user or password in form.', type: ALERT_TYPES.ERROR })
        }else{
            await onSubmitUserAndPassword()
        }
    };

    const onSubmitUserAndPassword = async () => {
        setMessage({ message: 'Validating credentials, please wait.', type: ALERT_TYPES.INFO })
        //let baseUrl: string | undefined = process.env.REACT_APP_BASE_URL_API;
        let url: string = 'https://script.google.com/macros/s/AKfycbwG0EdkIhGt_CvTN0LDbzYRCIWEBjyxp6QwSc5ifNnueKNmasc0FgOZtyXS1CrF6v1gdA/exec';
        let action: string = '?action=login';
        //if (baseUrl && action) { url = baseUrl + action }
        await fetch(url + action, {method: 'POST', body: JSON.stringify({ password: password, user: user })})
            .then(res => res.json())
            .then((result) => {
                console.log({ result })
                if(result.code === 200 && result.message === 'OK' ){
                    setLogged(true)
                    //console.log('valid user -> redirecting to dashboard')
                    navigate("/dashboard");
                }else
                if(result.code === 200 && result.message !== 'OK' ){
                    let attemps = 3 - result.invalidUser.fails;
                    if(attemps <=0 ){
                        setMessage({ message: 'User is block, contact your administration area.', type: ALERT_TYPES.ERROR })
                    }else{
                        setMessage({ message: 'Invalid  password, You have '+attemps+' more attempt after block your user.', type: ALERT_TYPES.ERROR })
                    }
                }else{
                    setMessage({ message: 'No user in system.', type: ALERT_TYPES.ERROR })
                    
                }
            })
            .catch((error) => {
                setMessage({ message: 'Error at fetching URL, Try Again. (' + error + ')', type: ALERT_TYPES.ERROR })
            });
    }

    return {message, user, setUser, password, setPassword , onSubmit}

}

export default useLogin;