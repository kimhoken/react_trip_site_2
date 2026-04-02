import './App.css';

import Mainpage from './pages/Mainpage';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import SignupPage from './Login/SignupPage';
import { useState } from 'react';
import ForgotPassword from './Login/ForgotPassword';
import ResetPw from './Login/ResetPw';
import SearchPage from './SearchTrips/SearchPage';
import Packageinfo from './Packages/Packageinfo';
import PopularDestinations from './SearchTrips/PopularDestinations';

function App() {

  const [users, setUsers] = useState([
    {
      name: '관리자',
      id: 'admin',
      pw: '1234',
      birth: '2000-01-01',
      email: 'admin@test.com',
      phone: '01000000000'
    }
  ]);

  return (
    <BrowserRouter>


      <div>
        <header>
          <nav className='navbar'>
            <Link className='navbar-logo' to="/">
              <img src="/images/logo2.png" width="145" />
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

            
            {/* <--<Link to={'/PopularDestinations'}>추천 여행지</Link>--> */}


          </nav>
        </header>

      </div>


      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path="/LoginPage" element={<LoginPage users={users} />} />
        <Route path="/SignupPage" element={<SignupPage users={users} setUsers={setUsers} />} />
        <Route path="/ForgotPassword" element={<ForgotPassword users={users} />} />
        <Route path="/ResetPw" element={<ResetPw users={users} setUsers={setUsers} />} />
        <Route path='/SearchTrips' element={<SearchPage />} />
        <Route path="/SearchTrips/PackageInfo/:id" element={<Packageinfo />} />
        <Route path='/PopularDestinations' element={<PopularDestinations />} />
      </Routes>
    </BrowserRouter>





  );
}

export default App;
