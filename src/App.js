import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ReservationList from './pages/MyTrips/ReservationList';
import Favorites from './pages/MyTrips/Favorites';
import TravelTips from './pages/Board/TravelTips';
import ReservationForm from './pages/MyTrips/ReservationForm';
import { useEffect, useState } from 'react';

function App() {

  const [reservations,setReservations]=useState([])
// 로컬스토리지에서 예약 불러오기
  useEffect(() => {
    const saved = localStorage.getItem("reservations")
    if(saved){
      setReservations(JSON.parse(saved))
    }
  },[])
  //예약 변경 시 로컬스토리지에 저장
  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations))},[reservations])
 
  //새예약 추가
  const addReservation = (reservation) => {
    setReservations(prev => [...prev, reservation])
  }
  //예약삭제
  const deleteReservation = (id) => {
    setReservations(prev => prev.filter(item => item.id !== id))
  }
 

  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", borderBottom: "1px solid #000" }}>
        {/* <Link to="/">홈</Link> */}
        <Link to="/reservations" style={{ margin: "10px" }}>내 여행</Link>
        <Link to="/favorites" style={{ margin: "10px" }}>즐겨찾기</Link>
        <Link to="/tips" style={{ margin: "10px" }}>여행 팁</Link>
        <Link to="/reserve" style={{ marginRight: "10px" }}>예약하기</Link>
      </nav>  

      <Routes>
        <Route path="/" element={<ReservationList data={reservations} onDelete={deleteReservation}/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/tips" element={<TravelTips />} />
        <Route path="/reserve" element={<ReservationForm addReservation={addReservation}/>} />
        <Route path='/reservations' element={<ReservationList data={reservations} onDelete={deleteReservation}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
