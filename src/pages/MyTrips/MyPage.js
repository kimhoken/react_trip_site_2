import React from "react";
import { Link, useNavigate} from "react-router-dom";
import "./MyPage.css";
import useWebStore from "../../Store/useWebStore";

export default function MyPage(){

    const navigate = useNavigate()

    const { loginUser } = useWebStore()

    if (!loginUser) {
        return( 
            <div className="mypage-login-error">
                <h2>로그인 정보가 없습니다.</h2>
                <button className="goto-login" 
                        onClick={()=>navigate('/LoginPage')}>로그인 하러가기</button>
            </div>
            
            
    )
    }

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