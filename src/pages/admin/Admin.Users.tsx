import Alert from "components/alerts/Alert";
import UserPasswordReset from "./components/UserPasswordReset";
import useAdminUser from "./hooks/useAdminUser";

const AdminUsers = () => {

    const { message, lockedUsers, setLockedUsers } = useAdminUser();

    return (
        <>
            <Alert message={message.message} type={message.type} />
            <div className='center-content'><h1>ADMINISTRATION OF USERS</h1></div>
            {lockedUsers.map( (u, index) => (<UserPasswordReset  key={index} userName={u.user} newPassword={u.newPassword} lockedUserState={ {lockedUsers, setLockedUsers} } />) )} 
            {lockedUsers.length ===0?(<div className="center-content">No locked users, all is up-to-date here.</div>):(<></>)}
        </>

    )
}

export default AdminUsers