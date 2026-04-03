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

import NavbarMain from './pages/NavbarMain';
import Board from './Board/Board';


function App() { 

  return (
    <BrowserRouter>


      <div>
        <NavbarMain/>
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
    

  );
}

export default App;
