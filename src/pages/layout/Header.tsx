import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'context/Auth.Context';

const Header = () => {
  const {logged, setLogged, admin} = useContext(AuthContext);
  
  return (
    <>
      <div>
        <div className='nav-outer-wrapper'>
          <div className='nav-main-wrapper'>

            {!logged && <div className='nav-bar'> <Link to="/">&nbsp;Login&nbsp;</Link> </div>}
            {logged && <div className='nav-bar' onClick={()=>{setLogged(false)}} >&nbsp;Logout&nbsp;&#10060;</div>}
            {logged && <div className='nav-bar'><Link to="/dashboard">&nbsp;Dashboard&nbsp;&#127760;</Link></div>}
            {logged && admin && <div className='nav-bar'><Link to="/admin">&nbsp;Users&nbsp;&#128084;</Link></div>}
          </div>
        </div>
      </div>
    </>
  );
};




export default Header;