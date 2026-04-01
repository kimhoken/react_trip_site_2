import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './SearchTrips/SearchPage';

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <Link to={'/'}>홈</Link>
        <Link to={'/SearchTrips'}>여행 검색</Link>
      </nav>
      <Routes>
        <Route path='/SearchTrips' element={<SearchPage/>} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
