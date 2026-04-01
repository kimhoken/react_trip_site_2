import react, { useState } from "react";
import { Link } from "react-router-dom";
import {Test} from './Test';

const SearchPage = () => {
    const [serach, setSerach] = useState('');
    const [foreign, setFordign] = useState('');

    function listinfo(){
        {
           return Test.map((item)=>{
                    return(
                    <li>
                        <div>{item.title}</div>
                        <div>가격: {item.price}</div>
                        <div>나라: {item.country}</div>
                        <div>유형: {item.type}</div>
                    </li>
                    )
                })
            }
    } 

    return (
        <div>
            <header>
                <h2>여행 검색</h2>
            </header>
            <nav>
                <p>검색: <input value={serach} onChange={(e) => { setSerach(e.target.value) }} /></p>
                <p>[국내/해외]<select value={foreign} onChange={(e) => { setFordign(e.target.value) }}>
                    <option value={''}>[국내/해외]</option>
                    <option value={'internal'}>국내</option>
                    <option value={'foregin'}>해외</option>
                </select>
                </p>
            </nav>
            <div className="result-box">
                <div className="result-title">
                    검색결과
                </div>
                <div className="prodlist">
                    <ul className="list-main">
                        {listinfo()}
                    </ul>
                </div>

            </div>


        </div>
    )
}



export default SearchPage