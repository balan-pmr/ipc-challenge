import Alert from "components/alerts/Alert";
import useUpdateUserPassword from "../hooks/useUpdateUserPassword"


const UserPasswordReset = (props: { userName: string,newPassword: string, lockedUserState:any }) => {

    const { onSubmit, message } = useUpdateUserPassword(props.userName, props.lockedUserState);

    return (
        <>  
            <Alert message={message.message} type={message.type} />
            <form onSubmit={e => onSubmit(e) } >
                <div className="app-form">
                    <label>User:</label>
                    <div><p>{props.userName}</p></div>
                    <label>New Password:</label>
                    <input type="text" name ="newPassword" value={props.newPassword}  disabled={true} />
                    <input className="button-active" type="submit" value="Update Passwod" />
                </div>
            </form>
        </>

    )
}

export default UserPasswordReset;