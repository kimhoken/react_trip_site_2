import './App.css';

import ReservationList from './pages/MyTrips/ReservationList';
import Favorites from './pages/MyTrips/Favorites';
import TravelTips from './pages/Board/TravelTips';
import ReservationForm from './pages/MyTrips/ReservationForm';

import MyPage from './pages/MyTrips/MyPage';
import Mainpage from './pages/Mainpage';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import SignupPage from './Login/SignupPage';
import ForgotPassword from './Login/ForgotPassword';
import ResetPw from './Login/ResetPw';
import SearchPage from './SearchTrips/SearchPage';
import Packageinfo from './Packages/Packageinfo';
import PopularDestinations from './SearchTrips/PopularDestinations';
import DomesticPage from './SearchTrips/DomesticPage';
import Package from './Packages/Package';


import {ReservationProvider} from './context/ReservationProvider';
import Board from './Board/Board';


function App() { 

  return (
    <ReservationProvider>
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
          </nav>
        </header>

      </div>

      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path="/LoginPage" element={<LoginPage />} />        
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResetPw" element={<ResetPw />} />

        {/* 검색및 패키지 페이지  */}
        <Route path='/SearchTrips' element={<SearchPage />} />        
        <Route path='/Packages/:type/:contient/:country/:id' element={<Packageinfo/>}/>

        <Route path='/Packages' element={<Package />} >
        <Route index element={<Navigate to={'DomesticPage'} replace/>}/>
          <Route path='DomesticPage' element={<DomesticPage />} />
          <Route path='OverseasPage' element={<PopularDestinations />} />
        </Route>

        <Route path='/Board' element={<Board/>} />


        <Route path="/MyTrips" element={<ReservationList />} /> 
        <Route path="/MyTrips/favorites" element={<Favorites />} />
        <Route path="/tips" element={<TravelTips />} />
        <Route path="MyTrips/reserve" element={<ReservationForm />} />
        <Route path='MyTrips/reservations' element={<ReservationList/>}/>
        <Route path='/MyTrips/mypage' element={<MyPage/>} />
      </Routes>
    </BrowserRouter>
    </ReservationProvider>

  );
}

export default App;
