import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useWebStore from "../../Store/useWebStore";
import './MyPage.css';

const Mypage = () => {
  const navigate = useNavigate();
  const { loginUser, logout } = useWebStore();
  const [menu, setMenu] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!loginUser) {
    return (
      <div className="mypage-login-error">
        <h2>로그인 정보가 없습니다.</h2>
        <button className="goto-login" onClick={() => navigate("/LoginPage")}>
          로그인 하러가기
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mypage-info">
        <h1 className="mypage-title">내 정보관리</h1>
      </div>

      <div>
        <div className="mypage-info-list">
          <h2 className="mypage-user-name">{loginUser.name} 님</h2>
          <p className="mypage-user-info">아이디: {loginUser.id}</p>
          <p className="mypage-user-info">생년월일 : {loginUser.birth}</p>
          <p className="mypage-user-info">전화번호: {loginUser.phone}</p>
          <p className="mypage-user-info">이메일: {loginUser.email}</p>
          
          <div className="management-information-logout">
            <button
                type="button"
                className="management-information-logout-btn"
                onClick={handleLogout}
                >
                로그아웃
            </button>
            </div>
        </div>
        
      </div>

      <div className="mypage-section">
        <p  className="mypage-menu-toggle" 
             onClick={() => setMenu(menu === "term" ? "" : "term")}>
          약관 확인 
        <span className="mypage-menu-arrow">▷</span>
        </p>

        <div className="mypage-term-box">
            {menu === "term" && (
            <div className="mypage-term-txtlist">
                <p className="mypage-term-text">
                • 마케팅 수신 동의 (이메일/SMS) 시 <br />
                상품 혜택 및 이벤트 정보를
                <br />
                받으실 수 있습니다.
                </p>
                <p className="mypage-term-text">
                • 예약/결제 정보 안내 등은
                <br />
                마케팅 수신 동의와 <br />
                상관없이 발송됩니다.
                </p>
                {/* <p className="mypage-term-text">
                    • 서비스 이용을 위해 약관 및 개인정보 <br/>
                     처리방침을 확인하고 이에 동의합니다.
                </p> */}

            </div>
            )}
        </div>

        <div className="mypage-link-box">
            <Link to="/ForgotPassword" className="mypage-password-link">
                    비밀번호 변경</Link>
        </div>
      </div>

      
    </div>
  );
};

export default Mypage;