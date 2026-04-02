import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ReservationList from './pages/MyTrips/ReservationList';
import Favorites from './pages/MyTrips/Favorites';
import TravelTips from './pages/Board/TravelTips';
import ReservationForm from './pages/MyTrips/ReservationForm';
import { useEffect, useState } from 'react';
import MyPage from './pages/MyTrips/MyPage';

function App() {

  return (
    <ReservationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReservationList data={reservations} onDelete={deleteReservation}/>} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/tips" element={<TravelTips />} />
          <Route path="/reserve" element={<ReservationForm addReservation={addReservation}/>} />
          <Route path='/reservations' element={<ReservationList data={reservations} onDelete={deleteReservation}/>}/>
          <Route path='/mypage' element={<MyPage/>}/>
        </Routes>
      </BrowserRouter>
    </ReservationProvider>
  );
}

export default App;
