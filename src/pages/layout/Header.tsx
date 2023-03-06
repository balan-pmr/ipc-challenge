import { Link } from 'react-router-dom';

const Header = ({ isLogged, setLogged}: { isLogged: boolean, setLogged:any }) => {


  return (
    <>
      <div>
        <div className='nav-outer-wrapper'>
          <div className='nav-main-wrapper'>
          {!isLogged && <div className='nav-bar'> <Link to="/">&nbsp;Login&nbsp;</Link> </div>}
          {isLogged && <div className='nav-bar' onClick={()=>{setLogged(false)}} >&nbsp;Logout&nbsp;&#10060;</div>}
            {isLogged && <div className='nav-bar'><Link to="/dashboard">&nbsp;Dashboard&nbsp;&#127760;</Link></div>}
            {isLogged && <div className='nav-bar'><Link to="/admin">&nbsp;Users&nbsp;&#128084;</Link></div>}
          </div>
        </div>
      </div>
    </>
  );
};




export default Header;