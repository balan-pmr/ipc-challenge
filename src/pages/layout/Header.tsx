import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

const Navigation = () => (
  <div>
    <div className='nav-outer-wrapper'>
      <div className='nav-main-wrapper'>
        <div className='nav-bar'><Link to="/">Logout</Link></div>
        <div className='nav-bar'><Link to="/dashboard">Dashboard</Link></div>
        <div className='nav-bar'><Link to="/admin">Admin</Link></div>
      </div>
    </div>
  </div>
);




export default Header;