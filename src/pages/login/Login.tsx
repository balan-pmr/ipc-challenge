import Alert from "components/alerts/Alert";
import useLogin from "./hooks/useLogin";

const Login = ( {setLogged}: { setLogged:any } ) => {

    const { message, user, setUser, password, setPassword, onSubmit} = useLogin(setLogged);

    return (
        <>
            <Alert message={message.message} type={message.type} />
            <div className='center-content'><h1>LOGIN</h1></div>
            <div><form onSubmit={onSubmit} >
                <div className="app-form">
                    <label>User:</label>
                    <input type="text"  value={user} onChange={(e)=>{ setUser(e.target.value) }} />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e)=>{ setPassword(e.target.value) }}  />
                    <input className="button-active"  type="submit" value="Submit" />
                </div>
                </form>
            </div>
        </>
    )
}

export default Login