import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <BrowserRouter>

      <div>
        <header>
          <nav className='navbar'>
            <Link className='navbar-logo' to="/">
            <img src="/images/logo2.png" width="145"/>
            </Link>

            <div className='navbar-menu' id='navbarNav'>
                <ul className='navbar-list'>
                    <li className='nav-item mainpage'>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>

                    <li className='nav-item search trips'>
                        <Link className='nav-link' to="/SearchTrips">SearchTrips</Link>
                    </li>

                    <li className='nav-item packages'>
                        <Link className='nav-link' to="/Packages">Packages</Link>
                    </li>

                    <li className='nav-item community'>
                        <Link className='nav-link' to="/Board">Community</Link>
                    </li>
                    
                    <li className='nav-item mytrips'>
                        <Link className='nav-link' to="/MyTrips">My Trips</Link>
                    </li>

                     <li className='nav-item login'>
                        <Link className='nav-link' to="/LoginPage">Login</Link>
                    </li>
                </ul>
            </div>

            <div className='navbar-user'>
              <Link className='user-link' to="/LoginPage">로그인</Link>
              <Link className='user-link signup' to="/SignupPage">회원가입</Link>
              <Link className='user-link signup' to="/CustomerService">고객센터</Link>
            </div>
            

        </nav>
        </header>
        
      </div>

      
      <Routes>
        <Route path='/' element={<Mainpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
