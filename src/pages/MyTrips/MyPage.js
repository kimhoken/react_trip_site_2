import React from "react";
import { Link} from "react-router-dom";
import "./MyPage.css";

export default function MyPage(){

    return(
        <div className="mypage-body">

            <div className="mybox">

                <h2 className="mytitle">마이페이지</h2>

                <nav className="mymenu">
                    
                    <Link to="/MyInfo" className="myitem">내정보 관리</Link>
                    <Link to="/tips" className="myitem">내 체크리스트</Link>
                    <Link to="/MyTrips/favorites" className="myitem">즐겨찾기</Link>
                    <Link to="/MyTrips" className="myitem">내 예약/취소 내역</Link>
                    <Link to="/ForgotPassword">비밀번호 변경</Link>

                </nav>     
            </div>     
        </div>
    )
}