import './App.css';

import ReservationList from './pages/MyTrips/ReservationList';
import Favorites from './pages/MyTrips/Favorites';
import TravelTips from './pages/Board/TravelTips';
import ReservationForm from './pages/MyTrips/ReservationForm';
import { useEffect, useState } from 'react';
import MyPage from './pages/MyTrips/MyPage';
import Mainpage from './pages/Mainpage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LoginPage from './Login/LoginPage';
import SignupPage from './Login/SignupPage';
import ForgotPassword from './Login/ForgotPassword';
import ResetPw from './Login/ResetPw';
import SearchPage from './SearchTrips/SearchPage';
import Packageinfo from './Packages/Packageinfo';
import PopularDestinations from './SearchTrips/PopularDestinations';
import DomesticPage from './SearchTrips/DomesticPage';
import Package from './Packages/Package';




function App() {


  const [reservations, setReservations] = useState([])
  // 로컬스토리지에서 예약 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("reservations")
    if (saved) {
      setReservations(JSON.parse(saved))
    }
  }, [])
  //예약 변경 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations))
  }, [reservations])

  //새예약 추가
  const addReservation = (reservation) => {
    setReservations(prev => [...prev, reservation])
  }
  //예약삭제
  const deleteReservation = (id) => {
    setReservations(prev => prev.filter(item => item.id !== id))
  }

  const [users, setUsers] = useState([
    {
      name: '관리자',
      id: 'admin',
      pw: '1234',
      birth: '20000101',
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


            {/* <Link to={'/PopularDestinations'}>추천 여행지</Link> */}


          </nav>
        </header>

      </div>


      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path="/LoginPage" element={<LoginPage users={users} />} />
        <Route path="/SignupPage" element={<SignupPage users={users} setUsers={setUsers} />} />
        <Route path="/ForgotPassword" element={<ForgotPassword users={users} />} />
        <Route path="/ResetPw" element={<ResetPw users={users} setUsers={setUsers} />} />

        {/* 검색및 패키지 페이지  */}
        <Route path='/SearchTrips' element={<SearchPage />} />
        <Route path="/SearchTrips/PackageInfo/:id" element={<Packageinfo />} />

        <Route path='/Packages' element={<Package />} >
          <Route path='DomesticPage' element={<DomesticPage />} />
          <Route path='OverseasPage' element={<PopularDestinations />} />
        </Route>

        {/* 여기 마이페이지.. 세팅 해야함 */}
        <Route path="/MyTrips" element={<ReservationList data={reservations} onDelete={deleteReservation} />} />
        <Route path="/MyTrips/favorites" element={<Favorites />} />
        <Route path="/Board/tips" element={<TravelTips />} />
        <Route path="MyTrips/reserve" element={<ReservationForm addReservation={addReservation} />} />
        <Route path='MyTrips/reservations' element={<ReservationList data={reservations} onDelete={deleteReservation} />} />
        <Route path='/MyTrips/mypage' element={<MyPage />} />
      </Routes>
    </BrowserRouter>






  );
}

export default App;
