import { AlertProps } from "components/alerts/Alert";
import { ALERT_TYPES } from "models/enums";
import { useState } from "react";

const useUpdateUserPassword = (userName: string, lockedUserState: any) => {

    const [message, setMessage] = useState<AlertProps>({ message: '', type: ALERT_TYPES.INFO });

    const onSubmit = async (e: any) => {
        e.preventDefault();
        await updateUserPassword(e.target.newPassword.value);
    }

    const updateUserPassword = async (randomPassword: string) => {
        setMessage({ message: 'Loading...', type: ALERT_TYPES.INFO })
        let baseUrl: string | undefined = process.env.REACT_APP_BASE_URL_API;
        let action: string | undefined = process.env.REACT_APP_ACTION_UPDATE_USER_PASSWORD
        let url: string = '';
        if (baseUrl && action) { url = baseUrl + action }
        return fetch(url, { method: 'POST', body: JSON.stringify({ user: userName, newPassword: randomPassword }) })
            .then(res => res.json())
            .then((result) => {
                if (result.code === 200 && result.message === 'OK') {
                    setMessage({ message: '', type: ALERT_TYPES.INFO })
                    setMessage({ message: 'User <' + userName + '> has been unlocked sucessfully.', type: ALERT_TYPES.INFO })
                    lockedUserState.setLockedUsers(lockedUserState.lockedUsers.filter((u: { user: string }) => u.user !== userName))
                }
            })
            .catch((error) => {
                setMessage({ message: 'Error at fetching URL, Try Again. (' + error + ')', type: ALERT_TYPES.ERROR })
            });
    }


    return { onSubmit, message }
}

export default useUpdateUserPassword;