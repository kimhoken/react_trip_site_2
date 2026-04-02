import './App.css';

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
      <Link to={'/'}>홈</Link>
      <Link to='/login'>로그인</Link><br/>
      <Link to='/SignupPage'>회원가입</Link><br/>
      <Link to='/ForgotPassword'>아이디/비밀번호 찾기</Link>
      <Link to={'/SearchTrips'}>여행 검색</Link>
      <Link to={'/PopularDestinations'}>추천 여행지</Link>
      <Routes>
        <Route path="/login" element={<LoginPage users={users} />} />
        <Route path="/SignupPage" element={<SignupPage users={users} setUsers={setUsers}  />} />
        <Route path="/ForgotPassword" element={<ForgotPassword users={users} />} />
        <Route path="/ResetPw" element={<ResetPw users={users} setUsers={setUsers} />} />
        <Route path='/SearchTrips' element={<SearchPage/>} />
        <Route path="/SearchTrips/PackageInfo/:id" element={<Packageinfo/>}/>
        <Route path='/PopularDestinations' element={<PopularDestinations/>}/>
      </Routes>

    
  );
}

export default App;
