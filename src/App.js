import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './SearchTrips/SearchPage';
import Packageinfo from './Packages/Packageinfo';
import PopularDestinations from './SearchTrips/PopularDestinations';

function App() {

  
  return (

    <BrowserRouter>
    <div>
      <nav>
        <Link to={'/'}>홈</Link>
        <Link to={'/SearchTrips'}>여행 검색</Link>
        <Link to={'/PopularDestinations'}>추천 여행지</Link>
      </nav>
      <Routes>
        <Route path='/SearchTrips' element={<SearchPage/>} />
        <Route path="/SearchTrips/PackageInfo/:id" element={<Packageinfo/>}/>
        <Route path='/PopularDestinations' element={<PopularDestinations/>}/>
        
      </Routes>


    </div>
    </BrowserRouter>
  );
}

export default App;
