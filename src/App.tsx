import './App.css';
import Header from 'pages/layout/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuth from 'components/security/hooks/useAuth';
import Footer from 'pages/layout/Footer';
import SecureRoute from 'components/security/SecureRoute';
import Dashboard from 'pages/ipc-app/components/Dashboard';
import Login from 'pages/login/Login';
import AdminUsers from 'pages/admin/Admin.Users';

function App() {

  const { logged } = useAuth();

  return (
    <>  
    <BrowserRouter>
      <div className='outer-wrapper'>
        <div className='main-wrapper'>
          <div className='nav-bar'>
            <Header />
          </div>
          <div className='main-content'>
          <Routes>
              <Route index element={<Login/>} />            
              <Route path='dashboard' element={<SecureRoute isLogged={logged} children={<Dashboard />} />} />
              <Route path="admin" element={<AdminUsers/>} />
              <Route path="*" element={<p>There's nothing here: 404!</p>} />  
          </Routes>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
