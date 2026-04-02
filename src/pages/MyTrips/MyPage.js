import React from "react";
import { Link } from "react-router-dom";

export default function MyPage(){
    return(
        <div>
            <nav style={{ padding: "10px", borderBottom: "1px solid #000" }}>
                <Link to="/reservations" style={{ margin: "10px" }}>내 여행</Link>
                <Link to="/favorites" style={{ margin: "10px" }}>즐겨찾기</Link>
            </nav>      
        </div>
    )
}